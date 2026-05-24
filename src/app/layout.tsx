import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./pizza.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pinocchio Pizza & Pasta — Autentikus Olasz Pizza",
  description:
    "Helyi pizzázó Budapesten, ahol minden pizza kézzel készül, fából tüzelt kemencében sütve. Foglaljon asztalt még ma!",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="vk-body">{children}</body>
    </html>
  );
}
