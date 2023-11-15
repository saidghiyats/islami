"use client";
import { sectionTitle } from "@/components/atoms/sectionTitle";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import React from "react";
import { PiCirclesThreePlusBold } from "react-icons/pi";

export default function TOCMenuCard() {
  return (
    <Card
      classNames={{
        base: "max-h-96",
        header: "px-5",
        body: "pt-0",
        footer: "px-5",
      }}
      radius="lg"
      shadow="none"
    >
      <CardHeader className="flex justify-between">
        {sectionTitle("In this page")}
        <PiCirclesThreePlusBold className="h-5 w-5 text-default-700" />
      </CardHeader>
      <CardBody className="overflow-hidden pb-5"></CardBody>
    </Card>
  );
}
