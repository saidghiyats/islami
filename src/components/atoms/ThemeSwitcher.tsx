"use client";

import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@nextui-org/button";
import {
  PiDesktop,
  PiMoon,
  PiMoonFill,
  PiSun,
  PiSunFill,
} from "react-icons/pi";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Dropdown classNames={{ content: "min-w-[130px]" }}>
      <DropdownTrigger>
        <Button
          size="sm"
          variant="light"
          isIconOnly
          className="text-foreground-700"
        >
          {theme == "dark" || theme == "system" ? (
            <PiMoonFill className="w-5 h-5" />
          ) : (
            <PiSunFill className="w-5 h-5" />
          )}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        itemClasses={{
          title: "font-medium",
        }}
      >
        <DropdownItem
          key="light"
          variant="flat"
          startContent={<PiSun />}
          onPress={() => setTheme("light")}
          className={theme == "light" ? "bg-default-100" : ""}
        >
          Light
        </DropdownItem>
        <DropdownItem
          key="dark"
          variant="flat"
          startContent={<PiMoon />}
          onPress={() => setTheme("dark")}
          className={theme == "dark" ? "bg-default-100" : ""}
        >
          Dark
        </DropdownItem>
        <DropdownItem
          key="system"
          variant="flat"
          startContent={<PiDesktop />}
          onPress={() => setTheme("system")}
          className={theme == "system" ? "bg-default-100" : ""}
        >
          System
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
