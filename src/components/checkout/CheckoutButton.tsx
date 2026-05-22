"use client";

import { useState } from "react";

function buildNuvemshopCheckoutUrl(params: {
  storeSubdomain: string;
  productId: string;
  variantId?: string;
  quantity?: number;
}) {
  const { storeSubdomain, productId, variantId, quantity = 1 } = params;
  const base = `https://${storeSubdomain}.com.br/checkout/cart/add`;
  const url = new URL(base);
  url.searchParams.set("product", productId);
  url.searchParams.set("qty", String(quantity));
  if (variantId) url.searchParams.set("variant", variantId);
  return url.toString();
}

type CheckoutButtonProps = {
  productId: string;
  variantId?: string;
  quantity?: number;
  storeSubdomain?: string;
  className?: string;
  children?: React.ReactNode;
  size?: "default" | "large";
};

export default function CheckoutButton({
  productId,
  variantId,
  quantity = 1,
  storeSubdomain = "joker-wrap-tools",
  className = "",
  children = "Comprar agora",
  size = "default",
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    const checkoutUrl = buildNuvemshopCheckoutUrl({
      storeSubdomain,
      productId,
      variantId,
      quantity,
    });
    setTimeout(() => {
      window.location.href = checkoutUrl;
    }, 120);
  };

  const sizeClasses = size === "large"
    ? "px-10 py-4 text-base"
    : "px-8 py-3 text-sm";

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className={`inline-flex items-center justify-center rounded-full bg-accent font-semibold uppercase tracking-widest text-black shadow-neon-accent transition-all duration-200 hover:bg-accent-hover hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed ${sizeClasses} ${className}`}
    >
      {loading && (
        <span className="mr-3 inline-flex h-4 w-4 animate-spin rounded-full border-2 border-black/40 border-t-black" />
      )}
      <span>{children}</span>
    </button>
  );
}
