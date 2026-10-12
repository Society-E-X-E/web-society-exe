const EXPERIENCE = [
  {
    company: "Society . E X E",
    role: "Fundador y CTO",
    period: "Julio 2023 — actualidad",
    description:
      "Diseño de soluciones de seguridad bancaria, arquitecturas criptográficas e infraestructura de ciberseguridad para aplicaciones financieras.",
  },
  {
    company: "Glocal Solution S.A.",
    role: "Desarrollo Android sénior · Ingenico APOS A8",
    period: "Noviembre 2020 — noviembre 2021",
    description:
      "Desarrollo para terminal de pago con Android, Java, bibliotecas EMV, ISO 8583, DUKPT y EFTSEC.",
  },
  {
    company: "Almacenadora Caracas C.A. · GTI",
    role: "Jefe de Soporte Técnico",
    period: "Enero 2021 — julio 2023",
    description:
      "Gestión de redes, servidores, telecomunicaciones y operaciones de seguridad de la información.",
  },
  {
    company: "3DLink C.A.",
    role: "Analista desarrollador · Dspread 4GDOCK",
    period: "Junio 2020 — septiembre 2020",
    description:
      "Desarrollo de firmware con C y ensamblador, servicios Node.js e integración de mensajería ISO 8583.",
  },
];

export function MobileConvenience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-y border-white/10 bg-[#0a0f11] px-6 py-24 sm:px-10 lg:px-12 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#71e5df]">
            Experiencia relevante
          </p>
          <h2
            id="experience-heading"
            className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl"
          >
            Tecnología de pagos, trabajada desde dentro.
          </h2>
          <p className="mt-6 text-base leading-8 text-[#9ca8aa]">
            Experiencia profesional en desarrollo de terminales, sistemas de
            pago e infraestructura técnica para el sector financiero.
          </p>
          <div className="mt-9 rounded-2xl border border-white/10 bg-[#0e1517] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#728083]">
              Formación
            </p>
            <p className="mt-3 text-sm font-semibold text-[#e8eeee]">
              Ingeniería de Sistemas
            </p>
            <p className="mt-1 text-sm text-[#97a3a5]">
              Universidad Central de Venezuela
            </p>
            <p className="mt-4 border-t border-white/10 pt-4 text-sm font-semibold text-[#e8eeee]">
              Maestría en Ciberseguridad y Sistemas POS Cifrados
            </p>
            <p className="mt-1 text-sm text-[#97a3a5]">
              Universidad Central de Venezuela · 2022–2024
            </p>
          </div>
        </div>

        <ol className="relative space-y-0 before:absolute before:bottom-7 before:left-[7px] before:top-2 before:w-px before:bg-gradient-to-b before:from-[#64e8e0]/60 before:to-white/5">
          {EXPERIENCE.map(({ company, role, period, description }) => (
            <li key={company} className="relative pb-9 pl-9 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-4 border-[#0a0f11] bg-[#64e8e0] shadow-[0_0_14px_rgba(100,232,224,0.55)]"
              />
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#73e5df]">
                {period}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">
                {company}
              </h3>
              <p className="mt-1 text-sm font-medium text-[#c5cecf]">{role}</p>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#8f9b9d]">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default MobileConvenience;
