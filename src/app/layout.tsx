import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components";

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
        <div>
          <TopBar />
        </div>
        {children}
      </body>
    </html>
  );
}
