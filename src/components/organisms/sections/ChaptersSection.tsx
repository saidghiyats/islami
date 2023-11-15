"use client";
import ChapterCardSkeleton from "@/components/molecules/skeleton/ChapterCardSkeleton";
import { Chapters } from "@/types/Chapters";
import { Juzs } from "@/types/Juzs";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Tab, Tabs } from "@nextui-org/tabs";
import dynamic from "next/dynamic";
import Link from "next/link";
import { PiArrowsDownUpBold } from "react-icons/pi";
import { useBoolean } from "usehooks-ts";
const ChapterCard = dynamic(
  () => import("@/components/molecules/cards/ChapterCard"),
  {
    loading: () => <ChapterCardSkeleton />,
  }
);
type Props = {
  chapters: Chapters;
  juzs: Juzs;
};

export default function ChaptersSection({ chapters, juzs }: Props) {
  const { value, toggle } = useBoolean();

  return (
    <>
      <div className="relative">
        <Button
          isIconOnly
          variant="flat"
          aria-label="sort"
          className="absolute right-0 bg-primary-0 text-accent data-[pressed=true]:rotate-180"
          onPress={toggle}
        >
          <PiArrowsDownUpBold className="w-5 h-5" />
        </Button>
        <Tabs
          classNames={{
            tabList: "bg-primary-0 mb-2",
            cursor: "bg-primary-500",
            tabContent:
              "group-data-[selected=true]:text-primary-0 font-medium text-secondary-300",
            panel: "px-0",
          }}
        >
          <Tab key="surah" title="Surah">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {chapters.data
                .sort((a, b) =>
                  !value ? a.number - b.number : b.number - a.number
                )
                .map((chapter) => {
                  return (
                    <ChapterCard
                      key={chapter.number}
                      number={chapter.number}
                      surah_name={chapter.name.transliteration.id}
                      surah_name_translation={chapter.name.translation.id}
                      verses_count={chapter.numberOfVerses}
                    />
                  );
                })}
            </div>
          </Tab>
          <Tab key="juz" title="Juz">
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-2 xl:columns-3 space-y-4">
              {juzs.data
                .sort((a, b) =>
                  !value ? a.number - b.number : b.number - a.number
                )
                .map((juz) => {
                  return (
                    <Card
                      shadow="none"
                      className="bg-primary-0"
                      key={juz.number}
                    >
                      <CardHeader className="px-4 pb-0 flex justify-between text-sm font-semibold text-accent">
                        <span>Juz {juz.number}</span>
                        <Link color="foreground" href={`/juz/${juz.number}`}>
                          Baca
                        </Link>
                      </CardHeader>
                      <CardBody className="space-y-4 p-4">
                        {juz.chapters.map((chapter) => {
                          return (
                            <ChapterCard
                              key={chapter.number}
                              number={chapter.number}
                              surah_name={chapter.name.transliteration.id}
                              surah_name_translation={
                                chapter.name.translation.id
                              }
                              verses_count={chapter.numberOfVerses}
                              background="bg-secondary"
                            />
                          );
                        })}
                      </CardBody>
                    </Card>
                  );
                })}
            </div>
          </Tab>
          <Tab key="revelation" title="Revelation Order">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {chapters.data
                .sort((a, b) =>
                  !value ? a.sequence - b.sequence : b.sequence - a.sequence
                )
                .map((chapter) => {
                  return (
                    <ChapterCard
                      key={chapter.number}
                      number={chapter.number}
                      surah_name={chapter.name.transliteration.id}
                      surah_name_translation={chapter.name.translation.id}
                      verses_count={chapter.numberOfVerses}
                    />
                  );
                })}
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
