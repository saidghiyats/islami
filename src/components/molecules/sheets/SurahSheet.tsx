import Sheet from "react-modal-sheet";

export default function SurahSheet({ value, toggle }: any) {
  return (
    <Sheet isOpen={value} onClose={toggle} className="max-w-[440px] mx-auto">
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>Hello World</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
}
