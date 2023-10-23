"use client";
import { Navbar } from "@/components";
import Link from "next/link";

const Careers = () => {
  return (
    <main className="bg-white h-full">
      <Navbar />

      {/* Hero */}
      <section className="flex flex-col pt-36 w-full py-12 bg-primary justify-center items-center relative h-fit md:h-screen">
        <h1 className="font-semibold text-white text-3xl md:text-[60px] md:w-[90%] text-center md:leading-[100%] leading-[150%]">
          Explore your dream job destination!
        </h1>

        <form action="" className="mt-[42px] flex space-x-6">
          <input
            className="w-[425px] h-[52px] rounded-[50px] pl-6 py-1 pr-[200px]"
            type="text"
            placeholder="Masukkan kata kunci"
          />
          <select
            className="w-[216px] h-[52px] rounded-[50px] px-6 py-1"
            name=""
            id=""
          >
            <option value="">Department</option>
          </select>
          <select
            className="w-[153px] h-[52px] rounded-[50px] px-6 py-1"
            name=""
            id=""
          >
            <option value="">Divisi</option>
          </select>
          <button
            className="bg-secondary w-[92px] h-[52px] rounded-[50px] px-5"
            type="submit"
          >
            Cari
          </button>
        </form>
      </section>
      {/* Akhir Hero Section */}

      {/* Open Position Section */}
      <section className="flex flex-col justify-center items-center relative mt-[96px] bottom-[220px]">
        <h2 className="relative right-[240px] text-[32px] leading-10 text-[#90A3BF]">
          All Open Positions
        </h2>

        <div className="mt-6 w-[972px] h-full rounded-[50px] pt-[42px] pb-8 bg-white">
          <div className="ml-[74px] mb-7">
            <h3 className="text-[22px] text-primary font-bold leading-[28px] mb-4">
              Front-end Developer
            </h3>
            <div className="flex gap-4">
              <p>
                <i className="fi fi-rr-briefcase"></i>Department
              </p>
              <p>Web Development</p>
              <p className="bg-secondary px-2 py-1 text-primary rounded-2xl">
                Internship
              </p>
            </div>
          </div>
          <div className="ml-[74px] mb-7">
            <h3 className="text-[22px] text-primary font-bold leading-[28px] mb-4">
              Back-end Developer
            </h3>
            <div className="flex gap-4">
              <p>
                <i className="fi fi-rr-briefcase"></i>Department
              </p>
              <p>Web Development</p>
              <p className="bg-secondary px-2 py-1 text-primary rounded-2xl">
                Internship
              </p>
            </div>
          </div>
          <div className="ml-[74px] mb-7">
            <h3 className="text-[22px] text-primary font-bold leading-[28px] mb-4">
              QA Analyst (WFH)
            </h3>
            <div className="flex gap-4">
              <p>
                <i className="fi fi-rr-briefcase"></i>Department
              </p>
              <p>Web Development</p>
              <p className="bg-secondary px-2 py-1 text-primary rounded-2xl">
                Internship
              </p>
            </div>
          </div>
          <div className="ml-[74px] mb-7">
            <h3 className="text-[22px] text-primary font-bold leading-[28px] mb-4">
              UI/UX Designer
            </h3>
            <div className="flex gap-4">
              <p>
                <i className="fi fi-rr-briefcase"></i>Department
              </p>
              <p>Web Development</p>
              <p className="bg-secondary px-2 py-1 text-primary rounded-2xl">
                Internship
              </p>
            </div>
          </div>

          <h4 className="text-primary font-bold text-center text-[22px] leading-[28px] mb-12 mt-6">
            <a href="">View more jobs</a>
          </h4>
        </div>
      </section>
      {/* AKhir Open Position Section */}
    </main>
  );
};

export default Careers;
