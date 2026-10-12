"use client";

import Image from "next/image";
import { IconButton, Typography } from "@material-tailwind/react";


function Hero() {
  return (
    <div id="home" className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4">
              Building safer digital systems.
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              Practical, defense-focused security education and guidance for
              protecting accounts, applications, and the people who use them.
            </Typography>
            <Typography className="mb-4" color="white" variant="h6">
              Learn about secure design, authorized testing, and responsible
              incident preparation.
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <a href="https://www.instagram.com/programameste" target="_blank" rel="noopener">
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-instagram text-2xl not-italic opacity-75"></i>
                </IconButton>
              </a>
              <a href="https://t.me/society_exe" target="_blank" rel="noopener">
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-telegram text-2xl not-italic opacity-75"></i>
                </IconButton>
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
          <Typography variant="h3" color="blue-gray" className="mb-3">
            Security starts with responsible practice
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12"
          >
            Strong security is built through clear authorization, thoughtful
            safeguards, and ongoing learning. Explore practical ways to reduce
            risk without compromising other people&apos;s accounts or systems.
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
