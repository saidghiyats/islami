import VersesSection from "@/components/organisms/sections/VersesSection";
import { getChapter } from "@/lib/getChapter";
import { getVersesByChapter } from "@/lib/getVersesByChapter";

type Props = {
  params: { id: string };
};

export default async function SurahPage({ params: { id } }: Props) {
  const data = await getVersesByChapter(id);

  return (
    <>
      <VersesSection data={data} id={id} />
    </>
  );
}
