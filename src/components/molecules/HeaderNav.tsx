"use client";

import { config } from "@/config";
import { Button } from "@nextui-org/button";
import { NavbarItem } from "@nextui-org/navbar";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderNav() {
  const pathname = usePathname();
  return (
    <>
      {config.header_nav.map((nav) => {
        return (
          <NavbarItem key={nav.name}>
            <Button
              as={Link}
              href={nav.slug}
              size="sm"
              variant="light"
              startContent={<nav.icon className="w-5 h-5" />}
              className={clsx(
                pathname === nav.slug && "bg-gradient text-background",
                "font-semibold"
              )}
            >
              {nav.name}
            </Button>
          </NavbarItem>
        );
      })}
    </>
  );
}
