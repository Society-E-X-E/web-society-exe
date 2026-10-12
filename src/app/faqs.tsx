"use client";

import { Typography, Card } from "@material-tailwind/react";

const FAQS = [
  {
    title: "What is this site for?",
    desc: "It shares general information about defensive cybersecurity, security awareness, and responsible preparation.",
  },
  {
    title: "Is written permission required for testing?",
    desc: "Yes. Testing must have explicit authorization from the system owner and stay within a clearly agreed scope.",
  },
  {
    title: "What kind of security work is appropriate?",
    desc: "Defensive practices and assessments with explicit permission and a clearly agreed scope are appropriate. Never target accounts or systems without authorization.",
  },
  {
    title: "Should I share passwords or verification codes?",
    desc: "No. Never share passwords, one-time codes, recovery codes, or private keys. Contact your service provider through its official channels if you need account help.",
  },
  {
    title: "What should an authorized assessment include?",
    desc: "Agree on ownership, written permission, scope, timing, testing limits, emergency contacts, and a secure way to report findings before work starts.",
  },
  {
    title: "Where can I get help with a security incident?",
    desc: "Contact your organization’s security team or the affected service provider using a verified, official channel. If you are in immediate danger, contact local emergency services.",
  },
];

export function Faqs() {
  return (
    <section id="faq" className="px-8 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Frequently asked questions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 !text-gray-500 lg:w-3/5"
          >
            Clear boundaries and safe practices help protect accounts,
            organizations, and the people who depend on them.
          </Typography>
        </div>

        <div className="grid gap-20 md:grid-cols-1 lg:grid-cols-3">
          {FAQS.map(({ title, desc }) => (
            <Card key={title} shadow={false} color="transparent">
              <Typography color="blue-gray" className="pb-6" variant="h4">
                {title}
              </Typography>
              <div className="pt-2">
                <Typography className="font-normal !text-gray-500">
                  {desc}
                </Typography>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
