"use client";
import VerseCard from "@/components/molecules/cards/VerseCard";
import BookmarkModal from "@/components/molecules/modals/BookmarkModal";
import { Data, Verse, Verses } from "@/types/Verses";
import { useDisclosure } from "@nextui-org/modal";
import React, { useState } from "react";
import ChapterInfo from "./ChapterInfo";

type Props = {
  data: Data;
  id: string;
};

export default function VersesSection({ data, id }: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [numberInQuran, setNumberInQuran] = useState<any>();
  const [numberInSurah, setNumberInSurah] = useState<any>();

  return (
    <>
      <BookmarkModal
        bookmarkTitle={`${data.data.name.transliteration.id} Ayat ${numberInSurah}`}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        numberInQuran={numberInQuran}
        numberInSurah={numberInSurah}
        numberSurah={data.data.number}
        nameTransliteration={data.data.name.transliteration.id}
      />

      <section className="flex flex-col gap-8 w-full">
        <ChapterInfo chapter={data.data} />
        <div className="flex flex-col gap-6 w-full">
          {data.data.verses &&
            data.data.verses.map((verse: Verse) => {
              return (
                <VerseCard
                  key={verse.number.inSurah}
                  verse={verse}
                  onOpen={onOpen}
                  setNumberInSurah={setNumberInSurah}
                  setNumberInQuran={setNumberInQuran}
                />
              );
            })}
        </div>
      </section>
    </>
  );
}
