import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "@/components";

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
    <html className="scroll-smooth" lang="en">
      <body className={inter.className}>
        <div className="w-[90%] lg:max-w-xl mx-auto ">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
