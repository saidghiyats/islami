import type { Metadata } from "next";
import "./globals.css";
import RootProviders from "./providers";
import MobileNav from "@/components/organisms/mobile-nav/MobileNav";
import clsx from "clsx";
import Header from "@/components/organisms/header/Header";
import Footer from "@/components/organisms/footer/Footer";
import { fontSans, quicksand } from "@/fonts";
import { config } from "@/config";

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  manifest: "/manifest.json",
  icons: { apple: "/icon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        className={clsx(
          fontSans.variable,
          "scrollbar-w-[6px] scrollbar scrollbar-thumb-default hover:scrollbar-thumb-default-500 scrollbar-track-gray-100 scrollbar-thumb-rounded-full",
          "bg-background font-sans"
        )}
      >
        <RootProviders>
          <Header />
          <div className="container py-8 w-full flex gap-6">{children}</div>
          {/* <MobileNav /> */}
          <Footer />
        </RootProviders>
      </body>
    </html>
  );
}
