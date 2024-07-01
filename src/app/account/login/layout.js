import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["variable"],
});

export const metadata = {
  title: "Beleza Única",
  description:
    "Website única com o teor informativo sobre a pressão estética nas redes sociais e na sociedade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={figtree.className}>{children}</body>
    </html>
  );
}
