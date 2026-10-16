function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden border-b border-white/10 bg-[#050708] px-6 pb-20 pt-36 sm:px-10 sm:pt-44 lg:px-12 lg:pb-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_42%,rgba(47,230,220,0.13),transparent_36%),linear-gradient(135deg,transparent_45%,rgba(255,255,255,0.025))]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_right,transparent,black)]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <p className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#70e9e2]">
            <span className="h-px w-8 bg-[#70e9e2]" />
            Seguridad para el ecosistema financiero
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.06] tracking-[-0.055em] text-[#f4f7f7] sm:text-6xl lg:text-7xl">
            La confianza financiera empieza con una{" "}
            <span className="text-[#65e8e1]">autenticación mejor diseñada.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-[#a6b0b2] sm:text-lg">
            Ingeniería de seguridad y tecnología de pagos para crear sistemas
            más sólidos. Investigamos OTP-X, una propuesta de autenticación
            bancaria que explora una evaluación más amplia del contexto de
            acceso. Su alcance sigue en definición.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#otp"
              className="inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-[#64e8e0] px-7 py-3 text-sm font-bold text-[#061012] transition hover:bg-[#9af7f1]"
            >
              Conoce nuestra visión
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://wa.me/573223213752"
              className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:border-[#64e8e0]/70 hover:text-[#8df0e9]"
            >
              Contactar al equipo
            </a>
          </div>
          <p className="mt-6 text-xs leading-5 text-[#718083]">
            El método se encuentra en etapa de definición. No anunciamos una
            certificación obtenida ni una aprobación regulatoria.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem]">
          <div
            aria-hidden="true"
            className="absolute inset-10 rounded-full bg-[#3dd8d0]/10 blur-3xl"
          />
          <div className="relative rounded-[2rem] border border-white/10 bg-[#0c1113]/90 p-5 shadow-[0_32px_100px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-[#64e8e0]/30 bg-[#64e8e0]/10 text-[#64e8e0]">
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
                      d="m9 12 2 2 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Laboratorio de seguridad
                  </p>
                  <p className="mt-1 text-xs text-[#829093]">
                    Autenticación bancaria
                  </p>
                </div>
              </div>
              <span className="rounded-full border border-[#64e8e0]/20 bg-[#64e8e0]/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#78e8e1]">
                Investigación
              </span>
            </div>

            <div className="py-9">
              <div className="mx-auto grid h-44 w-44 place-items-center rounded-full border border-[#64e8e0]/20 bg-[radial-gradient(circle,rgba(100,232,224,0.12),rgba(12,17,19,0.2)_67%)] sm:h-52 sm:w-52">
                <div className="grid h-32 w-32 place-items-center rounded-full border border-[#64e8e0]/30 sm:h-40 sm:w-40">
                  <div className="grid h-20 w-20 place-items-center rounded-3xl border border-[#64e8e0]/40 bg-[#0e2021] shadow-[0_0_42px_rgba(100,232,224,0.16)] sm:h-24 sm:w-24">
                    <span className="text-2xl font-semibold tracking-[0.14em] text-[#8af4ed] sm:text-3xl">
                      .EXE
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-[#829093]">
                  Proyecto en investigación
                </p>
                <p className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  OTP-X
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-5 text-center">
              <div className="px-2">
                <p className="text-[10px] uppercase tracking-[0.12em] text-[#829093]">
                  Enfoque
                </p>
                <p className="mt-2 text-xs font-medium text-[#dce4e4]">
                  Banca
                </p>
              </div>
              <div className="px-2">
                <p className="text-[10px] uppercase tracking-[0.12em] text-[#829093]">
                  Disciplina
                </p>
                <p className="mt-2 text-xs font-medium text-[#dce4e4]">
                  Ingeniería
                </p>
              </div>
              <div className="px-2">
                <p className="text-[10px] uppercase tracking-[0.12em] text-[#829093]">
                  Prioridad
                </p>
                <p className="mt-2 text-xs font-medium text-[#dce4e4]">
                  Confianza
                </p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-[10px] uppercase tracking-[0.18em] text-[#687578]">
            Diseño seguro · Confianza verificable
          </p>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl border-t border-white/10 pt-6">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#778588]">
          Experiencia aplicada en tecnología de pagos
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium tracking-wide text-[#b8c1c2] sm:gap-x-12">
          <span>ISO 8583</span>
          <span>EMV</span>
          <span>DUKPT</span>
          <span>EFTSEC</span>
          <span>Terminales de pago</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
