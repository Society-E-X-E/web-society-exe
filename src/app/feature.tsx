import {
  ArrowsRightLeftIcon,
  CpuChipIcon,
  LockClosedIcon,
  ServerStackIcon,
} from "@heroicons/react/24/outline";

import FeatureCard from "../components/feature-card";

const CAPABILITIES = [
  {
    icon: ArrowsRightLeftIcon,
    eyebrow: "01 / Pagos",
    title: "Integración de pagos",
    children:
      "Experiencia de desarrollo con terminales de pago, mensajería ISO 8583 y bibliotecas EMV en entornos Android.",
  },
  {
    icon: LockClosedIcon,
    eyebrow: "02 / Criptografía",
    title: "Arquitectura de seguridad",
    children:
      "Conocimiento aplicado de DUKPT, EFTSEC y arquitecturas criptográficas para sistemas de pago.",
  },
  {
    icon: CpuChipIcon,
    eyebrow: "03 / Dispositivos",
    title: "Software para terminales",
    children:
      "Experiencia en firmware y desarrollo para dispositivos de pago, desde Android hasta C y ensamblador ARM64.",
  },
  {
    icon: ServerStackIcon,
    eyebrow: "04 / Infraestructura",
    title: "Sistemas e infraestructura",
    children:
      "Experiencia en redes, servidores, soporte técnico e infraestructura para operaciones empresariales.",
  },
];

export function Features() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-[#050708] px-6 py-24 sm:px-10 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#71e5df]">
            Capacidades
          </p>
          <h2
            id="services-heading"
            className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl"
          >
            Seguridad financiera, desde el protocolo hasta el dispositivo.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#9ca8aa]">
            Una trayectoria técnica que reúne ingeniería de software, pagos
            electrónicos e infraestructura de sistemas.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {CAPABILITIES.map((capability) => (
            <FeatureCard key={capability.title} {...capability} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
