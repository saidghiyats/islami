import Logo from "@/components/atoms/Logo";
import HeaderNav from "@/components/molecules/HeaderNav";
import { config } from "@/config";
import { quicksand } from "@/fonts";
import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";

import { Badge } from "@nextui-org/badge";
import { Avatar } from "@nextui-org/avatar";

import clsx from "clsx";

import {
  PiBellBold,
  PiBellFill,
  PiCarProfile,
  PiGearFill,
  PiHeartFill,
  PiMagnifyingGlass,
  PiMoonBold,
  PiMoonFill,
  PiSelectionBackgroundThin,
  PiSmileyWinkBold,
  PiSmileyWinkFill,
} from "react-icons/pi";

export default function Header() {
  return (
    <Navbar
      classNames={{
        base: "bg-primary-0 static md:sticky border-secondary-200/50",
        wrapper: "container",
      }}
      isBlurred={false}
      maxWidth="2xl"
      isBordered
    >
      <NavbarBrand>
        {/* <div className="w-8 h-8 flex items-center justify-center bg-default-200 rounded-full bg-[linear-gradient(90deg,#12A0EB_0%,#F46BCC_100%)]">
          <Logo width={18} />
        </div> */}
        <h1
          className={clsx(
            quicksand.className,
            "text-primary-500 font-bold ml-2 text-lg md:text-xl"
          )}
        >
          {config.title}
        </h1>
        <Button
          startContent={<PiMagnifyingGlass className="w-4 h-4" />}
          variant="bordered"
          radius="full"
          className="ml-10 text-accent border-secondary-200/50 border w-80 justify-start"
        >
          Search something...
        </Button>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="space-x-3">
          <Button size="sm" variant="light" isIconOnly className="text-accent">
            <PiHeartFill className="w-5 h-5" />
          </Button>
          <Badge content="" color="danger" shape="circle" isDot>
            <Button
              size="sm"
              variant="light"
              isIconOnly
              className="text-accent"
            >
              <PiBellFill className="w-5 h-5" />
            </Button>
          </Badge>
          <Button size="sm" variant="light" isIconOnly className="text-accent">
            <PiGearFill className="w-5 h-5" />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Avatar
            isBordered
            size="sm"
            icon={<PiSmileyWinkBold className="w-5 h-5" />}
            classNames={{
              base: "text-accent bg-background",
            }}
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}