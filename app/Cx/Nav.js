"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Spreadsheet", href: "#spreadsheet" },
  { label: "360", href: "#360" },
  { label: "Specs", href: "#specs" },
];

const btnClass =
  "cursor-pointer whitespace-nowrap rounded-full bg-[#D4AF37] px-3 py-1.5 text-sm font-bold leading-none text-neutral-950 shadow-lg transition hover:bg-[#E5C45A] sm:px-3.5 sm:text-base";

export default function Nav() {
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    if (!contactOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setContactOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [contactOpen]);

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
        className="absolute left-1/2 top-36 z-30 flex -translate-x-1/2 flex-col items-center gap-2 xl:left-auto xl:right-6 xl:top-8 xl:translate-x-0 xl:items-end"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <div className="flex items-center gap-2">
          <button type="button" className={btnClass}>
            Invest / Donate
          </button>
          <button type="button" className={btnClass}>
            Buy M.D Crypto
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className={btnClass}
            onClick={() => setContactOpen(true)}
          >
            Contact
          </button>
          <button type="button" className={btnClass}>
            Financing Available
          </button>
        </div>
      </div>

      {contactOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          onClick={() => setContactOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-[#E2E0D1] px-6 py-8 text-center shadow-2xl sm:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setContactOpen(false)}
              className="absolute right-3 top-3 cursor-pointer rounded-full px-2 py-1 text-lg leading-none text-neutral-700 transition hover:bg-black/10"
              aria-label="Close contact modal"
            >
              ×
            </button>
            <h2
              id="contact-modal-title"
              className="text-base font-bold uppercase tracking-wide text-neutral-950 sm:text-lg"
            >
              M.D. Motivational Enterprises LLC – Location
            </h2>
            <p className="mt-3 text-sm font-semibold text-neutral-800 sm:text-base">
              56 St. NY. NY. 10019
            </p>
          </div>
        </div>
      )}
    </>
  );
}
