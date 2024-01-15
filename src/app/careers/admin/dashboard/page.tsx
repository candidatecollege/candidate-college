"use client";

import Image from "next/image";
import HeaderSidebar from "@/components/admin/dashboard/HeaderSidebar";
import ContentSidebar from "@/components/admin/dashboard/ContentSidebar";
import SearchSvg from "@/components/admin/dashboard/svg/SearchSvg";
import NotificationSvg from "@/components/admin/dashboard/svg/NotificationSvg";

export default function DashboardPage() {
  return (
    <main className="bg-white box-border w-full flex text-black h-full min-h-screen overflow-hidden">
      {/* sidebar */}
      <aside className="w-[266px] p-4 bg-primary text-white">
        {/* logo header sidebar */}
        <HeaderSidebar />

        {/* content sidebar */}
        <ul className="flex flex-col gap-3 w-full mt-6">
          <ContentSidebar />
        </ul>
      </aside>

      {/* body content */}
      <section className="p-6 py-4  w-full">
        <div className="flex items-center justify-between">
          <div className="py-4">
            <h1 className="text-[57px] leading-[58px]">Candidate</h1>
            <span className="text-[16px] text-gray">
              Reporting of your candidate
            </span>
          </div>
          <div className="flex">
            <div className="border-r  flex gap-4 px-8 border-r-primary">
              <button className="rounded-full border border-gray p-4">
                <SearchSvg />
              </button>
              <button className="rounded-full border border-gray p-4">
                <NotificationSvg />
              </button>
            </div>
            <div className="flex pl-14 items-center gap-4">
              <div className="text-[14px] leading-[16px]">
                <h3 className="text-end text-primary font-semibold">Sabina</h3>
                <span className="text-gray">Human Resources</span>
              </div>
              <div className="w-[55px] h-[55px]  !box-border p-2 border-gray rounded-full border">
                <Image
                  alt="Foto profile"
                  className="w-full h-full"
                  src={"/logo/logo-cc.png"}
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
