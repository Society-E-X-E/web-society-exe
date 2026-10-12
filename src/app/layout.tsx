import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Society . E X E | Seguridad bancaria y tecnología de pagos",
  description:
    "Ingeniería de seguridad financiera, tecnología de pagos y desarrollo de un nuevo enfoque de autenticación OTP bancaria.",
  openGraph: {
    title: "Society . E X E | Seguridad bancaria y tecnología de pagos",
    description:
      "Ingeniería de seguridad financiera y tecnología de pagos con una visión centrada en la confianza.",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
