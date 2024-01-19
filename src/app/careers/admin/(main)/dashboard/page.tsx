"use client";

import Image from "next/image";
import { Notification, Search } from "@/components/admin/dashboard/svg";

export default function DashboardPage() {
  return (
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
              <Search />
            </button>
            <button className="rounded-full border border-gray p-4">
              <Notification />
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
  );
}
