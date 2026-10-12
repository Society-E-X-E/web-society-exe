"use client";

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
        <p className="mb-2 font-bold uppercase text-slate-700">
          Defensive cybersecurity
        </p>
        <h2 className="mb-4 text-4xl font-bold text-slate-800">
          Practical security foundations
        </h2>
        <p className="mx-auto w-full px-4 text-lg text-gray-500 lg:w-11/12 lg:px-8">
          Focus on authorized, protective practices that help people and
          organizations reduce risk and respond responsibly.
        </p>
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
