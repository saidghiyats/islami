"use client";
import { createContext, useState } from "react";

export const NavCardContext = createContext<any>({});

export function NavCardContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeVerse, setActiveVerse] = useState<number>();

  return (
    <NavCardContext.Provider value={{ activeVerse, setActiveVerse }}>
      {children}
    </NavCardContext.Provider>
  );
}
