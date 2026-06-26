import Image from "next/image";

export default function IDKSection() {
  return (
    <section className="scroll-mt-6 bg-[#E2E0D1] px-4 py-10 sm:px-6 md:px-8 md:py-14">
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
        <div
          className="flex flex-col text-center md:text-left"
          data-aos="fade-right"
        >
          <h2 className="text-xl font-bold uppercase tracking-wide text-neutral-950 sm:text-2xl md:text-3xl lg:text-4xl">
            Taster <br/> Comes with printer
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-800 sm:mt-5 sm:text-lg md:max-w-none">
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
            className="h-auto w-full max-w-[min(100%,26rem)] object-contain sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 32rem, 42rem"
          />
        </div>
      </div>
    </section>
  );
}
