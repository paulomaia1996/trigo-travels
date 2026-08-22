import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trigo Travel | O mundo mais perto daqui",
  description: "Roteiros autorais e experiências desenhadas para o seu jeito de viajar.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
