import { Chapters } from "@/types/Chapters";

export async function getListChapters(): Promise<Chapters> {
  const res = await fetch(`${process.env.PUBLIC_QURAN_API}/surah`);
  const data = await res.json();

  return data as Chapters;
}
