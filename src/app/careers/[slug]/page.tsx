"use client";
import { Navbar, Footer } from "@/components";

const Detail = () => {
  return (
    <main className="w-full bg-whie overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="flex flex-col pt-36 w-full pb-[120px] lg:py-12 bg-primary justify-center items-center lg:items-start relative h-fit md:h-screen overflow-hidden">
        <div className="flex flex-col items-start lg:ml-[176px]">
          <h1 className="text-[32px] lg:text-[45px] leading-[40px] lg:leading-[52px] font-bold text-center text-white">
            Front-end Developer
          </h1>

          <div className="lg:flex lg:gap-6 lg:items-center lg:mt-6">
            <p className="bg-secondary w-[90px] px-2 py-1 text-primary rounded-2xl text-[12px] mt-6 text-center lg:hidden">
              Internship
            </p>

            <div className="h-full flex mt-1">
              <svg
                className="lg:w-[24px] lg:h-[24px]"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="uil:bag">
                  <path
                    id="Vector"
                    d="M12.6668 4H10.6668V3.33333C10.6668 2.97971 10.5264 2.64057 10.2763 2.39052C10.0263 2.14048 9.68712 2 9.3335 2H6.66683C6.31321 2 5.97407 2.14048 5.72402 2.39052C5.47397 2.64057 5.3335 2.97971 5.3335 3.33333V4H3.3335C2.80306 4 2.29436 4.21071 1.91928 4.58579C1.54421 4.96086 1.3335 5.46957 1.3335 6V12C1.3335 12.5304 1.54421 13.0391 1.91928 13.4142C2.29436 13.7893 2.80306 14 3.3335 14H12.6668C13.1973 14 13.706 13.7893 14.081 13.4142C14.4561 13.0391 14.6668 12.5304 14.6668 12V6C14.6668 5.46957 14.4561 4.96086 14.081 4.58579C13.706 4.21071 13.1973 4 12.6668 4ZM6.66683 3.33333H9.3335V4H6.66683V3.33333ZM13.3335 12C13.3335 12.1768 13.2633 12.3464 13.1382 12.4714C13.0132 12.5964 12.8436 12.6667 12.6668 12.6667H3.3335C3.15668 12.6667 2.98712 12.5964 2.86209 12.4714C2.73707 12.3464 2.66683 12.1768 2.66683 12V8.26L5.78683 9.33333C5.85762 9.34294 5.92938 9.34294 6.00016 9.33333H10.0002C10.0725 9.332 10.1442 9.32078 10.2135 9.3L13.3335 8.26V12ZM13.3335 6.85333L9.8935 8H6.10683L2.66683 6.85333V6C2.66683 5.82319 2.73707 5.65362 2.86209 5.5286C2.98712 5.40357 3.15668 5.33333 3.3335 5.33333H12.6668C12.8436 5.33333 13.0132 5.40357 13.1382 5.5286C13.2633 5.65362 13.3335 5.82319 13.3335 6V6.85333Z"
                    fill="#90A3BF"
                  />
                </g>
              </svg>
              <p className="text-[12px] lg:text-[22px] lg:leading-[28px] text-[#90A3BF] ml-2 mr-4">
                Department
              </p>
            </div>

            <div className="h-full flex mt-1">
              <svg
                className="lg:w-[24px] lg:h-[24px]"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="carbon:dot-mark">
                  <path
                    id="Vector"
                    d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
                    fill="#90A3BF"
                  />
                </g>
              </svg>
              <p className="text-[12px] lg:text-[22px] lg:leading-[28px] text-[#90A3BF] ml-2 mr-4">
                Web Development
              </p>
            </div>

            <p className="bg-secondary w-[90px] px-2 py-1 text-primary rounded-2xl text-[12px] lg:text-[14px] text-center hidden lg:block">
              Internship
            </p>
          </div>

          <button className="mt-10 rounded-[50px] px-[35px] py-3 w-full h-full bg-secondary flex items-center justify-center lg:hidden">
            Apply Now
            <div className="ml-2 self-center">
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
                    d="M14.864 5.293C14.6764 5.10553 14.4221 5.00021 14.157 5.00021C13.8918 5.00021 13.6375 5.10553 13.45 5.293L8.49995 10.243L3.54995 5.293C3.36135 5.11084 3.10875 5.01004 2.84655 5.01232C2.58435 5.0146 2.33354 5.11977 2.14813 5.30518C1.96272 5.49059 1.85756 5.7414 1.85528 6.0036C1.853 6.26579 1.95379 6.51839 2.13595 6.707L7.79295 12.364C7.98048 12.5515 8.23479 12.6568 8.49995 12.6568C8.76512 12.6568 9.01942 12.5515 9.20695 12.364L14.864 6.707C15.0514 6.51947 15.1567 6.26516 15.1567 6C15.1567 5.73483 15.0514 5.48053 14.864 5.293Z"
                    fill="#1B4E6B"
                  />
                </g>
              </svg>
            </div>
          </button>
        </div>
      </section>

      {/* footer */}
      <div className="w-full bg-primary">
        <Footer />
      </div>
    </main>
  );
};

export default Detail;
