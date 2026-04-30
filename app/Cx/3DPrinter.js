import Image from "next/image";

export default function ThreeDPrinterSection() {
  return (
    <section
      id="about"
      className="scroll-mt-6 bg-[#E2E0D1] px-4 py-10 sm:px-6 md:px-8 md:py-12"
    >
      <div className="mx-auto grid max-w-screen-2xl items-center gap-8 md:grid-cols-2 md:gap-8 lg:gap-10 xl:gap-12">
        {/* Crop intrinsic side padding in the PNG via cover + portrait box */}
        <div
          className="relative mx-auto aspect-3/4 w-full max-w-xs overflow-hidden sm:max-w-sm md:aspect-7/10 md:max-h-[min(72vh,26rem)] md:max-w-xs lg:max-w-sm xl:max-w-md"
          data-aos="fade-right"
        >
          <Image
            src="/3d.png"
            alt="Gravity Motor device with liquid pistons and belt-and-pulley assembly"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) min(100vw, 18rem), (max-width: 1280px) 28vw, 360px"
          />
        </div>
        <div className="flex flex-col text-left" data-aos="fade-left">
          <h2 className="text-3xl font-bold uppercase tracking-wide text-neutral-950 sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            <span className="block">3d home printer/recycler</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-800 sm:text-lg">
          3D Home Hi-Speed Printer/Recycler has 2 Models - Expandable and Mini. All you need is the right A.I software that we will supply for each product.
          </p>
        </div>
      </div>
    </section>
  );
}