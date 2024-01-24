import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gianluca Donato",
  description: "Portfolio de Gianluca Donato",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
