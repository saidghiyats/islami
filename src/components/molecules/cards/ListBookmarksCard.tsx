"use client";
import { sectionTitle } from "@/components/atoms/sectionTitle";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Tab, Tabs } from "@nextui-org/tabs";
import React, { useContext } from "react";
import {
  PiArrowArcRight,
  PiBookBookmarkFill,
  PiBookmarksSimpleBold,
  PiCaretRightBold,
} from "react-icons/pi";
import { Listbox, ListboxSection, ListboxItem } from "@nextui-org/listbox";
import Link from "next/link";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { BookmarkContext } from "@/contexts/BookmarksContext";
import { MultipleBookmark, SingleBookmark, Verse } from "@/types/Bookmark";

export default function ListBookmarksCard() {
  const { bookmarks } = useContext(BookmarkContext);
  return (
    <Card
      classNames={{
        base: "max-h-96 bg-primary-0",
        header: "px-5",
        body: "pt-0",
        footer: "px-5",
      }}
      shadow="none"
    >
      <CardHeader className="flex justify-between">
        <p className="text-foreground font-bold">Bookmarks</p>
        <PiBookBookmarkFill className="h-5 w-5 text-foreground" />
      </CardHeader>
      <CardBody className="overflow-hidden pb-5">
        <Tabs
          aria-label="Options"
          fullWidth
          size="sm"
          radius="sm"
          variant="underlined"
          classNames={{
            base: "pb-2",
            cursor: "bg-accent w-full",
            panel:
              "overflow-y-auto p-0 scrollbar-w-[4px] scrollbar scrollbar-thumb-default hover:scrollbar-thumb-default-500 scrollbar-track-gray-100 scrollbar-thumb-rounded-full",
          }}
        >
          <Tab key="single" title="Single">
            <Listbox
              variant="flat"
              itemClasses={{
                base: "bg-secondary hover:bg-secondary/60 px-3 py-2",
                title: "font-semibold text-secondary-500 text-base",
                description:
                  "font-medium text-secondary-300 group-hover:text-secondary-300",
              }}
              className="space-y-2"
            >
              {bookmarks?.single ? (
                bookmarks.single.map((item: SingleBookmark) => {
                  return (
                    <ListboxItem
                      as={Link}
                      href={`/${item.numberSurah}#${item.numberInSurah}`}
                      key={item.name}
                      description={`${item.nameTransliteration} Ayat ${item.numberInSurah}`}
                    >
                      {item.name}
                    </ListboxItem>
                  );
                })
              ) : (
                <p>Tidak ada</p>
              )}
            </Listbox>
          </Tab>
          <Tab key="multiple" title="Multiple">
            <Accordion
              itemClasses={{
                title: "text-base font-semibold text-secondary-500",
                subtitle: "text-xs text-secondary-300",
                base: "m-1 rounded-md mb-2 data-[open=true]:bg-secondary",
                content: "px-2 pt-0",
                trigger:
                  "px-3 py-2 bg-secondary hover:bg-secondary/60 rounded-md",
              }}
              className="p-0"
              showDivider={false}
            >
              {bookmarks?.multiple ? (
                bookmarks.multiple.map((item: MultipleBookmark) => {
                  return (
                    <AccordionItem
                      key={item.name}
                      aria-label={item.name}
                      title={item.name}
                      subtitle={item.verses.length + " Item"}
                      indicator={
                        <PiCaretRightBold className="h-4 w-4 text-accent" />
                      }
                    >
                      <Listbox
                        variant="flat"
                        itemClasses={{
                          base: "bg-primary-0 hover:bg-secondary px-3 py-2",
                          title: "font-semibold text-secondary-500 text-sm",
                          description:
                            "font-medium text-secondary-300 group-hover:text-secondary-300 text-xs",
                        }}
                        className="space-y-2"
                      >
                        {item.verses.map((verse: Verse) => {
                          return (
                            <ListboxItem
                              as={Link}
                              href={`/${verse.numberSurah}#${verse.numberInSurah}`}
                              key={verse.numberInQuran}
                              description={verse.date}
                            >
                              {verse.nameTransliteration} Ayat{" "}
                              {verse.numberInSurah}
                            </ListboxItem>
                          );
                        })}
                      </Listbox>
                    </AccordionItem>
                  );
                })
              ) : (
                <p>Tidak ada</p>
              )}
            </Accordion>
          </Tab>
        </Tabs>
      </CardBody>
    </Card>
  );
}
