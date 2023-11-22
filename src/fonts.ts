import {
  Plus_Jakarta_Sans as FontSans,
  Quicksand as FontTitle,
} from "next/font/google";
import localFont from "next/font/local";

export const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const fontTitle = FontTitle({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-title",
});

export const arabicName = localFont({
  src: "../public/assets/fonts/arabic-name.woff2",
});

export const UthmanicHafs1Ver18 = localFont({
  src: "../public/assets/fonts/UthmanicHafs1Ver18.woff2",
});

export const arabicText = localFont({
  src: "../public/assets/fonts/LPMQ IsepMisbah.ttf",
});
