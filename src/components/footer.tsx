"use client";
import { Typography, IconButton } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer id="contact" className="mt-10 bg-gray-900 px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <Typography
              as="a"
              href="https://society-exe.dev"
              target="_blank"
              variant="h5"
              color="white"
              className="mb-4"            >
              Society . E X E
            </Typography>
            <Typography color="white" className="mb-12 font-normal">
              Defensive cybersecurity guidance, security education, and
              responsible practices for safer digital systems.
            </Typography>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap items-center justify-center md:justify-start">
                {[
                  { label: "Security", href: "#services" },
                  { label: "Our principles", href: "#principles" },
                  { label: "FAQ", href: "#faq" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Typography
                      as="a"
                      href={href}
                      color="white"
                      className="px-3 py-1 font-medium transition-colors"
                    >
                      {label}
                    </Typography>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <Typography
            color="white"
            className="text-center font-normal opacity-75"
          >
            &copy; {CURRENT_YEAR} Society{" "}
            <a             href="https://society-exe.dev" target="_blank" rel="noopener">
              . E X E
            </a>{" "}
            by{" "}
            <a href="https://t.me/devcrackpy" target="_blank" rel="noopener">
              Devcrackpy
            </a>
            .
          </Typography>

          <div className="flex gap-2">
            <div className="mt-8 w-full md:mt-0 md:w-auto">
            <Typography variant="h6" color="white" className="mb-3">
              Contact us
            </Typography>
          </div>
            <a href="https://www.facebook.com/societyexe" target="_blank" rel="noopener noreferrer">
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-facebook text-2xl not-italic opacity-75"></i>
            </IconButton>
</a>
<a href="https://www.instagram.com/programameste" target="_blank" rel="noopener noreferrer">
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-instagram text-2xl not-italic opacity-75"></i>
            </IconButton>
            </a>
            <a href="https://github.com/ahidroidev" target="_blank" rel="noopener noreferrer">
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-github text-2xl not-italic opacity-75"></i>
            </IconButton>
            </a>
            <a href="https://wa.me/573223213752" target="_blank" rel="noopener noreferrer">
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-whatsapp text-2xl not-italic opacity-75"></i>
            </IconButton>
            </a>
            <a href="https://t.me/society_exe" target="_blank" rel="noopener noreferrer">
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-telegram text-2xl not-italic opacity-75"></i>
            </IconButton>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
