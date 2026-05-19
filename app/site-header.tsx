"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const WHATSAPP_LINK = "https://wa.me/62895363076706";

function BrandMark() {
  return (
    <Image
      src="/archana-logo.png"
      alt=""
      width={48}
      height={60}
      className="h-10 w-auto object-contain sm:h-12"
      priority
    />
  );
}

export default function SiteHeader() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const goingUp = currentY < lastY;

      setScrolled(currentY > 16);
      setVisible(currentY < 80 || goingUp);
      if (currentY > lastY && currentY > 80) {
        setOpen(false);
      }
      lastY = currentY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    ["Home", "#"],
    ["About", "#about"],
    ["Detail", "#detail"],
    ["Pricing", "#pricing"],
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 px-5 py-4 transition-all duration-500 ease-out sm:px-8 lg:px-14 ${
        visible || open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${
        scrolled || open
          ? "bg-[#fff8ed]/86 shadow-[0_16px_45px_rgba(95,55,14,.1)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex max-w-[1500px] items-center justify-between gap-4">
        <a
          href="#"
          className="flex items-center gap-3 sm:gap-4"
          aria-label="Archana App home"
          onClick={() => setOpen(false)}
        >
          <BrandMark />
          <span className="text-xl font-extrabold tracking-normal sm:text-3xl">Archana App</span>
        </a>

        <nav className="hidden items-center gap-3 rounded-full bg-white/48 p-1 text-base font-bold shadow-[0_14px_35px_rgba(110,67,20,.08)] backdrop-blur lg:flex">
          {navItems.map(([label, href], index) => (
            <a
              key={label}
              className={`rounded-full px-5 py-3 transition ${
                index === 0
                  ? "bg-white text-[#ff6f00] shadow-[0_8px_22px_rgba(255,121,0,.12)]"
                  : "text-[#1d120b] hover:bg-white/78 hover:text-[#ff6f00]"
              }`}
              href={href}
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_LINK}
          className="hidden h-14 items-center justify-center gap-3 rounded-full bg-[#ff7900] px-7 text-base font-bold text-white shadow-[0_16px_35px_rgba(255,121,0,.25)] transition hover:-translate-y-0.5 hover:bg-[#f26d00] md:flex lg:px-8 lg:text-lg"
        >
          Coba Gratis Sekarang
          <span className="text-2xl leading-none lg:text-3xl">-&gt;</span>
        </a>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/72 text-[#1d120b] shadow-[0_12px_30px_rgba(95,55,14,.12)] transition hover:bg-white lg:hidden"
          aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <div
          className={`absolute left-0 right-0 top-[calc(100%+1rem)] origin-top rounded-[8px] bg-white/92 p-3 shadow-[0_22px_60px_rgba(95,55,14,.16)] backdrop-blur-xl transition duration-300 lg:hidden ${
            open
              ? "translate-y-0 scale-100 opacity-100"
              : "pointer-events-none -translate-y-2 scale-95 opacity-0"
          }`}
        >
          <nav className="grid gap-1 text-base font-bold">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-[8px] px-4 py-3 text-[#1d120b] transition hover:bg-[#fff1d6] hover:text-[#ff6f00]"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_LINK}
            className="mt-3 flex h-12 items-center justify-center gap-3 rounded-full bg-[#ff7900] px-6 text-base font-bold text-white shadow-[0_16px_35px_rgba(255,121,0,.22)]"
            onClick={() => setOpen(false)}
          >
            Coba Gratis Sekarang
            <span className="text-2xl leading-none">-&gt;</span>
          </a>
        </div>
      </div>
    </header>
  );
}
