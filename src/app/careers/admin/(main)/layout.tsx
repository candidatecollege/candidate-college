"use client";
import ContentSidebar from "@/components/admin/dashboard/ContentSidebar";
import HeaderSidebar from "@/components/admin/dashboard/HeaderSidebar";
import { Logout } from "@/components/admin/dashboard/svg";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-white box-border w-full min-h-screen flex text-black">
      {/* sidebar */}
      <aside className="w-[266px] p-4 flex flex-col  bg-primary  text-white">
        {/* sidebar bagian top */}
        <div className="h-full">
          {/* logo header sidebar */}
          <HeaderSidebar />

          {/* content sidebar */}
          <ul className="flex flex-col gap-3 w-full mt-6">
            <ContentSidebar />
          </ul>
        </div>

        {/* sidebar bagian bottom */}
        <div className="px-5 border-t h-1/2 items-end flex ">
          <button className="flex justify-center rounded-lg p-2 border w-full gap-2">
            <Logout /> <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* body content */}
      {children}
    </main>
  );
}
