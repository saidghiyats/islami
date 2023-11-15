import { Juzs } from "@/types/Juzs";

export async function getAllJuz(): Promise<Juzs> {
  const res = await fetch(`${process.env.PUBLIC_QURAN_API}/juz`);
  const data = await res.json();

  return data as Juzs;
}
