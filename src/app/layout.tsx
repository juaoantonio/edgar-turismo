import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edgar Turismo - Viva o Marajó",
  description:
    "Descubra a Ilha do Marajó com a Edgar Turismo! Explore Soure, a capital do paraíso amazônico, repleta de fazendas encantadoras, praias de tirar o fôlego e o renomado queijo do Marajó. Nossos pacotes completos oferecem uma imersão genuína. Vivencie o Marajó de forma única e autêntica. Reserve agora e embarque na aventura dos seus sonhos!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <div className="bg-red-200">Menu Dashboard{children}</div>
      </body>
    </html>
  );
}
