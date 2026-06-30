"use client";

import React from "react";

const accordionItems = [
  {
    id: "customAccordion1",
    title: "Material Tailwind React",
    description:
      "Material Tailwind is an open-source crafted in Tailwind CSS. Get Material Tailwind and take advantage of its free components and features that will help you set up your web project quickly.",
    rotate: true,
  },
  {
    id: "customAccordion2",
    title: "Material Tailwind HTML",
    description:
      "Material Tailwind is an open-source crafted in Tailwind CSS. Get Material Tailwind and take advantage of its free components and features that will help you set up your web project quickly.",
  },
  {
    id: "customAccordion3",
    title: "Material Tailwind Vue",
    description:
      "Material Tailwind is an open-source crafted in Tailwind CSS. Get Material Tailwind and take advantage of its free components and features that will help you set up your web project quickly.",
  },
];

export function VideoIntro() {
  return (
    <div className="p-8">
      <div className="container relative mx-auto mt-20 w-full max-w-6xl overflow-hidden rounded-xl px-5">
        <div
          className="group block w-full"
          aria-disabled="false"
          data-accordion-container
          data-accordion-mode="exclusive"
        >
          {accordionItems.map(({ id, title, description, rotate }) => (
            <div
              key={id}
              className="mb-2 rounded-lg border border-slate-200 px-2 dark:border-slate-700"
            >
              <div
                className="flex w-full cursor-pointer items-center justify-between py-5 text-left font-medium text-slate-800 dark:text-white"
                data-accordion-toggle
                data-accordion-target={`#${id}`}
                aria-expanded="false"
              >
                {title}
                <svg
                  data-accordion-icon
                  width="1.5em"
                  height="1.5em"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                  className={`h-4 w-4${rotate ? " rotate-180" : ""}`}
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                id={id}
                className="overflow-hidden transition-all duration-300 dark:border-slate-700"
              >
                <p className="mb-5 text-sm text-slate-600 dark:text-slate-400">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoIntro;