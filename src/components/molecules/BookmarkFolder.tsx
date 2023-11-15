"use client";
import { BookmarkContext } from "@/contexts/BookmarksContext";
import { MultipleBookmark, SingleBookmark } from "@/types/Bookmark";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import { Tabs, Tab } from "@nextui-org/tabs";
import clsx from "clsx";
import React, { Dispatch, SetStateAction, useContext, useState } from "react";

type Props = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  type: string;
  setType: Dispatch<SetStateAction<string>>;
};

export default function BookmarkFolder({
  name,
  setName,
  type,
  setType,
}: Props) {
  const { bookmarks } = useContext(BookmarkContext);

  return (
    <Tabs
      fullWidth
      radius="sm"
      variant="underlined"
      classNames={{
        cursor: "bg-accent w-full",
        panel:
          "overflow-y-auto p-0 scroll scrollbar-w-[6px] scrollbar scrollbar-thumb-default hover:scrollbar-thumb-default-500 scrollbar-track-gray-100 scrollbar-thumb-rounded-full",
        tabContent:
          "font-semibold group-data-[selected=true]:text-accent text-secondary-500",
      }}
    >
      <Tab key="single" title="Single">
        <Listbox
          variant="flat"
          itemClasses={{
            base: "p-2 bg-secondary data-[hover=true]:bg-secondary/60",
            title: "font-medium text-secondary-900",
          }}
          className="space-y-1"
          selectionMode="single"
        >
          {bookmarks?.single ? (
            bookmarks.single.map((item: SingleBookmark) => {
              return (
                <ListboxItem
                  href={`/${item.numberInQuran}`}
                  key={item.name}
                  onPress={() => {
                    setName(item.name);
                    setType("single");
                  }}
                  className={clsx(
                    name === item.name &&
                      type === "single" &&
                      "outline-2 outline-accent -outline-offset-1"
                  )}
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
        <Listbox
          variant="flat"
          itemClasses={{
            base: "p-2 bg-secondary data-[hover=true]:bg-secondary/60",
            title: "font-medium text-secondary-900",
          }}
          className="space-y-1"
          selectionMode="single"
        >
          {bookmarks?.multiple ? (
            bookmarks.multiple.map((item: MultipleBookmark) => {
              return (
                <ListboxItem
                  href={`/${item.numberInQuran}`}
                  key={item.numberInQuran}
                  onPress={() => {
                    setName(item.name);
                    setType("multiple");
                  }}
                  className={clsx(
                    name === item.name &&
                      type === "multiple" &&
                      "outline-2 outline-accent -outline-offset-1"
                  )}
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
    </Tabs>
  );
}
