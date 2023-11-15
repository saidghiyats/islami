"use client";
import { sectionTitle } from "@/components/atoms/sectionTitle";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { useBoolean } from "usehooks-ts";
import BookmarkCreate from "../BookmarkCreate";
import BookmarkFolder from "../BookmarkFolder";
import { useMemo, useState } from "react";
import BookmarkConfirm from "./BookmarkConfirm";

interface BookmarkModalProps {
  bookmarkTitle: string;
  isOpen: boolean;
  onOpenChange: () => void;
  numberInQuran: number;
  numberInSurah: number;
  numberSurah: number;
  nameTransliteration: string;
}

export default function BookmarkModal({
  bookmarkTitle,
  isOpen,
  onOpenChange,
  numberInQuran,
  numberInSurah,
  numberSurah,
  nameTransliteration,
}: BookmarkModalProps) {
  const { value, toggle, setFalse } = useBoolean();
  const {
    isOpen: isOpenConfirm,
    onOpen: onOpenConfirm,
    onClose: onCloseConfirm,
    onOpenChange: onOpenChangeConfirm,
  } = useDisclosure();
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("single");

  const validationBookmark = useMemo(() => {
    if (
      name === "" &&
      type &&
      numberInQuran &&
      numberInSurah &&
      numberSurah &&
      nameTransliteration
    )
      return true;
    else return false;
  }, [
    name,
    nameTransliteration,
    numberInQuran,
    numberInSurah,
    numberSurah,
    type,
  ]);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="md"
      placement="center"
      isDismissable={false}
      classNames={{ base: "max-h-80" }}
      backdrop="blur"
      scrollBehavior="inside"
      hideCloseButton
      isKeyboardDismissDisabled={true}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>{sectionTitle(bookmarkTitle)}</ModalHeader>
            <ModalBody>
              {!value ? (
                <BookmarkFolder
                  name={name}
                  setName={setName}
                  type={type}
                  setType={setType}
                />
              ) : (
                <BookmarkCreate
                  name={name}
                  setName={setName}
                  type={type}
                  setType={setType}
                />
              )}
            </ModalBody>
            <ModalFooter className="flex justify-between">
              <Button
                size="sm"
                className="bg-accent text-primary-0 font-medium"
                onPress={() => {
                  toggle(), setName(""), setType("single");
                }}
              >
                {!value ? "Create new" : "Back"}
              </Button>
              <div className="space-x-2">
                <Button
                  size="sm"
                  className="hover:bg-error-500 hover:text-primary-0 text-accent font-medium"
                  onPress={() => {
                    setFalse();
                    onClose();
                    setName("");
                    setType("single");
                  }}
                >
                  Close
                </Button>
                <Button
                  size="sm"
                  className="bg-primary-500 text-primary-0 font-medium"
                  isDisabled={validationBookmark}
                  onPress={onOpenConfirm}
                >
                  Submit
                </Button>
              </div>
            </ModalFooter>
            <BookmarkConfirm
              isOpenConfirm={isOpenConfirm}
              onClose={onClose}
              onCloseConfirm={onCloseConfirm}
              onOpenChangeConfirm={onOpenChangeConfirm}
              name={name}
              setName={setName}
              type={type}
              setType={setType}
              numberInQuran={numberInQuran}
              numberInSurah={numberInSurah}
              numberSurah={numberSurah}
              nameTransliteration={nameTransliteration}
              setFalse={setFalse}
              validationBookmark={validationBookmark}
            />
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
