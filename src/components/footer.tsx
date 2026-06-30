"use client";
import Image from "next/image";
import { Typography, IconButton, Button } from "@material-tailwind/react";

const LINKS = ["About Us", "Prices", "Apps", "Support"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-gray-900 px-8 pt-12">
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
              FinTech & Cyber Security Company. We are a team of passionate developers and designers who are dedicated to creating innovative solutions for the digital world.
            </Typography>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {LINKS.map((link, idx) => (
                <li key={link}>
                  <Typography
                    as="a"
                    href="#"
                    color="white"
                    className={`py-1 font-medium transition-colors ${idx === 0 ? "pr-3" : "px-3"}`}                  >
                    {link}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <Typography
            color="white"
            className="text-center font-normal opacity-75"          >
            &copy; {CURRENT_YEAR} Society{" "}
            <a href="https://society-exe.site" target="_blank" rel="noopener">
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
