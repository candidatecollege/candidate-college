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
      regex:
        /^\/careers\/admin\/(dashboard\/profile\/?$|dashboard\/?$|candidates\/(?!profile\/?$))/i,
      icon: (
        <FolderSvg
          stroke={`${
            pathname.match(
              /^\/careers\/admin\/(dashboard\/profile\/?$|dashboard\/?$|candidates\/(?!profile\/?$))/i
            )
              ? "#1B4E6B"
              : "white"
          }`}
        />
      ),
      title: "Candidates",
    },
    {
      path: "/careers/admin/candidates/profile",
      regex: /^\/careers\/admin\/candidates\/profile\/?/i,
      icon: (
        <ProfileSvg
          stroke={`${
            pathname.match(/^\/careers\/admin\/candidates\/profile\/?/i)
              ? "#1B4E6B"
              : "white"
          }`}
        />
      ),
      title: "Profile",
    },
    {
      path: "/careers/admin/status",
      regex: /^\/careers\/admin\/status\/?$/i,
      icon: (
        <ClipboardSvg
          stroke={`${
            pathname.match(/^\/careers\/admin\/status\/?$/i)
              ? "#1B4E6B"
              : "white"
          }`}
        />
      ),
      title: "Status",
    },
  ];

  return urlPath.map(({ path, icon, title, regex }, index) => {
    return (
      <Link
        key={index}
        href={path}
        className={`flex items-center gap-4 cursor-pointer ${
          pathname.match(regex) ? "bg-secondary" : ""
        } px-4 py-3 rounded-3xl`}
      >
        {icon}
        <h2
          className={`text-[14px]  ${
            pathname.match(regex) ? "text-primary" : "text-white"
          } leading-[20px]`}
        >
          {title}
        </h2>
      </Link>
    );
  });
}
