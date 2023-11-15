import { Input } from "@nextui-org/input";
import React, { Dispatch, SetStateAction } from "react";
import { Checkbox } from "@nextui-org/checkbox";

type Props = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  type: string;
  setType: Dispatch<SetStateAction<string>>;
};

export default function BookmarkCreate({
  name,
  setName,
  type,
  setType,
}: Props) {
  return (
    <div className="space-y-6">
      <div className="grid w-full grid-cols-2 px-2">
        <Checkbox
          size="sm"
          color="primary"
          value={"single"}
          isSelected={type.includes("single")}
          onClick={() => setType("single")}
          classNames={{
            base: `max-w-full text-background rounded-lg ${
              type === "single" ? "bg-accent" : "bg-secondary-100"
            }`,
            label: `font-semibold ${
              type === "single" ? "text-primary-0" : "text-secondary-500"
            }`,
            wrapper: "hidden",
          }}
        >
          Single
        </Checkbox>
        <Checkbox
          size="sm"
          color="primary"
          value={"multiple"}
          isSelected={type.includes("multiple")}
          onClick={() => setType("multiple")}
          classNames={{
            base: `max-w-full text-background rounded-lg ml-2 ${
              type === "multiple" ? "bg-accent" : "bg-secondary-100"
            }`,
            label: `font-semibold ${
              type === "multiple" ? "text-primary-0" : "text-secondary-500"
            }`,
            wrapper: "hidden",
          }}
        >
          Multiple
        </Checkbox>
      </div>
      <Input
        radius="sm"
        value={name}
        onValueChange={setName}
        isClearable
        type="text"
        label="Name Bookmark"
        variant="bordered"
        placeholder="Enter name bookmark"
        fullWidth
        errorMessage={name === "" && "Masukkan nama bookmark"}
        classNames={{
          inputWrapper: `${
            name === ""
              ? "border-error-500 data-[hover=true]:border-error-500/50 group-data-[focus=true]:border-error-500"
              : "border-accent data-[hover=true]:border-accent/50 group-data-[focus=true]:border-accent"
          }`,
          label: `${
            name === "" ? "text-error-500" : "text-accent"
          } font-semibold`,
          input: "font-medium",
          errorMessage: "font-medium text-error-500",
          clearButton: "text-accent",
        }}
      />
    </div>
  );
}
