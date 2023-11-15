import { Chapter } from "@/types/Chapters";

export async function getChapter(id: string): Promise<Chapter> {
  const res = await fetch(
    `${process.env.PUBLIC_QURAN_API}/chapters/${id}?language=id`
  );
  const data = await res.json();

  return data.chapter as Chapter;
}
