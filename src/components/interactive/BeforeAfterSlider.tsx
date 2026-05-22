"use client";

import { useState, useRef, useCallback } from "react";

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = clientX - rect.left;
    const next = Math.max(0, Math.min(100, (relX / rect.width) * 100));
    setPosition(next);
  }, []);

  const handlePointerDown = (clientX: number) => {
    isDraggingRef.current = true;
    updatePosition(clientX);
  };

  const handlePointerMove = (clientX: number) => {
    if (!isDraggingRef.current) return;
    updatePosition(clientX);
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <section className="bg-background py-20 text-white md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16 tv4k:max-w-8xl tv4k:px-24">
        <div className="max-w-3xl space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            Antes &amp; Depois
          </p>
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl tv4k:text-5xl">
            Do comum ao{" "}
            <span className="text-accent">absolutamente imortal</span>.
          </h2>
          <p className="text-body-fluid text-gray-300">
            Arraste a barra para ver o acabamento Joker: alinhamento perfeito de filme,
            brilho controlado e zero marcas de imperfeicão.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative mx-auto mt-10 aspect-[16/9] w-full max-w-4xl cursor-ew-resize overflow-hidden rounded-3xl bg-gray-900 select-none tv4k:max-w-5xl"
          onMouseLeave={handlePointerUp}
          onMouseUp={handlePointerUp}
          onMouseMove={(e) => handlePointerMove(e.clientX)}
          onTouchEnd={handlePointerUp}
          onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
          onMouseDown={(e) => handlePointerDown(e.clientX)}
          onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
        >
          {/* Before */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
            <p className="text-center font-mono text-sm text-gray-600">
              Antes<br /><span className="text-xs">Substitua por /images/before.webp</span>
            </p>
          </div>

          {/* After */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <div className="absolute inset-0 flex min-w-[200%] items-center justify-center bg-gradient-to-br from-gray-950 to-background">
              <div
                className="relative flex h-full min-w-[50vw] max-w-4xl items-center justify-center"
                style={{ minWidth: "100vw" }}
              >
                <p
                  className="text-center font-mono text-sm text-accent/60"
                  style={{ transform: `translateX(${50 - position}%)`, maxWidth: "50vw" }}
                >
                  Depois<br /><span className="text-xs">Substitua por /images/after.webp</span>
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            className="absolute inset-y-0 flex items-center"
            style={{ left: `${position}%` }}
          >
            <div className="relative -translate-x-1/2">
              <div className="h-screen w-[2px] bg-white/60" />
              <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-background-elevated/90 text-white shadow-xl shadow-black/50">
                <span className="font-mono text-xs select-none">⇆</span>
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="pointer-events-none absolute bottom-4 left-6 font-mono text-xs uppercase tracking-widest text-white/60">Antes</div>
          <div className="pointer-events-none absolute bottom-4 right-6 font-mono text-xs uppercase tracking-widest text-accent/80">Depois</div>
        </div>
      </div>
    </section>
  );
}
