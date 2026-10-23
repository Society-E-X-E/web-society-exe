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
  title: "OTP-X | Society . E X E",
  description:
    "Society . E X E investiga OTP-X, una propuesta de autenticación bancaria en etapa de definición.",
  openGraph: {
    title: "OTP-X | Society . E X E",
    description:
      "Investigación de una propuesta de autenticación bancaria. Proyecto en etapa de definición.",
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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png"/>
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png"/>
      </head>
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
