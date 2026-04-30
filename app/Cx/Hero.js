"use client";

import { useEffect } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import Nav from "./Nav";

export default function Hero() {
  useEffect(() => {
    let mounted = true;

    async function initAOS() {
      const AOS = (await import("aos")).default;
      if (!mounted) return;
      AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        offset: 60,
      });
      requestAnimationFrame(() => AOS.refreshHard());
    }

    initAOS();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/hero-bg.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Top vignette so logo & pill nav stay readable */}
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-linear-to-b from-black/50 via-black/10 to-transparent"
        aria-hidden
      />

      <a
        href="/"
        className="absolute left-6 top-6 z-30 sm:left-8 sm:top-8"
        aria-label="Home"
        data-aos="fade-right"
        data-aos-delay="80"
      >
        <Image
          src="/logo.png"
          alt="Institutional Lifestyle"
          width={400}
          height={130}
          className="h-16 w-auto sm:h-19 md:h-20 lg:h-24"
          priority
        />
      </a>

      <Nav />

      {/* Bottom white fade (image polish) */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-15 h-[min(42vh,22rem)] bg-linear-to-t from-white from-12% via-white/85 via-45% to-transparent"
        aria-hidden
      />

      {/* Headline: below navbar — inner wrapper caps width on all breakpoints */}
      <div
        className="absolute inset-x-0 top-32 z-20 flex justify-center px-5 sm:top-[5.75rem] sm:px-10 md:top-24 lg:top-[6.75rem]"
        data-aos="fade-up"
        data-aos-delay="220"
      >
        <div className="w-full max-w-[min(34rem,calc(100%-2rem))] text-center sm:max-w-[min(38rem,calc(100%-3rem))] md:max-w-[min(42rem,calc(100%-4rem))]">
          <p className="font-extrabold uppercase tracking-[0.025em] text-black text-base leading-snug drop-shadow-[0_1px_12px_rgba(255,255,255,0.55)] sm:text-lg sm:tracking-[0.02em] md:text-xl md:leading-snug lg:text-[1.35rem] lg:leading-snug">
            ONE INGREDIENT PRODUCT PRINTER - ONE PRODUCT PRINTER - ONE
            INGREDIENT FORMULA DURABLE, FLEXIBLE AND RECYCLABLE INTO ANY OTHER
            PRODUCT
          </p>
          <p className="mt-3 text-pretty text-sm font-normal leading-snug text-black/90 drop-shadow-[0_1px_10px_rgba(255,255,255,0.45)] sm:mt-4 sm:text-[0.9375rem] sm:leading-snug md:text-base md:leading-snug">
            All you need is the right A.I. software that we will supply for each
            product.
          </p>
        </div>
      </div>
    </section>
  );
}