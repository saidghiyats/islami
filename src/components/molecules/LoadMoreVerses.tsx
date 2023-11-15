"use client";
import { getVersesByChapter } from "@/lib/getVersesByChapter";
import { Verse, Verses } from "@/types/Verses";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import VerseCard from "./cards/VerseCard";

interface Props {
  id: string;
  verses: Verses;
  onOpen: () => void;
  setNumberInSurah: Dispatch<SetStateAction<number | undefined>>;
  setNumberInQuran: Dispatch<SetStateAction<number | undefined>>;
}

export default function LoadMoreVerses({
  id,
  verses,
  onOpen,
  setNumberInSurah,
  setNumberInQuran,
}: Props) {
  const [data, setData] = useState<Verses>({
    verses: [],
    pagination: verses.pagination,
  });
  const [pageLoaded, setPageLoaded] = useState(1);
  const { ref, inView } = useInView();

  const fetchVerses = async () => {
    const nextPage = pageLoaded + 1;
    try {
      const newVersesData = await getVersesByChapter(id, nextPage);

      if (
        newVersesData &&
        newVersesData.verses &&
        newVersesData.verses.length > 0
      ) {
        setData((prevData: Verses) => ({
          verses: [...prevData.verses, ...newVersesData.verses],
          pagination: newVersesData.pagination,
        }));
        setPageLoaded(nextPage);
      }
    } catch (error) {
      console.error("Error fetching verses:", error);
    }
  };

  useEffect(() => {
    if (inView) {
      console.log("Scrolled to the end");
      fetchVerses();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <>
      {data?.verses?.map((verse: Verse) => {
        return (
          <VerseCard
            key={verse.id}
            verse={verse}
            onOpen={onOpen}
            setNumberInSurah={setNumberInSurah}
            setNumberInQuran={setNumberInQuran}
          />
        );
      })}
      {data?.pagination.next_page !== null && (
        <div ref={ref} className="w-full h-16 bg-cyan-500 flex justify-center">
          <p>Loading ...</p>
        </div>
      )}
    </>
  );
}
