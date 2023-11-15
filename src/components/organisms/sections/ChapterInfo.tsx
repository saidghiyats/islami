import { arabicName } from "@/fonts";
import { Chapter } from "@/types/Chapters";
import clsx from "clsx";

type Props = {
  chapter: Chapter;
};

export default function ChapterInfo({ chapter }: Props) {
  return (
    <div className="text-center w-full">
      <p
        className={clsx(
          arabicName.className,
          "text-5xl text-secondary-500 font-light"
        )}
      >
        {(chapter.number < 10 && `00${chapter.number}`) ||
          (chapter.number < 100 && `0${chapter.number}`) ||
          chapter.number}
      </p>
      <p>{chapter.name.transliteration.id}</p>
    </div>
  );
}
