import { Data } from "@/types/Verses";

export async function getVersesByChapter(id: string): Promise<Data> {
  const res = await fetch(`${process.env.PUBLIC_QURAN_API}/surah/${id}`);
  const data = await res.json();

  return data as Data;
}
