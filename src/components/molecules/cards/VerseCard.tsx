"use client";
import { NavCardContext } from "@/contexts/NavCardContext";
import { UthmanicHafs1Ver18 } from "@/fonts";
import { Verse } from "@/types/Verses";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import clsx from "clsx";
import { useInView } from "framer-motion";
import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
} from "react";
import {
  PiBookOpenTextBold,
  PiBookmarkSimpleBold,
  PiCopySimpleBold,
} from "react-icons/pi";

type Props = {
  verse: Verse;
  onOpen: () => void;
  setNumberInSurah: Dispatch<SetStateAction<number | undefined>>;
  setNumberInQuran: Dispatch<SetStateAction<number | undefined>>;
};

export default function VerseCard({
  verse,
  onOpen,
  setNumberInSurah,
  setNumberInQuran,
}: Props) {
  const { setActiveVerse } = useContext(NavCardContext);

  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
  });

  useEffect(() => {
    if (isInView) setActiveVerse(String(verse.number.inSurah));
  }, [isInView, setActiveVerse, verse.number.inSurah]);

  return (
    <div
      ref={ref}
      id={verse.number.inSurah.toString()}
      className="scroll-mt-[calc(100vh_/_2)]"
    >
      <Card shadow="none" classNames={{ base: "bg-primary-0" }}>
        <CardHeader className="flex justify-between">
          <div className="space-x-2">
            <Button
              variant="light"
              size="sm"
              isIconOnly
              className="text-accent"
            >
              <PiCopySimpleBold className="w-5 h-5" />
            </Button>
            <Button
              variant="light"
              size="sm"
              isIconOnly
              className="text-accent"
            >
              <PiBookOpenTextBold className="w-5 h-5" />
            </Button>
          </div>
          <Button
            variant="light"
            size="sm"
            isIconOnly
            className="text-accent"
            onPress={() => {
              onOpen();
              setNumberInSurah(verse.number.inSurah);
              setNumberInQuran(verse.number.inQuran);
            }}
          >
            <PiBookmarkSimpleBold className="w-5 h-5" />
          </Button>
        </CardHeader>

        <CardBody dir="rtl" className="space-y-3">
          <p
            className={clsx(
              UthmanicHafs1Ver18.className,
              "text-right text-3xl leading-[3rem]"
            )}
          >
            {verse.text.arab}{" "}
            <span>{verse.number.inSurah.toLocaleString("ar-SA")}</span>
          </p>
          <p className="text-sm">{verse.text.transliteration.id}</p>
          <p className="text-sm">{verse.translation.id}</p>
        </CardBody>
      </Card>
    </div>
  );
}
