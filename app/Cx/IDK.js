import Image from "next/image";

export default function IDKSection() {
  return (
    <section className="scroll-mt-6 bg-[#E2E0D1] px-4 py-10 sm:px-6 md:px-8 md:py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <div className="relative w-full" data-aos="fade-up">
          <Image
            src="/taster.png"
            alt="Food printer taster device with taste map"
            width={1200}
            height={900}
            className="mx-auto h-auto w-full max-w-[min(100%,40rem)] object-contain sm:max-w-[46rem] md:max-w-[52rem] lg:max-w-[60rem]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 960px"
          />
        </div>

        <h2
          className="mt-8 whitespace-nowrap text-xl font-bold uppercase tracking-wide text-neutral-950 sm:mt-10 sm:text-2xl md:text-3xl lg:text-4xl"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          Food Printer - One Printer Formula
        </h2>

        <p
          className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-800 sm:mt-5 sm:text-lg md:max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="140"
        >
          Always healthiest tastiest - comes with taster. Choose any taste you
          want just place it on your tongue.
        </p>
      </div>
    </section>
  );
}
