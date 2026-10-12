"use client";

import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const PRINCIPLES = [
  {
    title: "Authorization first",
    description:
      "Security testing belongs only on systems you own or are explicitly authorized to assess.",
  },
  {
    title: "Privacy by design",
    description:
      "Limit access to sensitive information and collect only what is necessary to protect people and systems.",
  },
  {
    title: "Clear, actionable guidance",
    description:
      "Communicate risks responsibly and focus recommendations on practical, verifiable improvements.",
  },
];

export function Principles() {
  return (
    <section id="principles" className="px-10 !py-20">
      <div className="container mx-auto">
        <div className="mb-20 flex w-full flex-col items-center">
          <Typography variant="h2" color="blue-gray" className="mb-2">
            Our principles
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-3xl text-center !text-gray-600"
          >
            Responsible security work protects people, respects boundaries, and
            helps system owners make informed improvements.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20">
          {PRINCIPLES.map(({ title, description }) => (
            <Card key={title} shadow={false} className="border border-gray-200">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-3">
                  {title}
                </Typography>
                <Typography className="font-normal !text-gray-600">
                  {description}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Principles;
