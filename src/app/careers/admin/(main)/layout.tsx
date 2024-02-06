"use client";

import Sidebar from "@/components/admin/dashboard/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="bg-white box-border   w-full min-h-screen   text-black">
        {/* sidebar */}
        <Sidebar />
        {/* body content */}
        {children}
      </main>
    </>
  );
}
