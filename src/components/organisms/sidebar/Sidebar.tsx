import React from "react";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <aside className="w-[400px] hidden lg:block">
      <div className="sticky top-24 flex flex-col gap-6">{children}</div>
    </aside>
  );
}
