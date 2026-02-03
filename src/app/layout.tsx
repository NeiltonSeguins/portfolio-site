import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Neilton Seguins",
  description: "Site pessoal de Neilton Seguins",
};

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={montserrat.className}
      suppressHydrationWarning
    >
      <head>
        <Script
          id="adsense-init"
          async
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4897518096632597"
        />
      </head>
      <body>
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
      </body>
    </html>
  );
}
