import { IoIosArrowForward } from "react-icons/io";
import InputFormTemplate from "./InputFormTemplate";
import GalleryAdd from "./svg/GalleryAdd";
import { FormEvent, useEffect, useRef, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from "axios";

export type member = {
  firstName: string;
  lastName: string;
  division_id: string;
  position: string;
  instagram: string;
  linkedin: string;
  image: File;
};

const defaultValue = {
  firstName: "",
  lastName: "",
  division_id: "1",
  position: "Head",
  instagram: "",
  linkedin: "",
  image: "" as unknown as File,
};

export function FormTemp() {
  const formState = useState<member>(defaultValue);
  const imgRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmitFormMember = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    const state = formState[0];
    const fullName = state.firstName + " " + state.lastName;
    console.log(state);
    formData.append("name", fullName);
    formData.append("division_id", state.division_id);
    formData.append("position", state.position);
    formData.append("instagram", state.instagram);
    formData.append("linkedin", state.linkedin);
    formData.append("image", state.image);

    try {
      const resp = await axios.post("/api/members", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      });
      // const resp = await axios.delete("/api/members/34");
      console.log("WOII baru", resp);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("WOOW");
      const current = imgRef.current;

      if (current) {
        current.style.backgroundImage = ``;
      }
      formState[1]((prev) => {
        return {
          ...prev,
          firstName: "",
          lastName: "",
          instagram: "",
          linkedin: "",
          image: "" as unknown as File,
        };
      });

      setIsLoading(false);
    }
  };

  const handleImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const current = imgRef.current;
    console.log("hai", current);
    if (current) {
      if (!e.target.files) return;
      const file = e.target.files[0];
      formState[1]((prev) => {
        return { ...prev, image: file };
      });
      // Memastikan file yang dipilih adalah gambar
      if (file && file.type.startsWith("image")) {
        // Membuat objek URL untuk file gambar
        const imageUrl = URL.createObjectURL(file);
        const imageElement = new Image();
        imageElement.src = imageUrl;
        current.style.backgroundImage = `url(${imageUrl})`;
        current.style.backgroundSize = "cover";
        current.style.backgroundPosition = "center";
        current.style.backgroundRepeat = "no-repeat";
        // Menunggu gambar selesai dimuat
        imageElement.onload = () => {
          // Mengganti isi elemen div dengan gambar yang diunggah

          URL.revokeObjectURL(imageUrl); // Panggil revoke setelah penghapusan
        };
      } else {
        // Jika file bukan gambar, memberi pesan kesalahan
        current.innerHTML = "<p>File yang diunggah bukan gambar.</p>";
      }
    }
  };
  return (
    <>
      {/* Mobile */}
      <div className="sm:hidden block">
        <form onSubmit={handleSubmitFormMember}>
          {/* Loading */}
          {isLoading && (
            <div className="fixed z-50  backdrop-blur-sm flex justify-center items-center  inset-0">
              <AiOutlineLoading3Quarters className="animate-spin text-[42px] text-black" />
            </div>
          )}
          <div
            ref={imgRef}
            className="w-[80%] h-[276px] mx-auto   flex items-center justify-center rounded-lg text-black bg-white"
          >
            <label htmlFor="photo" className="cursor-pointer">
              <GalleryAdd />
            </label>
            <input
              accept="image/*"
              onChange={handleImageInput}
              id="photo"
              type="file"
              hidden
            />
          </div>
          <div className="flex-1 mt-4 grid gap-3 grid-cols-1">
            <InputFormTemplate state={formState} />
          </div>
          <button className="bg-secondary text-[14px]   mt-12 flex items-center gap-2 justify-center uppercase py-3 rounded-3xl w-full xsm:w-[222px]  text-primary  font-semibold">
            Submit Data <IoIosArrowForward className="text-[18px]" />
          </button>
        </form>
      </div>

      {/* Desktop */}
      <div className="hidden sm:block">
        <form onSubmit={handleSubmitFormMember}>
          {/* Loading */}
          {isLoading && (
            <div className="fixed z-50  backdrop-blur-sm flex justify-center items-center  inset-0">
              <AiOutlineLoading3Quarters className="animate-spin text-[42px] text-black" />
            </div>
          )}
          <table className="h-full w-full">
            <tbody>
              <tr>
                <td className="w-[232px]">
                  <div
                    ref={imgRef}
                    className="w-full h-full flex items-center justify-center rounded-lg text-black bg-white"
                  >
                    <label htmlFor="photoMembers" className="cursor-pointer">
                      <GalleryAdd />
                    </label>
                    <input
                      id="photoMembers"
                      accept="image/*"
                      hidden
                      onChange={handleImageInput}
                      type="file"
                    />
                  </div>
                </td>
                <td className="pl-5 ">
                  <div className="flex-1 grid gap-6 grid-cols-1 sm:grid-cols-2">
                    <InputFormTemplate state={formState} />
                  </div>
                </td>
              </tr>

              <tr>
                <td></td>
                <td className="pl-5">
                  <button
                    disabled={isLoading}
                    className="bg-secondary   mt-12 flex items-center gap-2 justify-center uppercase py-3 rounded-3xl w-[288px]  text-primary text-[14px] font-semibold"
                  >
                    {isLoading ? (
                      "Loading..."
                    ) : (
                      <>
                        Submit Data
                        <IoIosArrowForward className="text-[18px]" />
                      </>
                    )}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
}
