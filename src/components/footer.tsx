const CURRENT_YEAR = new Date().getFullYear();

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/societyexe",
    icon: "fa-facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/programameste",
    icon: "fa-instagram",
  },
  {
    label: "GitHub",
    href: "https://github.com/ahidroidev",
    icon: "fa-github",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/573223213752",
    icon: "fa-whatsapp",
  },
  {
    label: "Telegram",
    href: "https://t.me/society_exe",
    icon: "fa-telegram",
  },
];

export function Footer() {
  return (
    <footer id="contact" className="mt-10 bg-gray-900 px-8 pt-12 text-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <a
              href="https://society-exe.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 inline-block text-xl font-semibold"
            >
              Society . E X E
            </a>
            <p className="mb-12 font-normal">
              Defensive cybersecurity guidance, security education, and
              responsible practices for safer digital systems.
            </p>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap items-center justify-center md:justify-start">
                {[
                  { label: "Security", href: "#services" },
                  { label: "Our principles", href: "#principles" },
                  { label: "FAQ", href: "#faq" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="px-3 py-1 font-medium transition-colors hover:text-gray-300"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-gray-700 py-7 md:justify-between">
          <p className="text-center font-normal opacity-75">
            &copy; {CURRENT_YEAR} Society{" "}
            <a
              href="https://society-exe.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              . E X E
            </a>{" "}
            by{" "}
            <a
              href="https://t.me/devcrackpy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Devcrackpy
            </a>
            .
          </p>

          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold">Contact us</h2>
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white opacity-75 hover:opacity-100"
              >
                <i className={`fa-brands ${icon} text-2xl not-italic`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
