import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter_Tight({
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
    <html lang="en">
      <body className={inter.className}>
        <div className="w-[90%] lg:w-[35%] mx-auto">{children}</div>
      </body>
    </html>
  );
}
