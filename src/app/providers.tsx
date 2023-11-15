"use client";
import BookmarksContextProvider from "@/contexts/BookmarksContext";
import { NavCardContextProvider } from "@/contexts/NavCardContext";
import { NextUIProvider } from "@nextui-org/system";

type Props = {
  children: React.ReactNode;
};

export default function RootProviders({ children }: Props) {
  return (
    <NextUIProvider>
      <BookmarksContextProvider>
        <NavCardContextProvider>{children}</NavCardContextProvider>
      </BookmarksContextProvider>
    </NextUIProvider>
  );
}
