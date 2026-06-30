"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  DeviceTabletIcon,
  LockClosedIcon,
  UserGroupIcon,
  WindowIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: UserGroupIcon,
    title: "Expert Instructors",
    children:
      "Learn from the best. Our instructors are industry experts, academics, and seasoned professionals dedicated to helping you.",
  },
  {
    icon: DeviceTabletIcon,
    title: "Interactive Immutable Access Control",
    children:
      "Enforcing stringent authentication standards, including mandatory cryptographic key verification, to secure every login dashboard, transaction, and system deployment across your entire financial network.",
  },
  {
    icon: LockClosedIcon,
    title: "End-to-End Cryptographic Encryption",
    children:
      "Deploying advanced cryptographic protocols to secure financial data both at rest and in transit, ensuring critical information remains entirely unreadable to unauthorized entities.",
  },
  {
    icon: WindowIcon,
    title: "Threat Neutralization Infrastructure",
    children:
      "Custom-built security frameworks designed to integrate seamlessly with modern banking environments, actively monitoring and neutralizing vulnerabilities before they can be exploited.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Your Learning App
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Diverse Learning Resources
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "        >
          Access your learning materials on the go. Whether you&apos;re
          commuting, waiting for a friend, or just have a few minutes to spare,
          our app fits seamlessly into your busy life.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
