"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import CheckoutButton from "@/components/checkout/CheckoutButton";

const features = [
  {
    label: "Ergonomia",
    description: "Empunhãdura anatômica antiderrapante para sessões longas sem fadiga muscular.",
    value: "Precision Grip 2.0",
  },
  {
    label: "Resistência Térmica",
    description: "Suporta uso intenso com sopradores térmicos sem deformar ou perder precisão.",
    value: "Até 120 ºC",
  },
  {
    label: "Material da Lâmina",
    description: "Liga premium com corte uniforme que evita micro-ranhuras no filme.",
    value: "BladeX Carbon Steel",
  },
  {
    label: "Peso Balanceado",
    description: "Distribuição de peso otimizada para movimentos precisos em qualquer ângulo.",
    value: "180g Distribuído",
  },
];

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let gsapInstance: typeof import("gsap") | null = null;

    const loadGsap = async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      gsapInstance = { default: gsap } as unknown as typeof import("gsap");

      if (!sectionRef.current || !imageRef.current) return;

      const ctx = gsap.context(() => {
        gsap.fromTo(
          imageRef.current,
          { rotateY: -6, opacity: 0.85 },
          {
            rotateY: 6,
            opacity: 1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top center",
              end: "bottom center",
              scrub: 1.5,
            },
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    };

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion) {
      loadGsap();
    }
  }, []);

  return (
    <section
      id="showcase"
      ref={sectionRef}
      className="relative bg-background-soft py-20 text-white md:py-32"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-10 lg:px-16 tv4k:max-w-8xl tv4k:px-24">
        {/* Image */}
        <div
          ref={imageRef}
          className="motion-heavy relative flex items-center justify-center"
          style={{ perspective: "1000px" }}
        >
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-background-elevated shadow-2xl shadow-black/60">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-gray-700">
                <p className="font-mono text-sm">hero-tool.webp</p>
                <p className="mt-2 text-xs">Substitua pela imagem real do produto</p>
              </div>
            </div>
            {/* Uncomment when image is available: */}
            {/* <Image src="/images/hero-tool.webp" alt="Ferramenta Joker Wrap Tools" fill className="object-contain" sizes="(min-width: 1024px) 480px, 100vw" /> */}
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-col justify-center gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              Engenharia Joker
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl tv4k:text-5xl">
              Construída para precisão em cada puxada de filme.
            </h2>
            <p className="mt-4 text-body-fluid text-gray-300">
              Cada detalhe foi pensado para manter controle absoluto sobre o filme,
              do primeiro aquecimento ao último acabamento.
            </p>
          </div>

          <dl className="space-y-5">
            {features.map((item) => (
              <div
                key={item.label}
                className="border-l-2 border-gray-800 pl-4 transition-colors duration-300 hover:border-accent/70"
              >
                <dt className="flex items-center justify-between text-sm font-medium text-gray-100">
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-accent">{item.value}</span>
                </dt>
                <dd className="mt-1 text-sm text-gray-400">{item.description}</dd>
              </div>
            ))}
          </dl>

          <CheckoutButton productId="HERO_TOOL_ID" size="default">
            Adicionar ao carrinho
          </CheckoutButton>
        </div>
      </div>
    </section>
  );
}
