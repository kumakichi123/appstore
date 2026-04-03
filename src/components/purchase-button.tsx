"use client";

import { useState } from "react";

import type { Lang } from "@/lib/i18n";

type PurchaseButtonProps = {
  productSlug: string;
  priceLabel: string;
  lang: Lang;
};

export function PurchaseButton({
  productSlug,
  priceLabel,
  lang,
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
      window.alert(
        lang === "ja"
          ? "購入ページを開けませんでした。Stripe の設定を確認してください。"
          : "Could not open the checkout page. Check your Stripe configuration."
      );
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
      aria-label={
        lang === "ja" ? `${priceLabel}で購入` : `${priceLabel} purchase button`
      }
    >
      {isLoading ? "..." : lang === "ja" ? `${priceLabel}で購入` : `Buy ${priceLabel}`}
    </button>
  );
}
