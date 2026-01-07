import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ScrollToTop from "@/system/ScrollToTop";

export const metadata: Metadata = {
  title: "Fakiyat Afaq | Portfolio",
  description: "Portfolio of Fakiyat Afaq, a Frontend developer and designer.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollToTop />
        <Navbar />

        <main>
          <AntdRegistry>{children}</AntdRegistry>
        </main>

        <Footer />
      </body>
    </html>
  );
}
