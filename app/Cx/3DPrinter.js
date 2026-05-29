import Image from "next/image";
import { PrinterAnnotated } from "./PrinterAnnotated";

export default function ThreeDPrinterSection() {
  return (
    <section
      id="about"
      className="scroll-mt-6 overflow-x-visible bg-[#E2E0D1] px-4 py-10 sm:px-6 md:px-8 md:py-12"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        <h2
          className="text-3xl font-bold uppercase tracking-wide text-neutral-950 sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
          data-aos="fade-down"
        >
          3d home printer/recycler
        </h2>
        <p
          className="mt-6 max-w-3xl text-base leading-relaxed text-neutral-800 sm:mt-8 sm:text-lg md:max-w-4xl"
          data-aos="fade-down"
          data-aos-delay="80"
        >
          3D Home Hi-Speed Printer/Recycler has 2 Models - Expandable and Mini.
          All you need is the right A.I software that we will supply for each
          product.
        </p>

        <div
          className="mt-10 flex w-full flex-col items-center gap-8 md:mt-12 lg:flex-row lg:items-center lg:justify-between lg:gap-10 xl:gap-14"
          data-aos="fade-up"
          data-aos-delay="140"
        >
          <div className="shrink-0 translate-x-20 sm:translate-x-28 lg:translate-x-40 xl:translate-x-52">
            <PrinterAnnotated className="relative w-[min(14rem,42vw)] shrink-0 overflow-visible sm:w-56 md:w-64 lg:w-72" />
          </div>

          <div className="flex shrink-0 -translate-x-8 items-center justify-center gap-6 sm:-translate-x-12 sm:gap-8 lg:-translate-x-20 xl:-translate-x-28">
            <Image
              src="/can.png"
              alt="Ready made food product can"
              width={320}
              height={480}
              className="h-auto w-[min(14rem,42vw)] shrink-0 sm:w-56 md:w-64 lg:w-72"
            />
            <Image
              src="/table-printer.png"
              alt="3D home printer and recycler on computer table"
              width={1150}
              height={1061}
              className="h-auto w-[min(14rem,42vw)] shrink-0 sm:w-56 md:w-64 lg:w-72"
              sizes="(max-width: 640px) 42vw, (max-width: 1024px) 16rem, 18rem"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
