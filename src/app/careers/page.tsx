"use client";
import { Navbar } from "@/components";
import Link from "next/link";
import SearchIcon from "@/components/icons/SearchIcon";

const Careers = () => {
  return (
    <main className="bg-white h-full">
      <Navbar />

      {/* Hero */}
      <section className="flex flex-col pt-36 w-full py-12 bg-primary justify-center items-center relative h-fit md:h-screen overflow-hidden">
        <h1 className="mx-7 font-semibold text-white text-[36px] md:text-[60px] md:w-[90%] text-center md:leading-[100%] leading-[150%]">
          Explore your dream job destination!
        </h1>

        <form action="" className="mt-[42px] flex space-x-6">
          <div className="flex flex-col md:flex-row w-full mx-7 items-center">
            <div className="relative w-full">
              <div className="absolute inset-y-0 bottom-2 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.7309 18.3125L16.0209 14.6325C17.461 12.837 18.1584 10.5578 17.9697 8.26385C17.781 5.96985 16.7206 3.83533 15.0064 2.29919C13.2923 0.763054 11.0547 -0.0579415 8.75382 0.00501891C6.45294 0.0679793 4.26362 1.01011 2.63604 2.63769C1.00846 4.26527 0.0663314 6.45459 0.00337096 8.75547C-0.0595894 11.0564 0.761407 13.2939 2.29754 15.0081C3.83368 16.7222 5.9682 17.7827 8.2622 17.9714C10.5562 18.1601 12.8353 17.4626 14.6309 16.0225L18.3109 19.7025C18.4039 19.7963 18.5145 19.8707 18.6363 19.9214C18.7582 19.9722 18.8889 19.9983 19.0209 19.9983C19.1529 19.9983 19.2836 19.9722 19.4055 19.9214C19.5273 19.8707 19.6379 19.7963 19.7309 19.7025C19.9111 19.5161 20.0119 19.2669 20.0119 19.0075C20.0119 18.7482 19.9111 18.499 19.7309 18.3125ZM9.0209 16.0225C7.63643 16.0225 6.28305 15.612 5.13191 14.8428C3.98076 14.0737 3.08356 12.9804 2.55374 11.7013C2.02393 10.4223 1.88531 9.01478 2.1554 7.65692C2.4255 6.29905 3.09219 5.05177 4.07115 4.0728C5.05012 3.09383 6.2974 2.42715 7.65527 2.15705C9.01314 1.88695 10.4206 2.02558 11.6997 2.55539C12.9788 3.08521 14.072 3.98241 14.8412 5.13356C15.6104 6.2847 16.0209 7.63808 16.0209 9.02255C16.0209 10.8791 15.2834 12.6595 13.9706 13.9723C12.6579 15.2851 10.8774 16.0225 9.0209 16.0225Z"
                    fill="#6B7280"
                  />
                </svg>
              </div>
              <input
                className="w-full mb-2 md:w-[425px] h-[52px] md:mr-6 rounded-[50px] pl-[40px] py-1"
                type="text"
                placeholder="Masukkan kata kunci"
              />
            </div>

            <div className="flex w-full gap-2 mb-2">
              <div className="relative w-full">
                <select
                  className="w-full md:w-[216px] h-[52px] rounded-[50px] px-6 py-1 appearance-none border"
                  name=""
                  id=""
                >
                  <option value="">Department</option>
                </select>
                <div className="absolute inset-y-0 top-1 right-2 md:right-5 flex items-center pointer-events-none">
                  <svg
                    width="13"
                    height="8"
                    viewBox="0 0 13 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0685 0.628083C11.9044 0.464046 11.6819 0.371895 11.4499 0.371895C11.2179 0.371895 10.9954 0.464046 10.8313 0.628083L6.50002 4.95933L2.16877 0.628082C2.00374 0.468694 1.78271 0.380499 1.55329 0.382493C1.32387 0.384486 1.10441 0.476509 0.942176 0.638741C0.779944 0.800973 0.687923 1.02043 0.685929 1.24986C0.683936 1.47928 0.77213 1.7003 0.931519 1.86533L5.88139 6.81521C6.04548 6.97924 6.268 7.0714 6.50002 7.0714C6.73204 7.0714 6.95456 6.97924 7.11864 6.81521L12.0685 1.86533C12.2326 1.70125 12.3247 1.47873 12.3247 1.24671C12.3247 1.01469 12.2326 0.79217 12.0685 0.628083Z"
                      fill="#90A3BF"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative w-full">
                <select
                  className="w-full md:w-[153px] h-[52px] rounded-[50px] px-6 py-1"
                  name=""
                  id=""
                >
                  <option value="">Divisi</option>
                </select>
              </div>
            </div>
            <button
              className="bg-secondary w-full lg:w-[92px] h-[52px] rounded-[50px] px-5"
              type="submit"
            >
              Cari
            </button>
          </div>
        </form>
      </section>

      {/* Akhir Hero Section */}

      {/* Open Position Section */}
      {/* <section className="flex flex-col justify-center items-center relative mt-[96px] bottom-[220px]">
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
      </section> */}
      {/* AKhir Open Position Section */}
    </main>
  );
};

export default Careers;
