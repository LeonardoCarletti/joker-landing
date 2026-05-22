"use client";

import { useEffect, useRef } from "react";
import CheckoutButton from "@/components/checkout/CheckoutButton";

export default function Hero() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const elements = [badgeRef.current, h1Ref.current, subtitleRef.current, ctaRef.current];
    elements.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 500 + i * 120);
    });
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[600px] overflow-hidden bg-background totem-layout">
      {/* Video background */}
      <div className="absolute inset-0 -z-20">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        >
          <source src="/videos/hero-bg.webm" type="video/webm" />
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay + gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-background/80 to-background" />
      <div className="absolute inset-0 -z-10 bg-hero-gradient mix-blend-screen opacity-60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-6 md:px-10 lg:px-16 tv4k:px-24">
        <div className="mx-auto w-full max-w-6xl tv4k:max-w-8xl">
          <div className="max-w-2xl space-y-6 tv4k:max-w-4xl">
            <p
              ref={badgeRef}
              className="font-mono text-xs uppercase tracking-[0.35em] text-accent"
            >
              Joker Wrap Tools
            </p>

            <h1
              ref={h1Ref}
              className="font-sans text-display-hero font-semibold leading-tight text-white tv4k:text-[5rem]"
            >
              Ferramentas criadas para quem leva o{" "}
              <span className="text-accent">envelopamento</span> a outro nível.
            </h1>

            <p
              ref={subtitleRef}
              className="max-w-xl text-display-sub text-gray-300 tv4k:max-w-2xl"
            >
              Performance, precisão e personalidade em cada detalhe. Projetadas
              para profissionais que não aceitam marcas, bolhas ou improvisos.
            </p>

            <div ref={ctaRef} className="flex flex-wrap items-center gap-4">
              <CheckoutButton
                productId="HERO_TOOL_ID"
                variantId="DEFAULT"
                size="large"
              >
                Comprar agora
              </CheckoutButton>

              <a
                href="#showcase"
                className="rounded-full border border-accent/40 px-6 py-2.5 text-sm font-medium uppercase tracking-[0.2em] text-gray-200 transition-all hover:border-accent hover:text-accent"
              >
                Ver linha completa
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-xs font-mono uppercase tracking-[0.2em] text-gray-500">
              <span>Automotivo</span>
              <span>Arquitetônico</span>
              <span>Window Film</span>
              <span>PPF</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 totem-hide">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-accent/60 to-transparent" />
      </div>
    </section>
  );
}
