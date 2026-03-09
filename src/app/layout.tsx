import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gianluca Donato",
  description: "Web Developer & Designer based in Buenos Aires, Argentina.",
  openGraph: {
    title: "Gianluca Donato",
    description: "Web Developer & Designer based in Buenos Aires, Argentina.",
    url: "https://gianluca-donato.vercel.app/en", // Puedes actualizar esto con tu dominio real si es distinto
    siteName: "Gianluca Donato",
    images: [
      {
        url: "/bannner-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Gianluca Donato - Web Developer & Designer",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gianluca Donato",
    description: "Web Developer & Designer based in Buenos Aires, Argentina.",
    images: ["/bannner-meta.jpg"],
    creator: "@giannidona_dev",
  },
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
