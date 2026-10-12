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
    title: "Security awareness",
    children:
      "Build practical habits for recognizing suspicious messages, protecting accounts, and reporting concerns safely.",
  },
  {
    icon: DeviceTabletIcon,
    title: "Authorized assessments",
    children:
      "Assess applications and systems only with explicit permission and an agreed scope. Document findings clearly so owners can prioritize remediation.",
  },
  {
    icon: LockClosedIcon,
    title: "Secure architecture",
    children:
      "Apply established security principles such as data minimization, strong authentication, least privilege, and encryption where appropriate.",
  },
  {
    icon: WindowIcon,
    title: "Incident readiness",
    children:
      "Prepare teams to detect, report, and respond to security incidents with clear roles, tested recovery plans, and responsible communication.",
  },
];

export function Features() {
  return (
    <section id="services" className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Defensive cybersecurity
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Practical security foundations
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8"
        >
          Focus on authorized, protective practices that help people and
          organizations reduce risk and respond responsibly.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props) => (
          <FeatureCard key={props.title} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
