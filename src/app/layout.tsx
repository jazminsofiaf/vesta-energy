import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Instalación de placas solares en tu tejado | Vesta Energy",
  description: "Instala placas solares y ahorra con Vesta Energy. Disfruta de batería virtual y nuestro monedero virtual para una casa sostenible",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable}`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
