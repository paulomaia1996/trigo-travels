import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TriGo Travel | Três amigas, mil destinos",
  description: "Roteiros feitos com escuta, afeto e atenção aos detalhes para você viver o mundo do seu jeito.",
  metadataBase: new URL("https://trigo-travels.maiat.chatgpt.site"),
  openGraph: {
    title: "TriGo Travel | Três amigas, mil destinos",
    description: "Roteiros feitos com escuta, afeto e atenção aos detalhes.",
    images: [{ url: "/og.png", width: 1680, height: 945, alt: "TriGo Travel — Três amigas, mil destinos" }],
  },
  twitter: { card: "summary_large_image", title: "TriGo Travel | Três amigas, mil destinos", images: ["/og.png"] },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
