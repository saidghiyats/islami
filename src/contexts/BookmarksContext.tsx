"use client";

import { Bookmark, Bookmarks } from "@/types/Bookmark";
import {
  ReactNode,
  createContext,
  useCallback,
  useState,
  useEffect,
} from "react";

type BookmarkContextProps = {
  addToBookmark: (dataBookmark: Bookmarks) => void;
  bookmarks: Bookmarks;
};

export const BookmarkContext = createContext<BookmarkContextProps | any>({});

interface BookmarkProviderProps {
  children: ReactNode;
}

const DEFAULT_BOOKMARKS = { single: [], multiple: [] };

const loadBookmarksFromLocalStorage = (): Bookmarks | null => {
  const savedBookmarksString = localStorage.getItem("bookmarks");
  return savedBookmarksString ? JSON.parse(savedBookmarksString) : null;
};

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString("in-ID", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const updateSingleBookmarks = (data: Bookmark, bookmarks: any) => {
  const existingSingleIndex = bookmarks.single.findIndex(
    (item: any) => item.name === data.name
  );
  const entry = {
    name: data.name,
    numberInQuran: data.numberInQuran,
    numberInSurah: data.numberInSurah,
    numberSurah: data.numberSurah,
    nameTransliteration: data.nameTransliteration,
    date: formattedDate,
  };

  if (existingSingleIndex > -1) {
    bookmarks.single[existingSingleIndex] = entry;
  } else {
    bookmarks.single.push(entry);
  }
};

const updateMultipleBookmarks = (data: Bookmark, bookmarks: any) => {
  const existingMultiple = bookmarks.multiple.find(
    (item: any) => item.name === data.name
  );
  const entry = {
    numberInQuran: data.numberInQuran,
    numberInSurah: data.numberInSurah,
    numberSurah: data.numberSurah,
    nameTransliteration: data.nameTransliteration,
    date: formattedDate,
  };

  if (existingMultiple) {
    const isIdDuplicate = existingMultiple.verses.some(
      (verse: any) => verse.numberInQuran === data.numberInQuran
    );

    if (!isIdDuplicate) {
      existingMultiple.verses.push(entry);
    }
  } else {
    bookmarks.multiple.push({ name: data.name, verses: [entry] });
  }
};

export default function BookmarkContextProvider({
  children,
}: BookmarkProviderProps) {
  const [bookmarks, setBookmarks] = useState<Bookmarks | null>(null);

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "bookmarks") {
        const updatedBookmarks = loadBookmarksFromLocalStorage();
        if (updatedBookmarks) {
          setBookmarks(updatedBookmarks);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [bookmarks]);

  useEffect(() => {
    const savedBookmarks = loadBookmarksFromLocalStorage();
    if (!savedBookmarks) {
      localStorage.setItem("bookmarks", JSON.stringify(DEFAULT_BOOKMARKS));
    } else {
      setBookmarks(savedBookmarks);
    }
  }, []);

  const addToBookmark = useCallback((dataBookmark: Bookmark) => {
    const savedBookmarks = loadBookmarksFromLocalStorage();
    if (!savedBookmarks) {
      localStorage.setItem("bookmarks", JSON.stringify(DEFAULT_BOOKMARKS));
      throw new Error("bookmarks data not found in local storage");
    }

    if (dataBookmark.type === "single") {
      updateSingleBookmarks(dataBookmark, savedBookmarks);
    } else if (dataBookmark.type === "multiple") {
      updateMultipleBookmarks(dataBookmark, savedBookmarks);
    }

    localStorage.setItem("bookmarks", JSON.stringify(savedBookmarks));
    setBookmarks(savedBookmarks);
  }, []);

  return (
    <BookmarkContext.Provider
      value={{
        addToBookmark,
        bookmarks,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}
