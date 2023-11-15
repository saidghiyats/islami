import { Card } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";

export default function ChapterCardSkeleton() {
  return (
    <Card
      className="p-5 flex flex-row space-x-5 flex-wrap items-center"
      radius="lg"
      shadow="none"
    >
      <Skeleton className="rounded-md w-8 h-8 rotate-45">
        <div className="h-8 w-8 rounded-md bg-default-300 rotate-45"></div>
      </Skeleton>
      <div className="w-[calc(100%_-_52px)] flex flex-wrap space-x-5 items-center">
        <div className="space-y-2 w-[calc(100%_-_76px)]">
          <Skeleton className="w-3/5 rounded-md">
            <div className="h-4 w-3/5 rounded-md bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-full rounded-lg">
            <div className="h-4 w-full rounded-lg bg-default-200"></div>
          </Skeleton>
        </div>
        <div className="space-y-1">
          <Skeleton className="w-14 rounded-md">
            <div className="h-5 w-14 rounded-md bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-14 rounded-md">
            <div className="h-4 w-14 rounded-md bg-default-200"></div>
          </Skeleton>
        </div>
      </div>
    </Card>
  );
}
