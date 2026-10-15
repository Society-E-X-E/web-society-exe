const FAQS = [
  {
    title: "¿Qué es OTP-X?",
    desc: "Es una propuesta de autenticación bancaria en etapa de definición que explora una evaluación más amplia del contexto de acceso. No se publican detalles de diseño ni de implementación.",
  },
  {
    title: "¿OTP-X ya está disponible?",
    desc: "No. El proyecto continúa en investigación y definición, y no se ofrece como producto o servicio.",
  },
  {
    title: "¿OTP-X cuenta con certificación o aprobación?",
    desc: "Actualmente no cuenta con certificación ni aprobación regulatoria. Cualquier evaluación formal dependerá de etapas futuras y de los organismos competentes.",
  },
  {
    title: "¿Dónde puedo consultar la documentación del proyecto?",
    desc: "La información técnica y legal se comparte únicamente con personas autorizadas. El sitio publica solo información general y no divulga detalles sujetos a confidencialidad.",
  },
  {
    title: "¿Qué experiencia respalda este proyecto?",
    desc: "Experiencia profesional en desarrollo para terminales de pago e integración de sistemas financieros. Esta trayectoria no representa una evaluación ni certificación de OTP-X.",
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
