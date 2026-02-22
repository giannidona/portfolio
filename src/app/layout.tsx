import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gianluca Donato",
  description: "Web Developer & Designer based in Buenos Aires, Argentina.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
