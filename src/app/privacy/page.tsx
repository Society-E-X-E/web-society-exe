import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Política de privacidad | Society . E X E",
  description:
    "Información sobre los datos técnicos tratados al visitar el sitio de Society . E X E.",
  robots: { index: true, follow: true },
};

const SECTION_CLASS = "space-y-3";
const HEADING_CLASS = "text-lg font-semibold text-white";

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Política de privacidad"
      description="Qué datos pueden tratarse al visitar este sitio y cómo contactarnos."
      currentPage="privacy"
    >
      <section className={SECTION_CLASS}>
        <h2 className={HEADING_CLASS}>1. A quién y a qué aplica</h2>
        <p>
          Society . E X E, bajo responsabilidad de Ahiézer Rada, publica este
          sitio informativo. Esta política se limita a la navegación del sitio:
          OTP-X está en etapa de definición y no se ofrece aquí como servicio,
          por lo que esta página no describe el tratamiento de datos de un
          producto o piloto futuro.
        </p>
      </section>

      <section className={SECTION_CLASS}>
        <h2 className={HEADING_CLASS}>2. Datos de navegación</h2>
        <p>
          El sitio no incluye cuentas ni formularios propios de envío. Como
          ocurre al cargar una página web, el proveedor de alojamiento puede
          procesar datos técnicos de la solicitud —por ejemplo, dirección IP,
          fecha y hora, navegador y recurso solicitado— para entregar y proteger
          el sitio. Los registros y su plazo de conservación dependen de la
          configuración y las políticas de ese proveedor.
        </p>
        <p>
          La hoja de estilos de iconos se solicita a cdnjs de Cloudflare; esa
          conexión puede transmitir datos técnicos al proveedor para entregar
          el recurso. El sitio no incorpora herramientas propias de analítica,
          publicidad ni seguimiento de audiencia en su implementación actual.
        </p>
      </section>

      <section className={SECTION_CLASS}>
        <h2 className={HEADING_CLASS}>3. Contacto y enlaces externos</h2>
        <p>
          Si nos escribes por correo o WhatsApp, la información que incluyas se
          procesa a través del servicio correspondiente para responder y
          gestionar la conversación. Las redes sociales y plataformas externas
          tienen sus propias políticas de privacidad. Evita enviar por esos
          canales contraseñas, códigos de autenticación, datos bancarios o
          información sensible que no sea necesaria.
        </p>
      </section>

      <section className={SECTION_CLASS}>
        <h2 className={HEADING_CLASS}>4. Uso, conservación y protección</h2>
        <p>
          La información recibida al contactarnos se utiliza para atender tu
          solicitud y se conserva solo durante el tiempo necesario para ese fin
          o para cumplir obligaciones aplicables. No vendemos datos personales.
          El acceso a información se limita a lo necesario para operar el sitio
          y responder consultas; ningún medio de transmisión o almacenamiento
          puede garantizar seguridad absoluta.
        </p>
      </section>

      <section className={SECTION_CLASS}>
        <h2 className={HEADING_CLASS}>5. Tus solicitudes y cambios</h2>
        <p>
          Puedes solicitar información sobre tus datos o pedir su actualización
          o eliminación, cuando corresponda conforme a la normativa aplicable,
          escribiendo a{" "}
          <a
            className="text-[#79ebe4] underline decoration-white/25 underline-offset-4 hover:decoration-[#79ebe4]"
            href="mailto:info@society-exe.site"
          >
            info@society-exe.site
          </a>
          . Esta política puede actualizarse si cambia el sitio o sus prácticas;
          publicaremos la versión vigente en esta página.
        </p>
      </section>
    </LegalLayout>
  );
}
