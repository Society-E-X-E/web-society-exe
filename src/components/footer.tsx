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
    label: "Whatsapp Business",
    href: "https://wa.me/573223213752",
    icon: "fa-whatsapp",
  },
];

export function Footer() {
  return (
    <>
      <section className="bg-[#10191b] px-6 py-16 sm:px-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-3xl border border-[#64e8e0]/15 bg-[radial-gradient(ellipse_at_90%_0%,rgba(100,232,224,0.1),transparent_40%),#0b1012] p-8 sm:p-12 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#71e5df]">
              Iniciemos una conversación
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Ingeniería financiera con la seguridad en el centro.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#9ca8aa]">
              Hablemos sobre sistemas de pago, arquitectura de seguridad o la
              evolución de la autenticación bancaria.
            </p>
          </div>
          <a
            href="https://wa.me/573223213752"
            className="inline-flex min-h-13 shrink-0 items-center justify-center gap-3 rounded-full bg-[#64e8e0] px-7 py-3 text-sm font-bold text-[#061012] transition hover:bg-[#9af7f1]"
          >
            Contactar a Society . E X E
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
      <footer
        id="contact"
        className="border-t border-white/10 bg-[#050708] px-6 py-8 sm:px-10 lg:px-12"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-[#64e8e0]/35 bg-[#64e8e0]/10 text-[11px] font-extrabold tracking-[-0.08em] text-[#79ebe4]">
                .EXE
              </span>
              <span className="text-sm font-semibold text-white">
                Society . E X E
              </span>
            </a>
            <p className="mt-4 text-xs text-[#7e8b8e]">
              © {new Date().getFullYear()} Society . E X E · Ingeniería y
              seguridad financiera.
            </p>
          </div>
          <address className="flex flex-col gap-2 text-sm not-italic text-[#acb6b7] sm:items-end">
            <a
              href="mailto:Info@society-exe.site"
              className="transition hover:text-[#79ebe4]"
            >
              Info@society-exe.site
            </a>
            <a
              href="https://wa.me/573223213752"
              className="transition hover:text-[#79ebe4]"
            >
              Whatsapp Business
            </a>
          </address>
          <nav aria-label="Redes sociales">
            <ul className="flex items-center gap-5">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-[#9ca8aa] transition hover:text-[#79ebe4]"
                  >
                    <i className={`fa-brands ${icon} text-lg`} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default Footer;
