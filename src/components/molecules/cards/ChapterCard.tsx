import { arabicName } from "@/fonts";
import { Card } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";
import clsx from "clsx";
import Link from "next/link";

interface ChapterCardProps {
  number: number;
  surah_name: string;
  surah_name_translation: string;
  verses_count: number;
  background?: string;
}

export default function ChapterCard({
  number,
  surah_name,
  surah_name_translation,
  verses_count,
  background = "bg-primary-0",
}: ChapterCardProps) {
  return (
    <Card
      as={Link}
      isPressable
      className="p-5 flex flex-row space-x-5 flex-wrap items-center relative"
      shadow="none"
      href={`/${number}`}
      classNames={{ base: `${background}` }}
    >
      <div className="h-8 w-8 rounded-md bg-primary-500 text-primary-0 rotate-45 flex justify-center items-center">
        <span className="-rotate-45 text-xs font-semibold">{number}</span>
      </div>
      <div className="w-[calc(100%_-_52px)] flex flex-wrap space-x-5 items-center justify-between">
        <div className="w-[calc(100%_-_76px)] space-y-1">
          <p className="font-semibold text-sm truncate text-secondary-500">
            {surah_name}
          </p>
          <p className="text-xs text-secondary-300 truncate font-medium">
            {surah_name_translation}
          </p>
        </div>
        <div className="text-center flex flex-col items-end">
          <p
            className={clsx(arabicName.className, "text-xl text-secondary-500")}
          >
            {(number < 10 && `00${number}`) ||
              (number < 100 && `0${number}`) ||
              number}
          </p>
          <p className="text-xs text-secondary-300 truncate font-medium">
            {verses_count} Ayat
          </p>
        </div>
      </div>
    </Card>
  );
}
