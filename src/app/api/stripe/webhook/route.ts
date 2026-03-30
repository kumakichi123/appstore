import Stripe from "stripe";

import { upsertPurchase } from "@/lib/purchase-store";
import { getStripeClient } from "@/lib/stripe";

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return new Response("Missing webhook configuration", { status: 400 });
  }

  const rawBody = await request.text();

  let event: Stripe.Event;

  try {
    const stripe = getStripeClient();
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (error) {
    console.error(error);
    return new Response("Invalid webhook signature", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const productSlug = session.metadata?.productSlug;
    const email = session.customer_details?.email;

    if (productSlug && email) {
      await upsertPurchase({
        sessionId: session.id,
        paymentIntentId:
          typeof session.payment_intent === "string"
            ? session.payment_intent
            : session.payment_intent?.id ?? "",
        productSlug,
        email,
        amountTotal: session.amount_total ?? 0,
        currency: session.currency ?? "jpy",
        purchasedAt: new Date((session.created ?? Date.now() / 1000) * 1000).toISOString(),
      });
    }
  }

  return new Response("ok");
}
