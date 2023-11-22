"use client";
import { NavCardContext } from "@/contexts/NavCardContext";
import { Input } from "@nextui-org/input";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { useContext, useState, useRef, useEffect } from "react";
import { PiMagnifyingGlass } from "react-icons/pi";

type Props = {
  verseCount: number;
  id: string;
};

export default function NavVerses({ verseCount, id }: Props) {
  const { activeVerse } = useContext(NavCardContext);
  const [hoveredId, setHoveredId] = useState("");

  const parentDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parentDiv = parentDivRef.current;
    const activeDiv = parentDiv?.querySelector(`[data-verse="${activeVerse}"]`);

    if (!parentDiv || !activeDiv) return;

    const parentDivRect = parentDiv.getBoundingClientRect();
    const activeDivRect = activeDiv.getBoundingClientRect();

    const parentMidpoint = parentDivRect.top + parentDivRect.height / 2;
    const activeMidpoint = activeDivRect.top + activeDivRect.height / 2;

    const scrollAmount = activeMidpoint - parentMidpoint;

    parentDiv.scrollBy({
      top: scrollAmount,
      behavior: "smooth",
    });
  }, [activeVerse]);

  const [value, setValue] = useState("");

  const filteredVerses = Array.from({ length: verseCount }, (_, index) => {
    const verseValue = String(index + 1);
    return verseValue.includes(value) ? verseValue : null;
  }).filter(Boolean);

  return (
    <div className="flex flex-col w-[45%]">
      <Input
        variant="flat"
        size="sm"
        className="pr-2 pb-2"
        startContent={<PiMagnifyingGlass className="w-5 h-5" />}
        value={value}
        onValueChange={setValue}
      />
      <Listbox
        as={"div"}
        ref={parentDivRef}
        aria-label="verses"
        itemClasses={{
          base: "data-[hover=true]:bg-transparent bg-transparent relative group gap-0 h-max w-full",
          title: "z-[1] pl-1  text-secondary-900 font-medium",
        }}
        className="pl-0 gap-0 overflow-y-scroll scrollbar-w-[4px] scrollbar scrollbar-thumb-default hover:scrollbar-thumb-default-500 scrollbar-track-gray-100 scrollbar-thumb-rounded-full flex flex-col w-full dark:scrollbar-track-content1"
      >
        {filteredVerses.map((v) => {
          return (
            <ListboxItem
              as={Link}
              key={String(v)}
              href={`/${id}#${String(v)}`}
              data-verse={String(v)}
              className="text-sm"
              onMouseOver={() => {
                if (String(v) !== activeVerse) {
                  setHoveredId(String(v));
                }
              }}
              onMouseLeave={() => {
                if (String(v) !== activeVerse) {
                  setHoveredId("");
                }
              }}
            >
              {String(v)}
              {String(v) === hoveredId && (
                <motion.div
                  className={clsx(
                    "absolute inset-0 bg-default-100 rounded-md -z-[2]"
                  )}
                  layoutId="NavVerseHover"
                  aria-hidden="true"
                  transition={{
                    type: "linear",
                    duration: 0.3,
                  }}
                />
              )}
              {String(v) === activeVerse && (
                <div className="absolute inset-0 bg-default-100 rounded-md -z-[1]">
                  <span className="absolute w-1 inset-y-2 rounded-full left-[2px] bg-primary-500 group-hover:inset-y-[6px] duration-300 z-[2]" />
                </div>
              )}
            </ListboxItem>
          );
        })}
      </Listbox>
    </div>
  );
}
