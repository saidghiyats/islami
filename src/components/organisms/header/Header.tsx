"use client";
import { config } from "@/config";
import { fontTitle } from "@/fonts";
import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";

import clsx from "clsx";

import {
  PiGearFill,
  PiHeartFill,
  PiMagnifyingGlass,
  PiMagnifyingGlassFill,
} from "react-icons/pi";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/atoms/ThemeSwitcher";

export default function Header() {
  return (
    <Navbar
      classNames={{
        base: "static md:sticky border-secondary-200/50",
        wrapper: "container px-4 md:px-6",
      }}
      maxWidth="2xl"
    >
      <NavbarBrand>
        {/* <div className="w-8 h-8 flex items-center justify-center bg-default-200 rounded-full bg-[linear-gradient(90deg,#12A0EB_0%,#F46BCC_100%)]">
          <Logo width={18} />
        </div> */}
        <Link href={"/"}>
          <h1
            className={clsx(
              fontTitle.className,
              "text-primary-500 font-bold ml-2 text-lg md:text-xl"
            )}
          >
            {config.title}
          </h1>
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            startContent={<PiMagnifyingGlass className="w-4 h-4" />}
            variant="flat"
            radius="full"
            className="ml-10 justify-start hidden md:flex font-medium text-default-900 text-sm"
          >
            Search something...
          </Button>
        </NavbarItem>
        <NavbarItem className="md:space-x-2">
          <Button size="sm" variant="light" isIconOnly className="md:hidden">
            <PiMagnifyingGlassFill className="w-5 h-5" />
          </Button>
          <Button
            size="sm"
            variant="light"
            isIconOnly
            className="text-foreground-700"
          >
            <PiHeartFill className="w-5 h-5" />
          </Button>
          <Button
            size="sm"
            variant="light"
            isIconOnly
            className="text-foreground-700"
          >
            <PiGearFill className="w-5 h-5" />
          </Button>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
