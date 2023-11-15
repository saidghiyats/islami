// import ChapterCard from "@/components/molecules/card/ChapterCard";
import ListBookmarksCard from "@/components/molecules/cards/ListBookmarksCard";
import ProgresCard from "@/components/molecules/cards/ProgresCard";
import ChaptersSection from "@/components/organisms/sections/ChaptersSection";
import Sidebar from "@/components/organisms/sidebar/Sidebar";
import { getAllJuz } from "@/lib/getAllJuzs";
import { getListChapters } from "@/lib/getListChapters";

export default async function Home() {
  const chapters = await getListChapters();
  const juzs = await getAllJuz();

  return (
    <>
      <main className="w-full gap-8 flex flex-col">
        <ProgresCard />
        <ChaptersSection chapters={chapters} juzs={juzs} />
      </main>
      <Sidebar>
        <ListBookmarksCard />
      </Sidebar>
    </>
  );
}
