const FAQS = [
  {
    title: "¿El nuevo método OTP ya está disponible?",
    desc: "No. El método está en etapa de definición. Sus características se comunicarán cuando el alcance y la evaluación estén acordados.",
  },
  {
    title: "¿El método cuenta con certificación bancaria?",
    desc: "No anunciamos una certificación obtenida. La certificación será una etapa futura sujeta a los requisitos de los organismos competentes.",
  },
  {
    title: "¿Qué experiencia respalda este proyecto?",
    desc: "Experiencia en software para terminales Ingenico y Dspread, integración EMV e ISO 8583, y trabajo con DUKPT y EFTSEC.",
  },
  {
    title: "¿Cómo podemos conversar sobre una colaboración?",
    desc: "Escríbenos al correo corporativo o contáctanos por teléfono. Podemos coordinar una conversación inicial sobre objetivos y alcance.",
  },
];

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-white/10 bg-[#0a0f11] px-6 py-20 sm:px-10 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#71e5df]">
            Claridad y transparencia
          </p>
          <h2
            id="faq-heading"
            className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl"
          >
            Preguntas frecuentes
          </h2>
        </div>
        <div className="mt-10 grid gap-x-12 gap-y-9 md:grid-cols-2">
          {FAQS.map(({ title, desc }) => (
            <article
              key={title}
              className="border-t border-white/10 pt-5"
            >
              <h3 className="text-base font-semibold text-[#eaf0f0]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#97a3a5]">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
