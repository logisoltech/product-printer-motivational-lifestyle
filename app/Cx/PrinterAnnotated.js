import Image from "next/image";

/** Matches intrinsic size of public/3d-printer-big.png */
const IMG_W = 1150;
const IMG_H = 1061;

function pctY(y) {
  return `${(y / IMG_H) * 100}%`;
}

function pctX(x) {
  return `${(x / IMG_W) * 100}%`;
}

/**
 * Horizontal dotted connector between label anchor and machine point; bullet on machine.
 */
function HLine({ labelX, machineX, y }) {
  const lo = Math.min(labelX, machineX);
  const hi = Math.max(labelX, machineX);
  return (
    <>
      <line
        x1={lo}
        y1={y}
        x2={hi}
        y2={y}
        stroke="#171717"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeDasharray="3 10"
      />
      <circle cx={machineX} cy={y} r={5} fill="#171717" />
    </>
  );
}

export default function PrinterAnnotatedSection() {
  /* Leaders + label positions — longer lines; left labels farther left, product farther right */
  const food = { y: 300, textRight: 54, machine: 378 };
  const table = { y: 668, textRight: 80, machine: 230 };
  const recycler = { y: 886, textRight: 252, machine: 188 };
  const product = { y: 402, machine: 752, textLeft: 1108 };

  return (
    <section
      id="printer-annotated"
      className="scroll-mt-6 overflow-x-visible bg-[#E2E0D1] px-4 py-12 sm:px-6 md:py-16 md:px-8"
      
    >
      <div className="relative mx-auto w-full max-w-md overflow-visible">
        <div className="relative w-full overflow-visible">
          <Image
            src="/3d-printer-big.png"
            alt="3D home printer and recycler with food printing, workspace, recycling, and product printing zones"
            width={IMG_W}
            height={IMG_H}
            className="block h-auto w-full"
            sizes="(max-width: 448px) 100vw, 448px"
          />

          <svg
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
            viewBox={`0 0 ${IMG_W} ${IMG_H}`}
            preserveAspectRatio="xMidYMid meet"
            overflow="visible"
            aria-hidden
          >
            <HLine labelX={food.textRight} machineX={food.machine} y={food.y} />
            <HLine labelX={table.textRight} machineX={table.machine} y={table.y} />
            <HLine labelX={recycler.textRight} machineX={recycler.machine} y={recycler.y} />
            <HLine labelX={product.textLeft} machineX={product.machine} y={product.y} />
          </svg>

          <div
            className="absolute max-w-[min(52vw,14rem)] text-right sm:max-w-[210px]"
            data-aos="fade-right"
            style={{
              left: pctX(-196),
              top: pctY(food.y),
              transform: "translateY(-50%)",
            }}
          >
            <p className="text-[0.6rem] font-extrabold uppercase leading-tight tracking-[0.14em] text-neutral-950 sm:text-xs md:text-sm">
              Food printer
            </p>
          </div>

          <div
            className="absolute max-w-[min(52vw,14rem)] text-right sm:max-w-[210px]"
            data-aos="fade-right"
            style={{
              left: pctX(-400),
              top: pctY(table.y),
              transform: "translateY(-50%)",
            }}
          >
            <p className="text-[0.6rem] font-extrabold uppercase leading-tight tracking-[0.14em] text-neutral-950 sm:text-xs md:text-sm">
              Computer table
            </p>
          </div>

          <div
            className="absolute max-w-[min(52vw,14rem)] text-right sm:max-w-[210px]"
            data-aos="fade-right"
            style={{
              left: pctX(-230),
              top: pctY(recycler.y),
              transform: "translateY(-50%)",
            }}
          >
            <p className="text-[0.6rem] font-extrabold uppercase leading-tight tracking-[0.14em] text-neutral-950 sm:text-xs md:text-sm">
              Recycler
            </p>
          </div>

          <div
            className="absolute max-w-[min(54vw,15rem)] text-left sm:max-w-[230px]"
            data-aos="fade-left"
            style={{
              left: pctX(product.textLeft),
              top: pctY(product.y),
              transform: "translateY(-50%)",
            }}
          >
            <p className="text-[0.6rem] font-extrabold uppercase leading-tight tracking-[0.14em] text-neutral-950 sm:text-xs md:text-sm">
              Product printer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
