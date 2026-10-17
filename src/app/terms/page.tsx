import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Términos de servicio | Society . E X E",
  description:
    "Condiciones de acceso y uso del sitio informativo de Society . E X E.",
  robots: { index: true, follow: true },
};

const SECTION_CLASS = "space-y-3";
const HEADING_CLASS = "text-lg font-semibold text-white";

export default function TermsPage() {
  return (
    <LegalLayout
      title="Términos de servicio"
      description="Condiciones simples para visitar y utilizar este sitio."
      currentPage="terms"
    >
      <section className={SECTION_CLASS}>
        <h2 className={HEADING_CLASS}>1. Alcance</h2>
        <p>
          Este sitio presenta información general sobre Society . E X E y su
          investigación. Al navegarlo, aceptas estos términos. Si no estás de
          acuerdo, deja de utilizarlo.
        </p>
      </section>

      <section className={SECTION_CLASS}>
        <h2 className={HEADING_CLASS}>2. OTP-X no es un servicio disponible</h2>
        <p>
          OTP-X es una propuesta en etapa de investigación y definición. No se
          ofrece aquí como producto, servicio bancario, mecanismo de
          autenticación ni asesoría financiera. No se afirma que esté aprobado,
          certificado o disponible comercialmente. La información pública es
          descriptiva y puede cambiar sin aviso.
        </p>
      </section>

      <section className={SECTION_CLASS}>
        <h2 className={HEADING_CLASS}>3. Propiedad intelectual y uso</h2>
        <p>
          Los derechos sobre los contenidos y materiales protegidos se reservan
          a sus respectivos titulares. El núcleo tecnológico preexistente de
          OTP-X —incluidos su código, arquitectura, algoritmos, metodología y
          documentación— corresponde a Ahiézer Rada, según la información del
          proyecto. Los aportes de terceros y los componentes sujetos a
          licencias propias mantienen sus respectivos derechos.
        </p>
        <p>
          Consultar el sitio no transfiere derechos ni concede una licencia
          para copiar, modificar, distribuir, publicar, comercializar o crear
          obras derivadas de materiales protegidos. Para cualquier uso que
          requiera autorización, solicita permiso previo y escrito al titular
          correspondiente.
        </p>
      </section>

      <section className={SECTION_CLASS}>
        <h2 className={HEADING_CLASS}>4. Uso responsable</h2>
        <p>
          No intentes interrumpir, dañar o acceder sin autorización a este sitio
          o a sus sistemas. No uses la información para afirmar que tienes
          autorización, asociación, aprobación o respaldo de Society . E X E
          que no te haya sido concedido expresamente.
        </p>
      </section>

      <section className={SECTION_CLASS}>
        <h2 className={HEADING_CLASS}>5. Enlaces y disponibilidad</h2>
        <p>
          El sitio puede enlazar a plataformas de terceros. Sus contenidos,
          disponibilidad y prácticas se rigen por sus propios términos. Se
          procura mantener el sitio disponible y actualizado, pero no se
          garantiza acceso ininterrumpido ni que cada contenido esté libre de
          errores.
        </p>
      </section>

      <section className={SECTION_CLASS}>
        <h2 className={HEADING_CLASS}>6. Acuerdos y contacto</h2>
        <p>
          Estos términos regulan el uso general del sitio; no sustituyen ni
          modifican acuerdos escritos que rijan una colaboración autorizada o
          el intercambio de información confidencial. Para consultas, escribe a{" "}
          <a
            className="text-[#79ebe4] underline decoration-white/25 underline-offset-4 hover:decoration-[#79ebe4]"
            href="mailto:info@society-exe.site"
          >
            info@society-exe.site
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
}
