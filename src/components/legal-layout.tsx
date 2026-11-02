import type { ReactNode } from "react";

type LegalPage = "terms" | "privacy";

type LegalLayoutProps = {
  title: string;
  description: string;
  currentPage: LegalPage;
  children: ReactNode;
};

const LEGAL_LINKS = [
  { label: "Términos de servicio", href: "/terms", page: "terms" },
  { label: "Política de privacidad", href: "/privacy", page: "privacy" },
] as const;

export function LegalLayout({
  title,
  description,
  currentPage,
  children,
}: LegalLayoutProps) {
  return (
    <main className="min-h-screen bg-[#090D13]">
      <header className="border-b border-white/10 bg-[#11141A]">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5 sm:px-10">
          <a href="/" className="flex items-center" aria-label="Society . E X E, inicio">
            <img
              src="/wordmark/logo-wordmark-for-dark-backgrounds.svg"
              alt="Society . E X E"
              width="204"
              height="35"
              className="h-[30px] w-auto sm:h-[35px]"
            />
          </a>
          <a
            href="/"
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-[#dce4e4] transition hover:border-[#22D3EE]/60 hover:text-[#22D3EE]"
          >
            Volver
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 pb-16 pt-14 sm:px-10 sm:pb-20 sm:pt-20">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#22D3EE]">
          Society . E X E
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[#a6b0b2]">
          {description}
        </p>
        <p className="mt-4 text-xs text-[#829093]">
          Vigente desde el 17 de octubre de 2026
        </p>

        <article className="mt-10 space-y-9 text-sm leading-7 text-[#b7c2c3]">
          {children}
        </article>

        <footer className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-6 text-xs text-[#829093] sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label="Documentos legales" className="flex flex-wrap gap-x-5 gap-y-2">
            {LEGAL_LINKS.map(({ label, href, page }) => (
              <a
                key={page}
                href={href}
                aria-current={currentPage === page ? "page" : undefined}
                className={`transition hover:text-[#22D3EE] ${
                  currentPage === page ? "text-[#dce4e4]" : ""
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="mailto:info@society-exe.site"
            className="transition hover:text-[#22D3EE]"
          >
            Contacto
          </a>
        </footer>
      </div>
    </main>
  );
}
