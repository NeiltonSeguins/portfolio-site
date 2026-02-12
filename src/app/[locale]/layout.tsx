import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Neilton Seguins",
  description: "Site pessoal de Neilton Seguins",
  other: {
    "google-adsense-account": "ca-pub-4897518096632597",
  },
};

export const viewport = {
  themeColor: "#000000",
};

export function generateStaticParams() {
  return [{ locale: 'pt' }, { locale: 'en' }];
}

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<any>;
}) {
  const params = await props.params;

  const { locale } = params;
  const { children } = props;

  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={montserrat.className}
      suppressHydrationWarning
    >
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex justify-center min-h-screen">
              <div className="w-full max-w-[1000px] px-4 flex flex-col min-h-screen">
                <Header />
                <main className="flex-1">
                  {children}
                  <Analytics />
                </main>
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
      <Script
        id="adsense-init"
        async
        strategy="afterInteractive"
        crossOrigin="anonymous"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4897518096632597"
      />
    </html>
  );
}
