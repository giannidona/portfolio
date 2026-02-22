import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Geist } from "next/font/google";
import { Navbar } from "@/components";
import { SetLocaleLang } from "@/components/SetLocaleLang";
import { routing } from "@/i18n/routing";

const geistSans = Geist({ subsets: ["latin"] });

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <SetLocaleLang />
      <div className={`${geistSans.className} mx-auto w-[90%] py-8 lg:w-[35%]`}>
        <Navbar />
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
