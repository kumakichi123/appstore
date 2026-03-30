"use client";

import { useState } from "react";

type PurchaseButtonProps = {
  productSlug: string;
  priceLabel: string;
};

const purchaseErrorMessage =
  "\u8cfc\u5165\u30da\u30fc\u30b8\u3092\u958b\u3051\u307e\u305b\u3093\u3067\u3057\u305f\u3002Stripe \u306e\u8a2d\u5b9a\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002";

const ariaLabelSuffix = "\u3067\u8cfc\u5165";

export function PurchaseButton({
  productSlug,
  priceLabel,
}: PurchaseButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    try {
      setIsLoading(true);

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productSlug }),
      });

      if (!response.ok) {
        throw new Error("Checkout request failed");
      }

      const { url } = (await response.json()) as { url?: string };

      if (!url) {
        throw new Error("Checkout URL is missing");
      }

      window.location.href = url;
    } catch (error) {
      console.error(error);
      window.alert(purchaseErrorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      type="button"
      className="buy-button"
      onClick={handleClick}
      disabled={isLoading}
      aria-label={`${priceLabel}${ariaLabelSuffix}`}
    >
      {isLoading ? "..." : priceLabel}
    </button>
  );
}
