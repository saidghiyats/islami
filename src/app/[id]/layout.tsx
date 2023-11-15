import SettingCard from "@/components/molecules/cards/NavCard";
import TOCMenuCard from "@/components/molecules/cards/TOCMenuCard";
import Sidebar from "@/components/organisms/sidebar/Sidebar";

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
        <SettingCard id={id} />
        {/* <TOCMenuCard /> */}
      </Sidebar>
    </>
  );
}
