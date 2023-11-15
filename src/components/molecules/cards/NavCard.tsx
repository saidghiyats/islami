import { getListChapters } from "@/lib/getListChapters";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import React from "react";
import { PiGearFill } from "react-icons/pi";
import NavChapters from "../NavChapters";
import NavVerses from "../NavVerses";
import { getVersesByChapter } from "@/lib/getVersesByChapter";

type Props = {
  id: string;
};

export default async function NavCard({ id }: Props) {
  const chapters = await getListChapters();
  const verses = await getVersesByChapter(id);
  return (
    <Card
      classNames={{
        base: "max-h-[calc(100vh_-_8rem)]",
        header: "px-5",
        body: "pt-0",
        footer: "px-5",
      }}
      shadow="none"
    >
      <CardHeader className="flex justify-between">
        <p className="text-foreground font-bold">Navigation</p>
        <PiGearFill className="h-5 w-5 text-default-700" />
      </CardHeader>
      <CardBody className="overflow-hidden pb-5 flex flex-row gap-4">
        <NavChapters chapters={chapters} id={id} />
        <NavVerses verseCount={verses.data.numberOfVerses} id={id} />
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
}
