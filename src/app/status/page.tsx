import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estado y roadmap de OTP-X | Society . E X E",
  description:
    "Estado informativo y hoja de ruta referencial de OTP-X, propuesta de autenticación bancaria en fase de definición.",
  robots: {
    index: true,
    follow: true,
  },
};

const ROADMAP = [
  {
    number: "00",
    title: "Definición y delimitación del alcance",
    status: "Etapa actual",
    state: "current",
    description:
      "Precisar objetivos, alcance y criterios de evaluación del proyecto antes de avanzar a etapas de implementación.",
  },
  {
    number: "01",
    title: "Especificación y análisis de riesgos",
    status: "Pendiente",
    state: "planned",
    description:
      "Documentar requisitos y analizar, a nivel apropiado, los riesgos, supuestos y límites de la propuesta.",
  },
  {
    number: "02",
    title: "Prototipo y pruebas controladas",
    status: "Etapa futura",
    state: "planned",
    description:
      "Considerar una prueba de concepto en un entorno aislado, sujeta a la definición previa del alcance y a las autorizaciones que correspondan.",
  },
  {
    number: "03",
    title: "Revisión técnica independiente",
    status: "Etapa futura",
    state: "planned",
    description:
      "Someter la propuesta a revisión externa con objetivos, criterios y condiciones acordados antes de cualquier conclusión pública.",
  },
  {
    number: "04",
    title: "Seguridad, privacidad y cumplimiento",
    status: "Por determinar",
    state: "planned",
    description:
      "Definir los controles y evaluaciones aplicables de acuerdo con el alcance, las jurisdicciones y los requisitos pertinentes.",
  },
  {
    number: "05",
    title: "Evaluaciones formales y autorizaciones",
    status: "No iniciada",
    state: "planned",
    description:
      "Identificar y, si procede, completar las evaluaciones y autorizaciones correspondientes. No se afirma certificación ni aprobación vigente.",
  },
  {
    number: "06",
    title: "Eventual despliegue o comercialización",
    status: "No iniciada",
    state: "planned",
    description:
      "Cualquier decisión de despliegue o comercialización dependería de resultados satisfactorios, viabilidad y cumplimiento de los requisitos aplicables.",
  },
] as const;

function SocietyMark() {
  return (
    <a href="/" className="flex items-center gap-3" aria-label="Society . E X E, inicio">
      <span className="grid h-9 w-9 place-items-center rounded-lg border border-[#64e8e0]/40 bg-[#64e8e0]/10 text-[11px] font-extrabold tracking-[-0.08em] text-[#79ebe4]">
        . E X E
      </span>
      <span className="text-sm font-semibold tracking-wide text-white">
        Society . E X E
      </span>
    </a>
  );
}

