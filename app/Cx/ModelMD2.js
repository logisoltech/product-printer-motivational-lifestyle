import Image from "next/image";

export default function ModelMD2Section() {
  return (
    <section className="w-full px-4 bg-[#E2E0D1] pb-10 pt-6 sm:px-6 md:px-8 lg:pt-10">
      <h2
        className="mx-auto mb-6 max-w-5xl text-center text-3xl font-black tracking-wide text-neutral-950 sm:mb-8 sm:text-4xl"
        data-aos="fade-down"
      >
        Model MD2
      </h2>
      <div
        className="relative mx-auto aspect-video max-w-5xl overflow-hidden rounded-3xl sm:rounded-[1.75rem]"
        data-aos="zoom-in-up"
      >
        <Image
          src="/printerimg.jpeg"
          alt="Model MD2 printer"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 64rem"
        />
      </div>
    </section>
  );
}
