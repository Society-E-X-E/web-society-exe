const PRINCIPLES = [
  {
    number: "01",
    title: "Alcance y requisitos",
    description:
      "Entender el contexto de uso, los riesgos, las necesidades de integración y los criterios de éxito.",
  },
  {
    number: "02",
    title: "Diseño y documentación",
    description:
      "Definir la propuesta técnica, sus límites, supuestos y controles antes de cualquier evaluación.",
  },
  {
    number: "03",
    title: "Revisión y evaluación",
    description:
      "Planificar revisión especializada y pruebas autorizadas con criterios acordados y resultados trazables.",
  },
  {
    number: "04",
    title: "Certificación aplicable",
    description:
      "Identificar organismos y marcos de certificación adecuados. La aprobación dependerá de la evaluación formal correspondiente.",
  },
];

export function Principles() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className="bg-[#050708] px-6 py-24 sm:px-10 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#71e5df]">
            Cómo trabajamos
          </p>
          <h2
            id="approach-heading"
            className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl"
          >
            Rigor técnico. Progreso verificable.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#9ca8aa]">
            Cada iniciativa debe avanzar con objetivos claros, documentación y
            revisión apropiada para su impacto en el entorno financiero.
          </p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map(({ number, title, description }) => (
            <article key={number} className="bg-[#0b1012] p-6 sm:p-7">
              <span className="font-mono text-sm text-[#70e9e2]">{number}</span>
              <h3 className="mt-8 text-base font-semibold text-[#f0f4f4]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#97a3a5]">
                {description}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs leading-6 text-[#718083]">
          El proceso de certificación aún está sujeto a definir el método, el
          alcance y los requisitos de los organismos correspondientes.
        </p>
      </div>
    </section>
  );
}

export default Principles;
