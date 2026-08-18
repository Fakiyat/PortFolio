import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ScrollToTop from "@/system/ScrollToTop";
import CustomCursor from "./components/ui/CustomCursor";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fakiyat Afaq | Frontend Developer & UI Engineer Portfolio",
  description:
    "Portfolio of Fakiyat Afaq, a Frontend Developer specializing in React, Next.js, TypeScript, TailwindCSS, and hyper-animated web experiences.",
  keywords: [
    "Fakiyat Afaq",
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "TypeScript",
    "TailwindCSS",
    "UI Engineer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark scroll-smooth ${manrope.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window !== 'undefined') {
                  window.addEventListener('unhandledrejection', function(event) {
                    var msg = event && event.reason ? String(event.reason.message || event.reason) : '';
                    var stack = event && event.reason ? String(event.reason.stack || '') : '';
                    if (
                      msg.includes('MetaMask') ||
                      msg.includes('Failed to connect') ||
                      stack.includes('inpage.js') ||
                      stack.includes('contentscript.js') ||
                      stack.includes('ObjectMultiplex')
                    ) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                  }, true);
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${manrope.className} bg-black text-zinc-100 antialiased selection:bg-amber-400/30 selection:text-white min-h-screen flex flex-col font-sans`}>
        <ScrollToTop />
        <CustomCursor />
        <Navbar />

        <main className="flex-1">
          <AntdRegistry>{children}</AntdRegistry>
        </main>

        <Footer />
      </body>
    </html>
  );
}
