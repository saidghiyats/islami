import React, { useContext } from "react";
import { Bookmark, SingleBookmark } from "@/types/Bookmark";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import { BookmarkContext } from "@/contexts/BookmarksContext";

interface BookmarkConfirmProps {
  isOpenConfirm: boolean;
  onClose: () => void;
  onCloseConfirm: () => void;
  onOpenChangeConfirm: () => void;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
  numberInQuran: number;
  numberInSurah: number;
  numberSurah: number;
  nameTransliteration: string;
  setFalse: () => void;
  validationBookmark: boolean;
}

export default function BookmarkConfirm({
  isOpenConfirm,
  onClose,
  onCloseConfirm,
  onOpenChangeConfirm,
  name,
  setName,
  type,
  setType,
  numberInQuran,
  numberInSurah,
  numberSurah,
  nameTransliteration,
  setFalse,
  validationBookmark,
}: BookmarkConfirmProps) {
  const { bookmarks, addToBookmark } = useContext(BookmarkContext);

  function confirmBookmark() {
    const sameNameDifferentId = bookmarks?.single.some(
      (s: SingleBookmark) =>
        s.name === name && String(s.numberInQuran) !== String(numberInQuran)
    );

    if (sameNameDifferentId && type === "single") {
      return (
        <p>
          Ingin mengganti Surah{" "}
          {bookmarks?.single
            .filter((item: SingleBookmark) => item.name === name)
            .map((item: SingleBookmark) => item.nameTransliteration)}{" "}
          Ayat{" "}
          {bookmarks?.single
            .filter((item: SingleBookmark) => item.name === name)
            .map((item: SingleBookmark) => item.numberInSurah)}{" "}
          dengan Surah {nameTransliteration} Ayat {numberInSurah}
        </p>
      );
    } else {
      return (
        <p>
          Ingin menambahkan Surah {nameTransliteration} Ayat {numberInSurah} ke
          dalam folder {name}
        </p>
      );
    }
  }

  const bookmarkData: Bookmark = {
    name: name,
    type: type,
    numberInQuran: numberInQuran,
    numberInSurah: numberInSurah,
    numberSurah: numberSurah,
    nameTransliteration: nameTransliteration,
  };

  return (
    <Modal
      backdrop="opaque"
      size="sm"
      radius="sm"
      placement="center"
      isOpen={isOpenConfirm}
      onClose={onCloseConfirm}
      onOpenChange={onOpenChangeConfirm}
      hideCloseButton
      isDismissable={false}
      classNames={{
        base: "bg-background border border-border",
      }}
    >
      <ModalContent>
        <ModalHeader>
          <p className="text-accent font-bold">Confirmation</p>
        </ModalHeader>
        <ModalBody className="font-medium">{confirmBookmark()}</ModalBody>
        <ModalFooter>
          <Button
            size="sm"
            className="hover:bg-error-500 hover:text-primary-0 text-accent font-medium"
            onPress={() => {
              onCloseConfirm();
            }}
          >
            Cancel
          </Button>
          <Button
            className="bg-primary-500 text-primary-0 font-medium"
            size="sm"
            variant="shadow"
            isDisabled={validationBookmark}
            onPress={() => {
              addToBookmark(bookmarkData);
              setFalse();
              setName("");
              setType("single");
              onCloseConfirm();
              onClose();
            }}
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
