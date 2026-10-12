"use client";

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
          <h2 className="mb-2 text-3xl font-bold text-slate-800">
            Our principles
          </h2>
          <p className="mb-10 max-w-3xl text-center text-lg text-gray-600">
            Responsible security work protects people, respects boundaries, and
            helps system owners make informed improvements.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20">
          {PRINCIPLES.map(({ title, description }) => (
            <article
              key={title}
              className="rounded-xl border border-gray-200 p-6"
            >
              <h3 className="mb-3 text-xl font-semibold text-slate-800">
                  {title}
              </h3>
              <p className="font-normal text-gray-600">
                  {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Principles;
