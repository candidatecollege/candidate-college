"use client";
import { Navbar, Footer } from "@/components";
import Link from "next/link";
import SearchIcon from "@/components/icons/SearchIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../../styles/swiper-careers.css";

const Careers = () => {
  const careers = [
    { id: 1, url: "/decoration/life-at-cc (1).jpg" },
    { id: 2, url: "/decoration/life-at-cc (2).jpg" },
    { id: 3, url: "/decoration/life-at-cc (3).jpg" },
    { id: 4, url: "/decoration/life-at-cc (4).jpg" },
    { id: 5, url: "/decoration/life-at-cc (5).jpg" },
    { id: 6, url: "/decoration/life-at-cc (6).jpg" },
    { id: 7, url: "/decoration/life-at-cc (7).jpg" },
  ];

  return (
    <main className="bg-white w-full h-full overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="flex flex-col pt-36 w-full pb-[120px] lg:py-12 bg-primary justify-center items-center relative h-fit md:h-screen overflow-hidden">
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
                  className="w-full md:w-[153px] h-[52px] rounded-[50px] px-6 py-1 appearance-none border"
                  name=""
                  id=""
                >
                  <option value="">Divisi</option>
                </select>
                <div className="absolute inset-y-0 top-1 right-5 md:right-7 flex items-center pointer-events-none">
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
      <section className="w-full mb-[72px] flex flex-col justify-center items-center relative bottom-[72px] lg:mt-[96px] lg:bottom-[220px]">
        <h2 className="relative right-[80px] lg:right-[240px] lg:text-[32px] lg:leading-10 text-[#90A3BF]">
          All Open Positions
        </h2>

        <div className="mt-6 w-full  md:w-[972px] h-full rounded-[50px] pt-[42px] pb-8 bg-white">
          <div className="flex items-center">
            <div className="ml-6 lg:ml-[74px] mb-7 w-full lg:w-[80%]">
              <h3 className="text-[16px] lg:text-[22px] text-primary font-bold lg:leading-[28px] mb-4">
                Front-end Developer
              </h3>
              <div className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="uil:bag">
                    <path
                      id="Vector"
                      d="M19 6H16V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V6H5C4.20435 6 3.44129 6.31607 2.87868 6.87868C2.31607 7.44129 2 8.20435 2 9V18C2 18.7956 2.31607 19.5587 2.87868 20.1213C3.44129 20.6839 4.20435 21 5 21H19C19.7956 21 20.5587 20.6839 21.1213 20.1213C21.6839 19.5587 22 18.7956 22 18V9C22 8.20435 21.6839 7.44129 21.1213 6.87868C20.5587 6.31607 19.7956 6 19 6ZM10 5H14V6H10V5ZM20 18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H5C4.73478 19 4.48043 18.8946 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18V12.39L8.68 14C8.78618 14.0144 8.89382 14.0144 9 14H15C15.1084 13.998 15.2161 13.9812 15.32 13.95L20 12.39V18ZM20 10.28L14.84 12H9.16L4 10.28V9C4 8.73478 4.10536 8.48043 4.29289 8.29289C4.48043 8.10536 4.73478 8 5 8H19C19.2652 8 19.5196 8.10536 19.7071 8.29289C19.8946 8.48043 20 8.73478 20 9V10.28Z"
                      fill="#1B4E6B"
                    />
                  </g>
                </svg>

                <p className="text-[12px] text-black ml-2 mr-4">Department</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="carbon:dot-mark">
                    <path
                      id="Vector"
                      d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
                      fill="#1B4E6B"
                    />
                  </g>
                </svg>

                <p className="text-[12px] text-black ml-2 mr-4">
                  Web Development
                </p>
                <p className="bg-secondary px-2 py-1 text-primary rounded-2xl text-[12px]">
                  Internship
                </p>
              </div>
            </div>

            <div className="hidden lg:block lg:relative lg:bottom-[30px]">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="ep:arrow-up-bold">
                  <path
                    id="Vector"
                    d="M5.79295 1.63269C5.60548 1.82022 5.50017 2.07453 5.50017 2.33969C5.50017 2.60486 5.60548 2.85916 5.79295 3.04669L10.743 7.99669L5.79295 12.9467C5.61079 13.1353 5.51 13.3879 5.51228 13.6501C5.51456 13.9123 5.61973 14.1631 5.80513 14.3485C5.99054 14.5339 6.24135 14.6391 6.50355 14.6414C6.76575 14.6436 7.01835 14.5429 7.20695 14.3607L12.864 8.70369C13.0514 8.51617 13.1567 8.26186 13.1567 7.99669C13.1567 7.73153 13.0514 7.47722 12.864 7.28969L7.20695 1.63269C7.01942 1.44522 6.76512 1.3399 6.49995 1.3399C6.23479 1.3399 5.98048 1.44522 5.79295 1.63269Z"
                    fill="#1B4E6B"
                  />
                </g>
              </svg>
            </div>
          </div>

          <div className="flex items-center">
            <div className="ml-6 lg:ml-[74px] mb-7 w-full lg:w-[80%]">
              <h3 className="text-[16px] lg:text-[22px] text-primary font-bold lg:leading-[28px] mb-4">
                Back-end Developer
              </h3>
              <div className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="uil:bag">
                    <path
                      id="Vector"
                      d="M19 6H16V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V6H5C4.20435 6 3.44129 6.31607 2.87868 6.87868C2.31607 7.44129 2 8.20435 2 9V18C2 18.7956 2.31607 19.5587 2.87868 20.1213C3.44129 20.6839 4.20435 21 5 21H19C19.7956 21 20.5587 20.6839 21.1213 20.1213C21.6839 19.5587 22 18.7956 22 18V9C22 8.20435 21.6839 7.44129 21.1213 6.87868C20.5587 6.31607 19.7956 6 19 6ZM10 5H14V6H10V5ZM20 18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H5C4.73478 19 4.48043 18.8946 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18V12.39L8.68 14C8.78618 14.0144 8.89382 14.0144 9 14H15C15.1084 13.998 15.2161 13.9812 15.32 13.95L20 12.39V18ZM20 10.28L14.84 12H9.16L4 10.28V9C4 8.73478 4.10536 8.48043 4.29289 8.29289C4.48043 8.10536 4.73478 8 5 8H19C19.2652 8 19.5196 8.10536 19.7071 8.29289C19.8946 8.48043 20 8.73478 20 9V10.28Z"
                      fill="#1B4E6B"
                    />
                  </g>
                </svg>

                <p className="text-[12px] text-black ml-2 mr-4">Department</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="carbon:dot-mark">
                    <path
                      id="Vector"
                      d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
                      fill="#1B4E6B"
                    />
                  </g>
                </svg>

                <p className="text-[12px] text-black ml-2 mr-4">
                  Web Development
                </p>
                <p className="bg-secondary px-2 py-1 text-primary rounded-2xl text-[12px]">
                  Internship
                </p>
              </div>
            </div>

            <div className="hidden lg:block lg:relative lg:bottom-[30px]">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="ep:arrow-up-bold">
                  <path
                    id="Vector"
                    d="M5.79295 1.63269C5.60548 1.82022 5.50017 2.07453 5.50017 2.33969C5.50017 2.60486 5.60548 2.85916 5.79295 3.04669L10.743 7.99669L5.79295 12.9467C5.61079 13.1353 5.51 13.3879 5.51228 13.6501C5.51456 13.9123 5.61973 14.1631 5.80513 14.3485C5.99054 14.5339 6.24135 14.6391 6.50355 14.6414C6.76575 14.6436 7.01835 14.5429 7.20695 14.3607L12.864 8.70369C13.0514 8.51617 13.1567 8.26186 13.1567 7.99669C13.1567 7.73153 13.0514 7.47722 12.864 7.28969L7.20695 1.63269C7.01942 1.44522 6.76512 1.3399 6.49995 1.3399C6.23479 1.3399 5.98048 1.44522 5.79295 1.63269Z"
                    fill="#1B4E6B"
                  />
                </g>
              </svg>
            </div>
          </div>

          <div className="flex items-center">
            <div className="ml-6 lg:ml-[74px] mb-7 w-full lg:w-[80%]">
              <h3 className="text-[16px] lg:text-[22px] text-primary font-bold lg:leading-[28px] mb-4">
                QA Analyst (WFH)
              </h3>
              <div className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="uil:bag">
                    <path
                      id="Vector"
                      d="M19 6H16V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V6H5C4.20435 6 3.44129 6.31607 2.87868 6.87868C2.31607 7.44129 2 8.20435 2 9V18C2 18.7956 2.31607 19.5587 2.87868 20.1213C3.44129 20.6839 4.20435 21 5 21H19C19.7956 21 20.5587 20.6839 21.1213 20.1213C21.6839 19.5587 22 18.7956 22 18V9C22 8.20435 21.6839 7.44129 21.1213 6.87868C20.5587 6.31607 19.7956 6 19 6ZM10 5H14V6H10V5ZM20 18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H5C4.73478 19 4.48043 18.8946 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18V12.39L8.68 14C8.78618 14.0144 8.89382 14.0144 9 14H15C15.1084 13.998 15.2161 13.9812 15.32 13.95L20 12.39V18ZM20 10.28L14.84 12H9.16L4 10.28V9C4 8.73478 4.10536 8.48043 4.29289 8.29289C4.48043 8.10536 4.73478 8 5 8H19C19.2652 8 19.5196 8.10536 19.7071 8.29289C19.8946 8.48043 20 8.73478 20 9V10.28Z"
                      fill="#1B4E6B"
                    />
                  </g>
                </svg>

                <p className="text-[12px] text-black ml-2 mr-4">Department</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="carbon:dot-mark">
                    <path
                      id="Vector"
                      d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
                      fill="#1B4E6B"
                    />
                  </g>
                </svg>

                <p className="text-[12px] text-black ml-2 mr-4">
                  Web Development
                </p>
                <p className="bg-secondary px-2 py-1 text-primary rounded-2xl text-[12px]">
                  Internship
                </p>
              </div>
            </div>

            <div className="hidden lg:block lg:relative lg:bottom-[30px]">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="ep:arrow-up-bold">
                  <path
                    id="Vector"
                    d="M5.79295 1.63269C5.60548 1.82022 5.50017 2.07453 5.50017 2.33969C5.50017 2.60486 5.60548 2.85916 5.79295 3.04669L10.743 7.99669L5.79295 12.9467C5.61079 13.1353 5.51 13.3879 5.51228 13.6501C5.51456 13.9123 5.61973 14.1631 5.80513 14.3485C5.99054 14.5339 6.24135 14.6391 6.50355 14.6414C6.76575 14.6436 7.01835 14.5429 7.20695 14.3607L12.864 8.70369C13.0514 8.51617 13.1567 8.26186 13.1567 7.99669C13.1567 7.73153 13.0514 7.47722 12.864 7.28969L7.20695 1.63269C7.01942 1.44522 6.76512 1.3399 6.49995 1.3399C6.23479 1.3399 5.98048 1.44522 5.79295 1.63269Z"
                    fill="#1B4E6B"
                  />
                </g>
              </svg>
            </div>
          </div>

          <div className="flex items-center">
            <div className="ml-6 lg:ml-[74px] mb-7 w-full lg:w-[80%]">
              <h3 className="text-[16px] lg:text-[22px] text-primary font-bold lg:leading-[28px] mb-4">
                UI/UX Designer
              </h3>
              <div className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="uil:bag">
                    <path
                      id="Vector"
                      d="M19 6H16V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V6H5C4.20435 6 3.44129 6.31607 2.87868 6.87868C2.31607 7.44129 2 8.20435 2 9V18C2 18.7956 2.31607 19.5587 2.87868 20.1213C3.44129 20.6839 4.20435 21 5 21H19C19.7956 21 20.5587 20.6839 21.1213 20.1213C21.6839 19.5587 22 18.7956 22 18V9C22 8.20435 21.6839 7.44129 21.1213 6.87868C20.5587 6.31607 19.7956 6 19 6ZM10 5H14V6H10V5ZM20 18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H5C4.73478 19 4.48043 18.8946 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18V12.39L8.68 14C8.78618 14.0144 8.89382 14.0144 9 14H15C15.1084 13.998 15.2161 13.9812 15.32 13.95L20 12.39V18ZM20 10.28L14.84 12H9.16L4 10.28V9C4 8.73478 4.10536 8.48043 4.29289 8.29289C4.48043 8.10536 4.73478 8 5 8H19C19.2652 8 19.5196 8.10536 19.7071 8.29289C19.8946 8.48043 20 8.73478 20 9V10.28Z"
                      fill="#1B4E6B"
                    />
                  </g>
                </svg>

                <p className="text-[12px] text-black ml-2 mr-4">Department</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="carbon:dot-mark">
                    <path
                      id="Vector"
                      d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
                      fill="#1B4E6B"
                    />
                  </g>
                </svg>

                <p className="text-[12px] text-black ml-2 mr-4">
                  Web Development
                </p>
                <p className="bg-secondary px-2 py-1 text-primary rounded-2xl text-[12px]">
                  Internship
                </p>
              </div>
            </div>

            <div className="hidden lg:block lg:relative lg:bottom-[30px]">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="ep:arrow-up-bold">
                  <path
                    id="Vector"
                    d="M5.79295 1.63269C5.60548 1.82022 5.50017 2.07453 5.50017 2.33969C5.50017 2.60486 5.60548 2.85916 5.79295 3.04669L10.743 7.99669L5.79295 12.9467C5.61079 13.1353 5.51 13.3879 5.51228 13.6501C5.51456 13.9123 5.61973 14.1631 5.80513 14.3485C5.99054 14.5339 6.24135 14.6391 6.50355 14.6414C6.76575 14.6436 7.01835 14.5429 7.20695 14.3607L12.864 8.70369C13.0514 8.51617 13.1567 8.26186 13.1567 7.99669C13.1567 7.73153 13.0514 7.47722 12.864 7.28969L7.20695 1.63269C7.01942 1.44522 6.76512 1.3399 6.49995 1.3399C6.23479 1.3399 5.98048 1.44522 5.79295 1.63269Z"
                    fill="#1B4E6B"
                  />
                </g>
              </svg>
            </div>
          </div>

          <h4 className="text-primary flex items-center justify-center font-bold text-center text-[14px] lg:text-[22px] leading-[28px] mb-12 mt-6">
            <a href="#">View more jobs</a>
            <div className="relative top-1 ml-3">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="ep:arrow-up-bold">
                  <path
                    id="Vector"
                    d="M5.79295 1.63269C5.60548 1.82022 5.50017 2.07453 5.50017 2.33969C5.50017 2.60486 5.60548 2.85916 5.79295 3.04669L10.743 7.99669L5.79295 12.9467C5.61079 13.1353 5.51 13.3879 5.51228 13.6501C5.51456 13.9123 5.61973 14.1631 5.80513 14.3485C5.99054 14.5339 6.24135 14.6391 6.50355 14.6414C6.76575 14.6436 7.01835 14.5429 7.20695 14.3607L12.864 8.70369C13.0514 8.51617 13.1567 8.26186 13.1567 7.99669C13.1567 7.73153 13.0514 7.47722 12.864 7.28969L7.20695 1.63269C7.01942 1.44522 6.76512 1.3399 6.49995 1.3399C6.23479 1.3399 5.98048 1.44522 5.79295 1.63269Z"
                    fill="#1B4E6B"
                  />
                </g>
              </svg>
            </div>
          </h4>
        </div>
      </section>
      {/* AKhir Open Position Section */}

      {/* Life at CC Section */}
      <section className="w-full h-full bg-white flex flex-col lg:flex-row-reverse justify-center relative bottom-[80px] items-center">
        {/* image */}
        <div className="w-[327px] h-[296px] rounded-[25px] ">
          <img
            className="w-full h-full object-cover rounded-[25px]"
            src="https://i.postimg.cc/4yDrKs43/redd-f-5-U-28ojjgms-unsplash.jpg"
            alt="Life at CC"
          />
        </div>

        {/* text */}
        <div className="w-full h-full p-[48px] lg:w-[51%]">
          <h2 className="text-primary text-[28px] leading-9 text-center lg:text-start lg:text-[32px] font-bold mt-10 mb-6">
            Explore Life at CC
          </h2>

          <p className="text-[16px] text-black lg:text-[20px] leading-6 font-normal tracking-[0.5%] mb-6">
            Our core philosophy is people over process. Our culture has been
            instrumental to our success and has helped us attract and retain
            stunning colleagues, making work here more satisfying.
          </p>

          <div className="w-[150px] rounded-[50px] flex justify-start items-center bg-secondary">
            <a href="" className="px-4 py-3 text-[14px]">
              Read More
            </a>
            <div className="relative top-[2px] ml-3">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="ep:arrow-up-bold">
                  <path
                    id="Vector"
                    d="M5.79295 1.63269C5.60548 1.82022 5.50017 2.07453 5.50017 2.33969C5.50017 2.60486 5.60548 2.85916 5.79295 3.04669L10.743 7.99669L5.79295 12.9467C5.61079 13.1353 5.51 13.3879 5.51228 13.6501C5.51456 13.9123 5.61973 14.1631 5.80513 14.3485C5.99054 14.5339 6.24135 14.6391 6.50355 14.6414C6.76575 14.6436 7.01835 14.5429 7.20695 14.3607L12.864 8.70369C13.0514 8.51617 13.1567 8.26186 13.1567 7.99669C13.1567 7.73153 13.0514 7.47722 12.864 7.28969L7.20695 1.63269C7.01942 1.44522 6.76512 1.3399 6.49995 1.3399C6.23479 1.3399 5.98048 1.44522 5.79295 1.63269Z"
                    fill="#1B4E6B"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
      {/* Akhir Life at CC Section */}

      {/* Slider life at CC Section */}
      <section className="w-full h-full bg-white md:px-[70px] px-5 py-[70px] relative bottom-[80px]">
        <h2 className="text-primary xl:text-[36px] text-[28px] font-semibold text-center pt-[10px] mb-6">
          Life at CC
        </h2>

        <div className="mt-[55px] mx-auto mb-0 rounded-[25px]">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 10,
              slideShadows: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className="swiper_container"
          >
            {careers.map((careers, index) => (
              <SwiperSlide className="!w-[183px] !h-[130px] lg:!w-[522px] lg:!h-[371px] relative">
                <img
                  src={careers.url}
                  key={index}
                  alt="slide_image"
                  className="w-[183px] h-[130px] lg:!w-[522px] lg:!h-[371px] object-cover shadow-[0_10px_20px_0px_rgba(0,_0,_0,_0.15)] rounded-[16px]"
                />
              </SwiperSlide>
            ))}
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow bg-secondary !w-[24px] !h-[24px] rounded-full !left-[0%] lg:!left-[5%] !translate-x-[40%]">
                <ArrowBackIosNewIcon className="!w-[2rem] text-primary" />
              </div>
              <div className="swiper-button-next slider-arrow bg-secondary !w-[24px] !h-[24px] rounded-full !left-[95%] lg:!left-[92%] !translate-x-[-55%]">
                <ArrowForwardIosIcon className="!w-[2rem] text-primary" />
              </div>
            </div>
          </Swiper>
        </div>
      </section>
      {/* Akhir Slider life at CC Section */}

      {/* Footer */}
      <div className="w-full bg-primary">
        <Footer />
      </div>
    </main>
  );
};

export default Careers;
