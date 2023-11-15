import { Quicksand as FontSans } from "next/font/google";
import localFont from "next/font/local";

export const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const quicksand = FontSans({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const arabicName = localFont({
  src: "../assets/fonts/arabic-name.woff2",
});

export const UthmanicHafs1Ver18 = localFont({
  src: "../assets/fonts/UthmanicHafs1Ver18.woff2",
});

export const arabicText = localFont({
  src: "../assets/fonts/LPMQ IsepMisbah.ttf",
});
