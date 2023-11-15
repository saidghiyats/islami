import { Button } from "@nextui-org/button";
import React from "react";
import Image from "next/image";
import { HiOutlineChevronRight } from "react-icons/hi";
import { Skeleton } from "@nextui-org/skeleton";

export default function ProgresCard() {
  return (
    <div className="bg-primary-500 w-full rounded-xl p-6 md:p-8 flex gap-6 relative overflow-hidden">
      <div className="w-full flex flex-wrap md:flex-nowrap md:space-x-6 space-y-6">
        <div className="flex w-full md:w-4/5 flex-col text-background justify-between space-y-4">
          <p className="font-bold text-xl md:text-2xl">Quran Completion</p>
          <div className="space-y-3">
            {/* <Skeleton className="rounded-lg w-4/5">
              <div className="h-6 w-4/5 bg-default-300 rounded-lg"></div>
            </Skeleton> */}
            <div className="flex justify-between space-x-2 text-sm md:text-base">
              <p>Last Read Al Baqarah 4</p>
              <p>3%</p>
            </div>
            {/* <Skeleton className="rounded-md w-full">
              <div className="h-3 w-full bg-default-300 rounded-md"></div>
            </Skeleton> */}
            <div className="w-full relative h-3 bg-black/10 rounded-full">
              <span className="bg-background inset-y-0 absolute w-[10%] rounded-full"></span>
            </div>
          </div>
        </div>
        <div className="w-fit flex items-end">
          <Button
            radius="sm"
            variant="solid"
            endContent={
              <HiOutlineChevronRight className="w-4 h-4 stroke-primary" />
            }
            className="text-primary-500 bg-background h-unit-8 p-unit-3 md:h-unit-10 md:p-unit-4"
          >
            <span className="font-bold">See History</span>
          </Button>
        </div>
      </div>
      <div className="w-[40%] hidden md:block">
        <div className="w-60 h-60 rounded-full bg-background/10 absolute -right-2 top-16"></div>
      </div>
    </div>
  );
}
