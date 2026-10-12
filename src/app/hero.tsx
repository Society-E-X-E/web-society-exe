"use client";

import Image from "next/image";

function Hero() {
  return (
    <div id="home" className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Building safer digital systems.
            </h1>
            <p className="mb-7 text-lg text-white md:pr-16 xl:pr-28">
              Practical, defense-focused security education and guidance for
              protecting accounts, applications, and the people who use them.
            </p>
            <p className="mb-4 text-lg font-semibold text-white">
              Learn about secure design, authorized testing, and responsible
              incident preparation.
            </p>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <a
                href="https://www.instagram.com/programameste"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white opacity-75 hover:opacity-100"
              >
                <i className="fa-brands fa-instagram text-2xl not-italic" />
              </a>
              <a
                href="https://t.me/society_exe"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="text-white opacity-75 hover:opacity-100"
              >
                <i className="fa-brands fa-telegram text-2xl not-italic" />
              </a>
            </div>
          </div>
          <Image
            width={470}
            height={576}
            src="/image/iphones.png"
            alt="Illustration of mobile devices"
            priority
            className="col-span-1 my-20 h-full max-h-[30rem] w-auto -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <h2 className="mb-3 text-2xl font-bold text-slate-800">
            Security starts with responsible practice
          </h2>
          <p className="font-normal text-gray-500 lg:w-5/12">
            Strong security is built through clear authorization, thoughtful
            safeguards, and ongoing learning. Explore practical ways to reduce
            risk without compromising other people&apos;s accounts or systems.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Hero;
