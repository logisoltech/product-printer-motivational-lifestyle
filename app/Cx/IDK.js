import Image from "next/image";

export default function IDKSection() {
  return (
    <section className="scroll-mt-6 bg-[#E2E0D1] px-4 py-10 sm:px-6 md:px-8 md:py-14">
      <div className="relative mx-auto max-w-7xl">
        <div className="relative w-full translate-x-14 sm:translate-x-20 md:translate-x-36 lg:translate-x-44" data-aos="fade-up">
          <Image
            src="/taster-img.png"
            alt="Food printer taster device with taste map"
            width={1200}
            height={900}
            className="mx-auto h-auto w-full max-w-[min(100%,28rem)] object-contain sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"
            sizes="(max-width: 768px) 100vw, 56rem"
          />
        </div>

        <div
          className="relative z-10 mt-6 flex flex-col text-center md:absolute md:left-18 md:top-1/2 md:mt-0 md:max-w-sm md:-translate-x-4 md:-translate-y-1/2 md:text-left lg:max-w-md lg:-translate-x-8 xl:-translate-x-12"
          data-aos="fade-right"
        >
          <h2 className="font-bold uppercase tracking-wide text-neutral-950">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Taster
            </span>
            <span className="mt-1 block text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Comes with printer
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-base font-bold leading-relaxed text-neutral-800 sm:mt-5 sm:text-lg md:max-w-none">
            Always healthiest tastiest, comes with taster. Choose any taste you
            want just place it on your tongue.
          </p>
        </div>
      </div>
    </section>
  );
}
