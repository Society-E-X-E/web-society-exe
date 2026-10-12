"use client";

import React, { useState } from "react";

const accordionItems = [
  {
    id: "customAccordion1",
    title: "Authorized security assessments",
    description:
      "Test only systems you own or have explicit written permission to assess. Agree on scope, methods, timing, and reporting before any testing begins.",
  },
  {
    id: "customAccordion2",
    title: "Secure-by-design practices",
    description:
      "Use unique passwords, multifactor authentication, least-privilege access, timely updates, and secure recovery procedures to reduce common risks.",
  },
  {
    id: "customAccordion3",
    title: "Incident readiness",
    description:
      "Prepare a documented response plan, protect backups, identify trusted contacts, and know how to report incidents through your organization or service provider.",
  },
];

export function VideoIntro() {
  const [activeId, setActiveId] = useState(accordionItems[0].id);

  const toggleItem = (id: string) => {
    setActiveId((current) => (current === id ? "" : id));
  };

  return (
    <div className="p-8">
      <section
        id="approach"
        aria-label="Defensive security guidance"
        className="container relative mx-auto mt-20 w-full max-w-6xl overflow-hidden rounded-xl px-5"
      >
        <div className="block w-full">
          {accordionItems.map(({ id, title, description }) => {
            const isOpen = activeId === id;

            return (
              <div
                key={id}
                className="mb-2 rounded-lg border border-slate-200 px-2 dark:border-slate-700"
              >
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between py-5 text-left font-medium text-slate-800 dark:text-white"
                  aria-expanded={isOpen}
                  aria-controls={id}
                  onClick={() => toggleItem(id)}
                >
                  {title}
                  <svg
                    width="1.5em"
                    height="1.5em"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="currentColor"
                    className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  id={id}
                  hidden={!isOpen}
                  className="overflow-hidden transition-all duration-300"
                >
                  <p className="mb-5 text-sm text-slate-600 dark:text-slate-400">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default VideoIntro;