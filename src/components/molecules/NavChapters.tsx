"use client";

import { Chapters } from "@/types/Chapters";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Input } from "@nextui-org/input";
import { PiMagnifyingGlass } from "react-icons/pi";

type Props = {
  chapters: Chapters;
  id: string;
};

export default function NavChapters({ chapters, id }: Props) {
  const [hoveredSurah, setHoveredSurah] = useState("");

  const parentSurahDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parentDiv = parentSurahDivRef.current;
    const activeDiv = parentDiv?.querySelector(`[data-chapter="${id}"]`);

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
  }, [id]);

  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col">
      <Input
        variant="flat"
        size="sm"
        className="pr-2 pb-2"
        startContent={<PiMagnifyingGlass />}
        value={value}
        onValueChange={setValue}
      />
      <Listbox
        as={"div"}
        ref={parentSurahDivRef}
        aria-label="chapters"
        itemClasses={{
          base: "data-[hover=true]:bg-transparent bg-transparent relative group",
          title: "z-[1] pl-1 text-secondary-900 font-medium",
        }}
        className="pl-0 gap-0 overflow-y-scroll scrollbar-w-[4px] scrollbar scrollbar-thumb-default hover:scrollbar-thumb-default-500 scrollbar-track-background scrollbar-thumb-rounded-full flex flex-col dark:scrollbar-track-content1"
      >
        {chapters.data
          .filter(
            (v) =>
              v.name.transliteration.id.toLowerCase().includes(value) ||
              v.number.toString().includes(value)
          )
          .map((chapter) => {
            return (
              <ListboxItem
                as={Link}
                key={chapter.name.transliteration.id.toLocaleLowerCase()}
                data-chapter={chapter.number}
                href={`/${chapter.number}`}
                className="text-sm"
                onMouseOver={() => {
                  if (String(chapter.number) !== id) {
                    setHoveredSurah(String(chapter.number));
                  }
                }}
                onMouseLeave={() => {
                  if (String(chapter.number) !== id) {
                    setHoveredSurah("");
                  }
                }}
              >
                {chapter.name.transliteration.id}
                {String(chapter.number) === hoveredSurah && (
                  <motion.div
                    className={clsx(
                      "absolute inset-0 bg-default-100 rounded-md -z-[2]"
                    )}
                    layoutId="NavChapterHover"
                    aria-hidden="true"
                    transition={{
                      type: "linear",
                      duration: 0.3,
                    }}
                  />
                )}
                {String(chapter.number) === id && (
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
