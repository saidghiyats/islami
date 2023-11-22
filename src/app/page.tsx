import ListBookmarksCard from "@/components/molecules/cards/ListBookmarksCard";
import ProgressCard from "@/components/molecules/cards/ProgressCard";
import ChaptersSection from "@/components/organisms/sections/ChaptersSection";
import Sidebar from "@/components/organisms/sidebar/Sidebar";
import { getAllJuz } from "@/lib/getAllJuzs";
import { getListChapters } from "@/lib/getListChapters";

export default async function HomePage() {
  const chapters = await getListChapters();
  const juzs = await getAllJuz();

  return (
    <>
      <main className="w-full gap-8 flex flex-col">
        <ProgressCard />
        <ChaptersSection chapters={chapters} juzs={juzs} />
      </main>
      <Sidebar>
        <ListBookmarksCard />
      </Sidebar>
    </>
  );
}
