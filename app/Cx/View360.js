import Image from "next/image";

function Icon360({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="58" cy="64" r="44" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <circle cx="98" cy="34" r="5.5" fill="white" />
      <text
        x="58"
        y="70"
        textAnchor="middle"
        fill="white"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="28"
        fontWeight="700"
      >
        360
      </text>
    </svg>
  );
}

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
          aria-label="360 degree product view"
          data-aos="flip-left"
        >
          <Image
            src="/360-view.png"
            alt="Product 360 view — interactive rotation"
            fill
            className="object-cover object-center grayscale brightness-[0.5] contrast-110"
            sizes="(max-width: 896px) 100vw, 896px"
          />
          <div className="absolute inset-0 bg-neutral-950/55" aria-hidden />
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="pointer-events-none flex flex-col items-center">
              <Icon360 className="h-19 w-19 shrink-0 drop-shadow-md sm:h-22 sm:w-22" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
