"use client";

import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NAV_ITEMS = [
  { label: "Inicio", href: "#home" },
  { label: "OTP-X", href: "#otp" },
  { label: "Experiencia", href: "#experience" },
  { label: "Enfoque", href: "#approach" },
  { label: "Contacto", href: "#contact" },
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://www.github.com/ahidroidev",
    icon: "fa-github",
  },
  {
    label: "Telegram",
    href: "https://t.me/devcrackpy",
    icon: "fa-telegram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/societyexe",
    icon: "fa-facebook",
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 960) {
        setOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function handleScroll() {
      setIsScrolling(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-colors ${
        isScrolling
          ? "border-white/10 bg-[#090D13]/95 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
        <a href="#home" className="flex shrink-0 items-center" aria-label="Society . E X E, inicio">
          <img
            src="/wordmark/logo-wordmark-for-dark-backgrounds.svg"
            alt="Society . E X E"
            width="204"
            height="35"
            className="h-[30px] w-auto sm:h-[35px]"
          />
        </a>
        <nav aria-label="Navegación principal">
          <ul
            className="ml-10 hidden items-center gap-7 text-[#F6F8FA] lg:flex"
          >
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-[13px] font-medium transition-colors hover:text-[#22D3EE]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          {SOCIAL_LINKS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#F6F8FA]/70 transition-colors hover:text-[#22D3EE]"
            >
              <i className={`fa-brands ${icon} text-base`} />
            </a>
          ))}
          <a
            href="/status"
            className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-[#F6F8FA] transition hover:border-[#22D3EE]/60 hover:text-[#22D3EE]"
          >
            Estado
          </a>
        </div>
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="ml-auto inline-flex items-center justify-center rounded-full p-2 text-[#F6F8FA] transition hover:bg-white/10 hover:text-[#22D3EE] lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Navegación móvil"
        hidden={!open}
        className="container mx-auto rounded-b-2xl border-t border-white/10 bg-[#090D13]/95 px-6 py-5 text-[#F6F8FA] shadow-lg backdrop-blur-xl lg:hidden"
      >
        <ul className="flex flex-col gap-4">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="font-medium transition-colors hover:text-[#22D3EE]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center gap-4">
          {SOCIAL_LINKS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#F6F8FA]/70 transition-colors hover:text-[#22D3EE]"
            >
              <i className={`fa-brands ${icon} text-base`} />
            </a>
          ))}
          <a
            href="/status"
            className="ml-auto rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 px-4 py-2 text-sm font-medium text-[#22D3EE]"
          >
            Estado
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
