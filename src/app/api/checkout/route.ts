import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { products } from "@/data/products";
import { getStripeClient } from "@/lib/stripe";

type CheckoutBody = {
  productSlug?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CheckoutBody;
    const product = products.find((item) => item.slug === body.productSlug);

    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 },
      );
    }

    const headerList = await headers();
    const origin =
      process.env.NEXT_PUBLIC_SITE_URL ??
      `${headerList.get("x-forwarded-proto") ?? "http"}://${headerList.get("host")}`;

    const stripe = getStripeClient();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${origin}/api/purchase/success?productSlug=${product.slug}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: origin,
      metadata: {
        productSlug: product.slug,
      },
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: product.currency,
            unit_amount: product.price,
            product_data: {
              name: product.name,
              description: product.description,
              images: [`${origin}${product.image}`],
            },
          },
        },
      ],
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 },
    );
  }
}
