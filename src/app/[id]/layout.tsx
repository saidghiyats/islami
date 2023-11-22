import NavCard from "@/components/molecules/cards/NavCard";
import TOCMenuCard from "@/components/molecules/cards/TOCMenuCard";
import Sidebar from "@/components/organisms/sidebar/Sidebar";
import { Suspense } from "react";

export default function DetailLayout({
  children,
  params: { id },
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return (
    <>
      {children}
      <Sidebar>
        <Suspense fallback={<p>Loading...</p>}>
          <NavCard id={id} />
        </Suspense>
        {/* <TOCMenuCard /> */}
      </Sidebar>
    </>
  );
}
