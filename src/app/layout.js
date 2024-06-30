import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "Beleza Única",
  description:
    "Website única com o teor informativo sobre a pressão estética nas redes sociais e na sociedade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
