import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Navbar } from "@/components";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gianluca Donato",
  description: "Gianluca Donato Portfolio & Blog",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <div className="mx-auto w-[90%] py-8 lg:w-[35%]">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
