const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/ahidroidev",
    icon: "fa-github",
  },
  {
    label: "Telegram",
    href: "https://t.me/society_exe",
    icon: "fa-telegram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/societyexe",
    icon: "fa-facebook",
  },
];

export function Footer() {
  return (
    <>
      <section className="bg-[#11141A] px-6 py-16 sm:px-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-3xl border border-[#22D3EE]/15 bg-[radial-gradient(ellipse_at_90%_0%,rgba(34,211,238,0.1),transparent_40%),#090D13] p-8 sm:p-12 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#22D3EE]">
              Iniciemos una conversación
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Ingeniería financiera con la seguridad en el centro.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#9ca8aa]">
              Hablemos sobre sistemas de pago, arquitectura de seguridad o la
              investigación de autenticación bancaria OTP-X.
            </p>
          </div>
          <a
            href="https://wa.me/573223213752"
            className="inline-flex min-h-13 shrink-0 items-center justify-center gap-3 rounded-full bg-[#22D3EE] px-7 py-3 text-sm font-bold text-[#090D13] transition hover:bg-[#F6F8FA]"
          >
            Contactar a Society . E X E
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
      <footer
        id="contact"
        className="border-t border-white/10 bg-[#090D13] px-6 py-8 sm:px-10 lg:px-12"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <img
                src="/wordmark/logo-wordmark-for-dark-backgrounds.svg"
                alt="Society . E X E"
                width="204"
                height="35"
                className="h-[35px] w-auto"
              />
            </a>
            <p className="mt-4 text-xs text-[#7e8b8e]">
              © {new Date().getFullYear()} Society . E X E · Ingeniería y
              seguridad financiera.
            </p>
          </div>
          <address className="flex flex-col gap-2 text-sm not-italic text-[#acb6b7] sm:items-end">
            <a
              href="mailto:Info@society-exe.site"
              className="inline-flex items-center gap-2 transition hover:text-[#22D3EE]"
            >
              <i className="fa-solid fa-envelope text-lg" aria-hidden="true" />
              Info@society-exe.site
            </a>
            <a
              href="https://wa.me/573223213752"
              className="inline-flex items-center gap-2 transition hover:text-[#22D3EE]"
            >
              <i className="fa-brands fa-whatsapp text-lg" aria-hidden="true" />
              WhatsApp Business
            </a>

          </address>
          <div className="flex flex-col gap-4 sm:items-end">
            <nav aria-label="Redes sociales">
              <ul className="flex items-center gap-5">
                {SOCIAL_LINKS.map(({ label, href, icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-[#9ca8aa] transition hover:text-[#22D3EE]"
                    >
                      <i className={`fa-brands ${icon} text-lg`} />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav
              aria-label="Información legal"
              className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#9ca8aa]"
            >
              <a href="/terms" className="transition hover:text-[#22D3EE]">
                Términos
              </a>
              <a href="/privacy" className="transition hover:text-[#22D3EE]">
                Privacidad
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
