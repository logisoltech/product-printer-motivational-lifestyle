import Image from "next/image";

export default function IDKSection() {
  return (
    <section className="scroll-mt-6 bg-[#E2E0D1] px-4 py-10 sm:px-6 md:px-8 md:py-14">
      <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[1fr_1.35fr] md:gap-10 lg:gap-12">
        <div
          className="flex flex-col text-center md:ml-auto md:max-w-md md:text-left lg:max-w-lg"
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
            Always healthiest tastiest - comes with taster. Choose any taste you
            want just place it on your tongue.
          </p>
        </div>

        <div className="relative flex justify-center md:justify-end" data-aos="fade-left">
          <Image
            src="/taster-img.png"
            alt="Food printer taster device with taste map"
            width={1200}
            height={900}
            className="h-auto w-full max-w-[min(100%,34rem)] object-contain sm:max-w-2xl md:max-w-full lg:max-w-4xl xl:max-w-5xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 64rem"
          />
        </div>
      </div>
    </section>
  );
}
