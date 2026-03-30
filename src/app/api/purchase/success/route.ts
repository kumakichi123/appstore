import { NextResponse } from "next/server";

import { getStripeClient } from "@/lib/stripe";

export async function GET(request: Request) {
  const { searchParams, origin, protocol } = new URL(request.url);
  const sessionId = searchParams.get("session_id");
  const productSlug = searchParams.get("productSlug");

  if (!sessionId || !productSlug) {
    return NextResponse.redirect(`${origin}/download/${productSlug ?? ""}`);
  }

  try {
    const stripe = getStripeClient();
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (
      session.payment_status === "paid" &&
      session.metadata?.productSlug === productSlug
    ) {
      const response = NextResponse.redirect(`${origin}/download/${productSlug}`);
      response.cookies.set(`purchase_${productSlug}`, "1", {
        httpOnly: true,
        sameSite: "lax",
        secure: protocol === "https:",
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
      });
      return response;
    }
  } catch (error) {
    console.error(error);
  }

  return NextResponse.redirect(`${origin}/download/${productSlug}`);
}
