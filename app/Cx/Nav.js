const LINKS = [
  { label: "About", href: "#about" },
  { label: "Spreadsheet", href: "#spreadsheet" },
  { label: "360", href: "#360" },
  { label: "Specs", href: "#specs" },
];

export default function Nav() {
  return (
    <>
      <nav
        className="absolute left-1/2 top-21 z-30 w-[min(calc(100vw-2rem),72rem)] -translate-x-1/2 rounded-full border border-white/10 bg-black/40 px-6 py-2.5 shadow-lg backdrop-blur-md sm:top-8 sm:w-auto sm:px-20 sm:py-3"
        aria-label="Primary"
        data-aos="fade-down"
        data-aos-delay="150"
      >
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 sm:gap-x-14">
          {LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="relative inline-block cursor-pointer whitespace-nowrap text-sm font-normal tracking-wide text-white/95 transition-colors hover:text-white after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className="absolute left-1/2 top-36 z-30 flex -translate-x-1/2 items-center gap-2 xl:left-auto xl:right-6 xl:top-8 xl:translate-x-0"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <button
          type="button"
          className="cursor-pointer whitespace-nowrap rounded-full bg-[#D4AF37] px-3.5 py-2 text-xs font-bold text-neutral-950 shadow-lg transition hover:bg-[#E5C45A] sm:text-sm"
        >
          Invest / Donate
        </button>
        <button
          type="button"
          className="cursor-pointer whitespace-nowrap rounded-full bg-[#D4AF37] px-3.5 py-2 text-xs font-bold text-neutral-950 shadow-lg transition hover:bg-[#E5C45A] sm:text-sm"
        >
          Buy M.D Crypto
        </button>
      </div>
    </>
  );
}