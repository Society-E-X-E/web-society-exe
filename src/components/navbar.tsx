"use client";

import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Security", href: "#services" },
  { label: "Guidance", href: "#approach" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
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
    label: "Instagram",
    href: "https://www.instagram.com/programameste",
    icon: "fa-instagram",
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

  const foreground = isScrolling ? "text-gray-800" : "text-white";

  return (
    <header
      className={`fixed top-0 z-50 w-full border-0 transition-colors ${
        isScrolling ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home" className={`text-lg font-semibold ${foreground}`}>
          Society . E X E
        </a>
        <nav aria-label="Main navigation">
          <ul
            className={`ml-10 hidden items-center gap-6 lg:flex ${foreground}`}
          >
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="text-sm font-medium hover:opacity-75">
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
              className={`${foreground} hover:opacity-75`}
            >
              <i className={`fa-brands ${icon} text-base`} />
            </a>
          ))}
          <a
            href="https://society-exe.site/status"
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded px-3 py-2 text-sm font-medium ${foreground}`}
          >
            Status
          </a>
        </div>
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className={`ml-auto inline-flex items-center justify-center p-2 lg:hidden ${foreground}`}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="container mx-auto rounded-lg border-t border-slate-200 bg-white px-6 py-5 text-slate-900 shadow-lg lg:hidden"
        >
          <ul className="flex flex-col gap-4">
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="font-medium"
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
                className="text-gray-700"
              >
                <i className={`fa-brands ${icon} text-base`} />
              </a>
            ))}
            <a
              href="https://society-exe.site/status"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto rounded bg-gray-900 px-3 py-2 text-sm font-medium text-white"
            >
              Status
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
