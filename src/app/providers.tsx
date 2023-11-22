"use client";
import BookmarksContextProvider from "@/contexts/BookmarksContext";
import { NavCardContextProvider } from "@/contexts/NavCardContext";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type Props = {
  children: React.ReactNode;
};

export default function RootProviders({ children }: Props) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="system">
        <BookmarksContextProvider>
          <NavCardContextProvider>{children}</NavCardContextProvider>
        </BookmarksContextProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
