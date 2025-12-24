import type { Metadata } from "next";
import "./globals.css";
import { raleway } from "./lib/fonts";
import { sharedMetaData } from "@/shared-meta-data";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  ...sharedMetaData,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"${raleway.className}"}>
        <Header />
        <div className="background">
          <div className="gradient-blur"></div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
