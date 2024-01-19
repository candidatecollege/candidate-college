import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ weight: "600", subsets: ["devanagari"] });

export default function Profile() {
  return (
    <div className="flex pl-10  items-center gap-4">
      <div className="text-[14px] font-semibold leading-[16px]">
        <h3 className="text-end text-primary font-semibold">Sabina</h3>
        <span className={`text-[#1b4e6b8a] ${poppins.className}`}>
          Human Resources
        </span>
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
  );
}
