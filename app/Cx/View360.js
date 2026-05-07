'use client';

import dynamic from "next/dynamic";

const View360Canvas = dynamic(() => import("./View360Canvas"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-neutral-950 text-sm text-white/55">
      Loading 3D model…
    </div>
  ),
});

export default function View360Section() {
  return (
    <section
      id="360-view"
      className="scroll-mt-6 bg-[#E2E0D1] px-4 py-10 sm:px-6 md:px-8 md:py-12"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-6 text-center text-xl font-bold uppercase tracking-[0.2em] text-neutral-950 sm:mb-8 sm:text-2xl md:text-[1.65rem]">
          360 view
        </h2>

        <div
          className="relative mx-auto aspect-2/1 w-full max-w-4xl overflow-hidden rounded-3xl bg-neutral-950 sm:rounded-[1.75rem]"
          role="region"
          aria-label="Interactive 3D product view — drag to rotate"
          data-aos="flip-left"
        >
          <View360Canvas />
        </div>
      </div>
    </section>
  );
}
