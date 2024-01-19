import Link from "next/link";
import FolderSvg from "./svg/FolderSvg";
import { usePathname } from "next/navigation";
import ProfileSvg from "./svg/ProfileSvg";
import ClipboardSvg from "./svg/ClipboardSvg";
export default function ContentSidebar() {
  const pathname = usePathname();
  const urlPath = [
    {
      path: "/careers/admin/dashboard",
      icon: (
        <FolderSvg
          stroke={`${
            pathname === "/careers/admin/dashboard" ? "#1B4E6B" : "white"
          }`}
        />
      ),
      title: "Candidate",
    },
    {
      path: "/careers/admin/dashboard/profile",
      icon: (
        <ProfileSvg
          stroke={`${
            pathname === "/careers/admin/dashboard/profile"
              ? "#1B4E6B"
              : "white"
          }`}
        />
      ),
      title: "Profile",
    },
    {
      path: "/careers/admin/dashboard/le",
      icon: (
        <ClipboardSvg
          stroke={`${
            pathname === "/careers/admin/dashboard/le" ? "#1B4E6B" : "white"
          }`}
        />
      ),
      title: "Status",
    },
  ];

  return urlPath.map(({ path, icon, title }, index) => {
    return (
      <Link
        key={index}
        href={path}
        className={`flex items-center gap-4 cursor-pointer ${
          path === pathname ? "bg-secondary" : ""
        } px-4 py-3 rounded-3xl`}
      >
        {icon}
        <h2
          className={`text-[14px]  ${
            path === pathname ? "text-primary" : "text-white"
          } leading-[20px]`}
        >
          {title}
        </h2>
      </Link>
    );
  });
}
