const DESIGN_PILLARS = [
  {
    number: "01",
    title: "Diseño de OTP-X",
    description:
      "Explorar una propuesta de autenticación bancaria centrada en evaluar el contexto del acceso.",
  },
  {
    number: "02",
    title: "Evaluación independiente",
    description:
      "Someter la propuesta a revisión técnica y pruebas acordadas antes de considerar cualquier despliegue.",
  },
  {
    number: "03",
    title: "Camino a certificación",
    description:
      "Determinar los estándares, laboratorios y organismos aplicables según el alcance y las jurisdicciones objetivo.",
  },
];

export function VideoIntro() {
  return (
    <section
      id="otp"
      aria-labelledby="otp-heading"
      className="relative overflow-hidden bg-[#0a0f11] px-6 py-24 sm:px-10 lg:px-12 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#40d9d1]/[0.07] blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#71e5df]">
              Servicio en desarrollo
            </p>
            <h2
              id="otp-heading"
              className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl"
            >
              OTP-X: investigación en autenticación bancaria.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#a6b0b2]">
              OTP-X es una propuesta en etapa de definición que explora cómo
              complementar la autenticación de un solo uso con una evaluación
              más amplia del contexto de acceso. El diseño detallado y la
              documentación del proyecto no son información pública.
            </p>
            <a
              href="mailto:info@society-exe.site?subject=Consulta%20sobre%20autenticaci%C3%B3n%20OTP"
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#79eae4] transition hover:text-white"
            >
              Consultar sobre el proyecto <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0e1517] p-6 sm:p-9">
            <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-sm font-semibold text-white">
                  De la investigación a la confianza
                </p>
                <p className="mt-1 text-xs text-[#829093]">
                  Un recorrido transparente y por etapas
                </p>
              </div>
              <span className="grid h-10 w-10 place-items-center rounded-full border border-[#64e8e0]/25 text-[#64e8e0]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                >
                  <path
                    d="M12 3 19 6v5c0 4.5-2.9 8.2-7 10-4.1-1.8-7-5.5-7-10V6l7-3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 8v4l2.5 1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div className="space-y-7">
              {DESIGN_PILLARS.map(({ number, title, description }) => (
                <article key={number} className="grid grid-cols-[3rem_1fr] gap-4">
                  <span className="pt-0.5 font-mono text-sm text-[#64e8e0]">
                    {number}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[#f0f4f4]">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#97a3a5]">
                      {description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-8 border-t border-white/10 pt-5 text-xs leading-6 text-[#758184]">
              OTP-X no está disponible comercialmente ni cuenta con
              certificación o aprobación regulatoria anunciada. Cualquier
              evaluación formal corresponde a una etapa futura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoIntro;