export default function StatusPage() {
  return (
    <main className="min-h-screen bg-[#050708]">
      <header className="border-b border-white/10 bg-[#080d0f]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10 lg:px-12">
          <SocietyMark />
          <a
            href="/"
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-[#dce4e4] transition hover:border-[#64e8e0]/60 hover:text-[#79ebe4]"
          >
            Volver al sitio
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 pb-16 pt-16 sm:px-10 sm:pb-20 sm:pt-24 lg:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#40d9d1]/[0.08] blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#71e5df]">
            Registro público de avance
          </p>
          <h1 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
            OTP-X
            <span className="mt-3 block text-2xl font-medium tracking-[-0.03em] text-[#b7c2c3] sm:text-3xl">
              Estado y hoja de ruta
            </span>
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-[#a6b0b2]">
            Resumen informativo del estado general de la propuesta de
            autenticación OTP-X. El proyecto se encuentra en fase de definición;
            las etapas siguientes son referenciales y dependen de revisiones y
            decisiones posteriores.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-stretch">
            <div className="rounded-2xl border border-[#64e8e0]/20 bg-[#0c1516] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#73e5df]">
                Estado general
              </p>
              <p className="mt-3 text-xl font-semibold text-white">
                Investigación y definición
              </p>
              <p className="mt-2 text-sm leading-6 text-[#97a3a5]">
                Sin disponibilidad comercial, certificación ni aprobación
                regulatoria anunciadas.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0c1113] p-6 sm:min-w-48">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#829093]">
                Revisión del estado
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                15 octubre 2026
              </p>
              <p className="mt-2 text-sm text-[#97a3a5]">
                Información pública
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="roadmap-heading"
        className="border-y border-white/10 bg-[#0a0f11] px-6 py-16 sm:px-10 sm:py-20 lg:px-12"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#71e5df]">
              Progreso por etapas
            </p>
            <h2
              id="roadmap-heading"
              className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl"
            >
              Roadmap referencial
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#97a3a5]">
              La secuencia muestra líneas de trabajo generales, no un calendario
              ni una promesa de entrega. El avance puede cambiar según los
              resultados, recursos, requisitos y autorizaciones aplicables.
            </p>
          </div>

          <ol className="relative space-y-0 before:absolute before:bottom-8 before:left-[15px] before:top-4 before:w-px before:bg-gradient-to-b before:from-[#64e8e0]/70 before:to-white/5">
            {ROADMAP.map(({ number, title, status, state, description }) => (
              <li key={number} className="relative pb-7 pl-12 last:pb-0">
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full border text-[10px] font-bold ${
                    state === "current"
                      ? "border-[#64e8e0]/60 bg-[#0c2020] text-[#79ebe4] shadow-[0_0_18px_rgba(100,232,224,0.16)]"
                      : "border-white/15 bg-[#0b1012] text-[#829093]"
                  }`}
                >
                  {number}
                </span>
                <article className="rounded-2xl border border-white/10 bg-[#0c1113] p-5 sm:p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="text-base font-semibold text-[#f0f4f4] sm:text-lg">
                      {title}
                    </h3>
                    <span
                      className={`w-fit shrink-0 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${
                        state === "current"
                          ? "border-[#64e8e0]/25 bg-[#64e8e0]/[0.07] text-[#78e8e1]"
                          : "border-white/10 bg-white/[0.03] text-[#9ca8aa]"
                      }`}
                    >
                      {status}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#97a3a5]">
                    {description}
                  </p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="notice-heading"
        className="px-6 py-16 sm:px-10 sm:py-20 lg:px-12"
      >
        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#71e5df]">
              Alcance de esta publicación
            </p>
            <h2
              id="notice-heading"
              className="text-2xl font-semibold tracking-[-0.04em] text-white"
            >
              Nota informativa
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-7 text-[#97a3a5]">
            <p>
              Esta página comunica únicamente información general sobre el
              estado y la planificación de OTP-X. No describe especificaciones,
              arquitectura, mecanismos de seguridad, datos de terceros ni
              documentación de acceso restringido.
            </p>
            <p>
              El roadmap es orientativo, puede modificarse o suspenderse y no
              constituye oferta comercial, compromiso contractual, garantía de
              resultados, calendario de entrega ni declaración de conformidad,
              certificación o aprobación por autoridad alguna.
            </p>
            <p>
              OTP-X es una propuesta en investigación y definición, no un
              producto o servicio disponible. No debe interpretarse esta
              publicación como autorización para su uso, integración o
              implementación.
            </p>
            <a
              href="mailto:info@society-exe.site?subject=Consulta%20general%20sobre%20OTP-X"
              className="inline-flex items-center gap-2 font-semibold text-[#79eae4] transition hover:text-white"
            >
              Consultas generales <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#050708] px-6 py-7 sm:px-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SocietyMark />
          <p className="text-xs leading-6 text-[#7e8b8e]">
            © {new Date().getFullYear()} Society . E X E · Estado informativo de
            OTP-X
          </p>
          <a
            href="/"
            className="text-sm font-medium text-[#acb6b7] transition hover:text-[#79ebe4]"
          >
            Inicio
          </a>
        </div>
      </footer>
    </main>
  );
}
