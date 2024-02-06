import ContentSidebar from "./ContentSidebar";
import HeaderSidebar from "./HeaderSidebar";
import { Logout } from "./svg";

export default function Sidebar() {
  return (
    <aside className="w-[266px]   hidden fixed inset-y-0 p-4 sm:flex flex-col  bg-primary  text-white">
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
  );
}
