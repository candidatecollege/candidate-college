"use client";
import { Navbar, Footer } from "@/components";

const Detail = () => {
  return (
    <main className="w-full bg-white overflow-hidden">
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

      {/* Detail position */}
      <section className="w-full py-[80px] relative lg:mt-[96px] lg:bottom-[400px] lg:flex lg:items-center lg:justify-center">
        <div className="flex flex-col lg:flex-row lg:gap-[92px] w-full items-start px-6 bg-white lg:rounded-[50px]  lg:ml-[120px] lg:mr-[120px] lg:pt-[72px] lg:px-[68px]">
          <div className="flex flex-col lg:w-[80%]">
            {/* about the team */}
            <div className="flex flex-col w-full items-start">
              <h2 className="text-[24px] leading-[32px] lg:text-[28px] lg:leading-[36px] font-semibold">
                About the team
              </h2>

              <p className="mt-4 w-full text-[14px] leading-[20px] lg:text-[16px] lg:leading-[24px] font-normal text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            {/* end of about the team */}

            {/* job description */}
            <div className="flex flex-col w-full items-start mt-6">
              <h2 className="text-[24px] leading-[32px] lg:text-[28px] lg:leading-[36px] font-semibold">
                Job Description
              </h2>

              <p className="mt-4 w-full text-[14px] leading-[20px] font-normal text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            {/* end of job description */}

            {/* job requirements */}
            <div className="flex flex-col w-full items-start mt-6">
              <h2 className="text-[24px] leading-[32px] lg:text-[28px] lg:leading-[36px] font-semibold">
                Job Requirements
              </h2>

              <p className="mt-4 w-full text-[14px] leading-[20px] font-normal text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </p>
            </div>
            {/* end of job requirements */}

            {/* share the listing mobile */}
            <div className="flex flex-col w-full items-start mt-4 lg:hidden">
              <h3 className="text-[16px] leading-[24px] lg:text-[22px] lg:leading-[28px] font-semibold">
                Share the listing:
              </h3>

              <div className="flex gap-[14px] mt-2 mb-6 lg:hidden">
                {/* dribble logo */}
                <div className="bg-secondary p-3 rounded-[25px]">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Dribbble logo" clip-path="url(#clip0_130_735)">
                      <path
                        id="Vector"
                        d="M0 12.5C0 10.2333 0.55835 8.14167 1.675 6.225C2.79168 4.30833 4.30835 2.79168 6.225 1.675C8.14167 0.558325 10.2333 0 12.5 0C14.7667 0 16.8584 0.558325 18.775 1.675C20.6917 2.79168 22.2084 4.30833 23.325 6.225C24.4417 8.14167 25 10.2333 25 12.5C25 14.7667 24.4417 16.8583 23.325 18.775C22.2084 20.6917 20.6917 22.2083 18.775 23.325C16.8584 24.4417 14.7667 25 12.5 25C10.2333 25 8.14167 24.4417 6.225 23.325C4.30835 22.2083 2.79168 20.6917 1.675 18.775C0.55835 16.8583 0 14.7667 0 12.5ZM2.075 12.5C2.075 15.1 2.95 17.3917 4.7 19.375C5.5 17.8083 6.76667 16.3167 8.5 14.9C10.2333 13.4833 11.925 12.5917 13.575 12.225C13.325 11.6417 13.0834 11.1167 12.85 10.65C9.98335 11.5667 6.88335 12.025 3.55 12.025C2.9 12.025 2.41668 12.0167 2.1 12C2.1 12.0667 2.09585 12.15 2.0875 12.25C2.07917 12.35 2.075 12.4333 2.075 12.5ZM2.4 9.925C2.76667 9.95833 3.30835 9.975 4.025 9.975C6.80835 9.975 9.45 9.6 11.95 8.85C10.6834 6.6 9.29168 4.725 7.775 3.225C6.45835 3.89167 5.32917 4.81668 4.3875 6C3.44585 7.18333 2.78335 8.49168 2.4 9.925ZM6.125 20.725C8.00835 22.1917 10.1334 22.925 12.5 22.925C13.7333 22.925 14.9584 22.6917 16.175 22.225C15.8417 19.375 15.1917 16.6167 14.225 13.95C12.6917 14.2833 11.1459 15.125 9.5875 16.475C8.02917 17.825 6.875 19.2417 6.125 20.725ZM9.95 2.425C11.4167 3.94167 12.775 5.83332 14.025 8.1C16.2917 7.15 18 5.94168 19.15 4.475C17.2167 2.875 15 2.075 12.5 2.075C11.65 2.075 10.8 2.19167 9.95 2.425ZM14.925 9.875C15.175 10.4083 15.4584 11.0833 15.775 11.9C17.0084 11.7833 18.35 11.725 19.8 11.725C20.8334 11.725 21.8584 11.75 22.875 11.8C22.7417 9.53333 21.925 7.51667 20.425 5.75C19.3417 7.36667 17.5084 8.74168 14.925 9.875ZM16.4 13.65C17.25 16.1167 17.825 18.65 18.125 21.25C19.4417 20.4 20.5167 19.3083 21.35 17.975C22.1833 16.6417 22.6833 15.2 22.85 13.65C21.6334 13.5667 20.525 13.525 19.525 13.525C18.6084 13.525 17.5667 13.5667 16.4 13.65Z"
                        fill="#1B4E6B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_130_735">
                        <rect width="25" height="25" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                {/* end of dribble logo */}

                {/* behance logo */}
                <div className="bg-secondary p-3 rounded-[25px]">
                  <svg
                    width="26"
                    height="22"
                    viewBox="0 0 26 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="behance logo" clip-path="url(#clip0_130_738)">
                      <path
                        id="Vector"
                        d="M10.5694 9.8446C11.9497 9.21374 12.6701 8.25916 12.6701 6.77332C12.6701 3.84314 10.3872 3.12927 7.7526 3.12927H0.5V17.8383H7.9566C10.7517 17.8383 13.3776 16.5558 13.3776 13.5675C13.3776 11.7206 12.4618 10.3551 10.5694 9.8446ZM3.88108 5.64026H7.05382C8.27344 5.64026 9.37153 5.96814 9.37153 7.32117C9.37153 8.57043 8.51649 9.07263 7.3099 9.07263H3.88108V5.64026ZM7.49653 15.3397H3.88108V11.2889H7.56597C9.05469 11.2889 9.99653 11.8824 9.99653 13.389C9.99653 14.8749 8.8724 15.3397 7.49653 15.3397ZM23.0564 5.34973H16.8194V3.90125H23.0564V5.34973ZM25.5 12.6669C25.5 9.51672 23.5729 6.88953 20.079 6.88953C16.6849 6.88953 14.3802 9.32996 14.3802 12.5258C14.3802 15.8419 16.5634 18.1163 20.079 18.1163C22.7396 18.1163 24.4627 16.9708 25.2917 14.5345H22.592C22.3012 15.4435 21.1033 15.9249 20.1745 15.9249C18.3819 15.9249 17.4401 14.9205 17.4401 13.2147H25.474C25.487 13.0404 25.5 12.8536 25.5 12.6669ZM17.4444 11.3719C17.5443 9.97327 18.5165 9.09753 19.9835 9.09753C21.52 9.09753 22.2925 9.96082 22.4227 11.3719H17.4444Z"
                        fill="#1B4E6B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_130_738">
                        <rect
                          width="25"
                          height="21.25"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                {/* end of behance logo */}

                {/* instagram logo */}
                <div className="bg-secondary p-3 rounded-[25px]">
                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="instagram logo" clip-path="url(#clip0_130_741)">
                      <g id="Group">
                        <g id="Group_2">
                          <path
                            id="Vector"
                            d="M7.83421 11C7.83421 8.97503 9.47539 7.33304 11.5004 7.33304C13.5255 7.33304 15.1675 8.97503 15.1675 11C15.1675 13.025 13.5255 14.667 11.5004 14.667C9.47539 14.667 7.83421 13.025 7.83421 11ZM5.85185 11C5.85185 14.1196 8.38072 16.6484 11.5004 16.6484C14.6202 16.6484 17.149 14.1196 17.149 11C17.149 7.8804 14.6202 5.35163 11.5004 5.35163C8.38072 5.35163 5.85185 7.8804 5.85185 11ZM16.0526 5.12767C16.0523 5.85669 16.6431 6.44791 17.3721 6.4482C18.1012 6.44849 18.6924 5.85774 18.6927 5.12873C18.693 4.39971 18.1022 3.80849 17.3732 3.8082C16.6445 3.80854 16.0532 4.399 16.0526 5.12767ZM7.05626 19.9537C5.98376 19.9049 5.40083 19.7263 5.01344 19.5753C4.49985 19.3754 4.1334 19.1373 3.74812 18.7525C3.36284 18.3678 3.12435 18.0017 2.92529 17.4882C2.77427 17.101 2.59563 16.5179 2.54687 15.4454C2.49354 14.2859 2.4829 13.9376 2.4829 11.0001C2.4829 8.06256 2.49442 7.71522 2.54687 6.55477C2.59572 5.48231 2.77568 4.90037 2.92529 4.51202C3.12523 3.99846 3.36337 3.63202 3.74812 3.24676C4.13287 2.8615 4.49897 2.62302 5.01344 2.42396C5.40065 2.27295 5.98376 2.09431 7.05626 2.04556C8.2158 1.99223 8.56412 1.98158 11.5004 1.98158C14.4368 1.98158 14.7854 1.99311 15.9459 2.04556C17.0184 2.0944 17.6004 2.27436 17.9888 2.42396C18.5024 2.62302 18.8688 2.86202 19.2541 3.24676C19.6394 3.6315 19.877 3.99846 20.0769 4.51202C20.2279 4.89922 20.4066 5.48231 20.4553 6.55477C20.5087 7.71522 20.5193 8.06256 20.5193 11.0001C20.5193 13.9376 20.5087 14.285 20.4553 15.4454C20.4065 16.5179 20.227 17.1008 20.0769 17.4882C19.877 18.0017 19.6388 18.3682 19.2541 18.7525C18.8693 19.1369 18.5024 19.3754 17.9888 19.5753C17.6015 19.7263 17.0184 19.905 15.9459 19.9537C14.7864 20.0071 14.4381 20.0177 11.5004 20.0177C8.5628 20.0177 8.21544 20.0071 7.05626 19.9537ZM6.96518 0.066616C5.79412 0.119944 4.9939 0.305624 4.29506 0.577544C3.57132 0.858352 2.95864 1.23508 2.3464 1.84633C1.73416 2.45758 1.35839 3.0712 1.07757 3.79491C0.805636 4.49416 0.619949 5.2939 0.566619 6.46492C0.512408 7.63778 0.5 8.01275 0.5 11C0.5 13.9872 0.512408 14.3622 0.566619 15.5351C0.619949 16.7062 0.805636 17.5058 1.07757 18.2051C1.35839 18.9284 1.73425 19.5427 2.3464 20.1537C2.95855 20.7647 3.57132 21.1409 4.29506 21.4225C4.99522 21.6944 5.79412 21.8801 6.96518 21.9334C8.13871 21.9867 8.51307 22 11.5004 22C14.4878 22 14.8628 21.9876 16.0357 21.9334C17.2069 21.8801 18.0065 21.6944 18.7058 21.4225C19.4291 21.1409 20.0422 20.7649 20.6545 20.1537C21.2667 19.5424 21.6417 18.9284 21.9233 18.2051C22.1952 17.5058 22.3818 16.7061 22.4343 15.5351C22.4876 14.3613 22.5 13.9872 22.5 11C22.5 8.01275 22.4876 7.63778 22.4343 6.46492C22.3809 5.29382 22.1952 4.49372 21.9233 3.79491C21.6417 3.07164 21.2658 2.45854 20.6545 1.84633C20.0432 1.23411 19.4291 0.858352 18.7067 0.577544C18.0065 0.305624 17.2068 0.119064 16.0366 0.066616C14.8637 0.013288 14.4887 0 11.5013 0C8.51395 0 8.13871 0.012408 6.96518 0.066616Z"
                            fill="#1B4E6B"
                          />
                        </g>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_130_741">
                        <rect
                          width="22"
                          height="22"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                {/* end of instagram logo */}

                {/* linkedin logo */}
                <div className="bg-secondary p-3 rounded-[25px]">
                  <svg
                    width="25"
                    height="23"
                    viewBox="0 0 25 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="LinkedIn logo" clip-path="url(#clip0_130_746)">
                      <path
                        id="Vector"
                        d="M0.5 2.61363C0.5 1.85604 0.767463 1.23104 1.30236 0.738635C1.83727 0.246204 2.53267 0 3.38851 0C4.22909 0 4.90918 0.242409 5.42881 0.727272C5.96371 1.22727 6.23118 1.87877 6.23118 2.68181C6.23118 3.40909 5.97137 4.01513 5.45174 4.49999C4.91684 4.99999 4.2138 5.24999 3.34266 5.24999H3.31974C2.47916 5.24999 1.79907 4.99999 1.27944 4.49999C0.759806 3.99999 0.5 3.3712 0.5 2.61363ZM0.798021 22.5V7.31817H5.88731V22.5H0.798021ZM8.70705 22.5H13.7963V14.0227C13.7963 13.4924 13.8575 13.0833 13.9797 12.7954C14.1937 12.2803 14.5185 11.8447 14.954 11.4886C15.3896 11.1326 15.936 10.9545 16.5931 10.9545C18.3049 10.9545 19.1607 12.0985 19.1607 14.3863V22.5H24.25V13.7954C24.25 11.553 23.7151 9.85226 22.6453 8.69317C21.5754 7.53408 20.1618 6.95453 18.4042 6.95453C16.4327 6.95453 14.8967 7.79544 13.7963 9.47726V9.52271H13.7734L13.7963 9.47726V7.31817H8.70705C8.73761 7.80301 8.7529 9.31058 8.7529 11.8409C8.7529 14.3712 8.73761 17.9242 8.70705 22.5Z"
                        fill="#1B4E6B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_130_746">
                        <rect
                          width="23.75"
                          height="22.5"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                {/* end of linkedin logo */}
              </div>
            </div>
            {/* end of share the listing mobile */}

            {/* form */}
            <div className="flex flex-col w-full items-start mt-12">
              <form action="" className="flex flex-col w-full gap-4">
                <div className="flex flex-col lg:flex-row lg:gap-6 lg:w-full">
                  <div className="flex flex-col lg:w-full">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      className="py-3 px-4 rounded-[2px] border-[#9CA3AF] border-[1px] mt-2 required"
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="First Name"
                      required
                    />
                  </div>

                  <div className="flex flex-col lg:w-full">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      className="py-3 px-4 rounded-[2px] border-[#9CA3AF] border-[1px] mt-2 required"
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row-reverse lg:gap-6 lg:w-full">
                  <div className="flex flex-col lg:w-full">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                      className="py-3 px-4 rounded-[2px] border-[#9CA3AF] border-[1px] mt-2 required"
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="Phone Number"
                      required
                    />
                  </div>

                  <div className="flex flex-col lg:w-full">
                    <label htmlFor="email">Email</label>
                    <input
                      className="py-3 px-4 rounded-[2px] border-[#9CA3AF] border-[1px] mt-2 required"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:gap-6 lg:w-full">
                  <div className="flex flex-col lg:w-full">
                    <p className="text-[16px] leading-[24px] font-medium">
                      Resume
                    </p>
                    <p className="text-[14px] leading-[20px] font-normal text-[#4B5563] mb-2">
                      (.pdf, .doc, .docx, .txt)
                    </p>
                    <label
                      htmlFor="resume"
                      className="px-4 py-3 border-[3px] border-[#1B4E6B] w-max text-center"
                    >
                      UPLOAD RESUME
                    </label>
                    <input
                      style={{
                        opacity: 0,
                        position: "absolute",
                        zIndex: -1,
                        width: 0,
                        height: 0,
                      }}
                      className="py-3 px-4 rounded-[2px] border-[#9CA3AF] border-[1px] mt-2 required"
                      type="file"
                      name="resume"
                      id="resume"
                      placeholder="Upload Resume"
                      required
                    />
                  </div>

                  <div className="flex flex-col lg:w-full">
                    <p className="text-[16px] leading-[24px] font-medium">
                      Additional file
                    </p>
                    <p className="text-[14px] leading-[20px] font-normal text-[#4B5563] mb-2">
                      Upload supplemental documents max 5MB each
                    </p>
                    <label
                      htmlFor="resume"
                      className="px-4 py-3 border-[3px] border-[#1B4E6B] w-max text-center"
                    >
                      UPLOAD DOCUMENTS
                    </label>
                    <input
                      style={{
                        opacity: 0,
                        position: "absolute",
                        zIndex: -1,
                        width: 0,
                        height: 0,
                      }}
                      className="py-3 px-4 rounded-[2px] border-[#9CA3AF] border-[1px] mt-2 required"
                      type="file"
                      name="resume"
                      id="resume"
                      placeholder="Upload Resume"
                    />
                  </div>
                </div>

                <div>
                  <button className="w-max bg-primary px-4 py-3 rounded-[2px] text-[14px] leading-[20px] flex text-white justify-center items-center mt-6 lg:mt-[42px]">
                    SUBMIT APPLICATION
                    <div className="ml-2 self-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="ep:arrow-up-bold">
                          <path
                            id="Vector"
                            d="M5.29295 1.63605C5.10548 1.82358 5.00017 2.07788 5.00017 2.34305C5.00017 2.60821 5.10548 2.86252 5.29295 3.05005L10.243 8.00005L5.29295 12.95C5.11079 13.1387 5.01 13.3913 5.01228 13.6535C5.01456 13.9156 5.11973 14.1665 5.30513 14.3519C5.49054 14.5373 5.74135 14.6424 6.00355 14.6447C6.26575 14.647 6.51835 14.5462 6.70695 14.364L12.364 8.70705C12.5514 8.51952 12.6567 8.26521 12.6567 8.00005C12.6567 7.73488 12.5514 7.48058 12.364 7.29305L6.70695 1.63605C6.51942 1.44858 6.26512 1.34326 5.99995 1.34326C5.73479 1.34326 5.48048 1.44858 5.29295 1.63605Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </div>
                  </button>
                </div>
              </form>
            </div>
            {/* end of form */}
          </div>

          <div className="flex flex-col">
            <button className="mt-10 rounded-[50px] px-[35px] py-3 h-full bg-secondary items-center justify-center hidden lg:flex w-max">
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

            {/* share the listing desktop */}
            <div className="w-full items-start mt-6 hidden lg:flex lg:flex-col">
              <h3 className="text-[16px] leading-[24px] lg:text-[22px] lg:leading-[28px] font-semibold">
                Share the listing:
              </h3>

              <div className="gap-[14px] mt-2 mb-6 hidden lg:flex">
                {/* dribble logo */}
                <div className="bg-secondary p-3 rounded-[25px]">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Dribbble logo" clip-path="url(#clip0_130_735)">
                      <path
                        id="Vector"
                        d="M0 12.5C0 10.2333 0.55835 8.14167 1.675 6.225C2.79168 4.30833 4.30835 2.79168 6.225 1.675C8.14167 0.558325 10.2333 0 12.5 0C14.7667 0 16.8584 0.558325 18.775 1.675C20.6917 2.79168 22.2084 4.30833 23.325 6.225C24.4417 8.14167 25 10.2333 25 12.5C25 14.7667 24.4417 16.8583 23.325 18.775C22.2084 20.6917 20.6917 22.2083 18.775 23.325C16.8584 24.4417 14.7667 25 12.5 25C10.2333 25 8.14167 24.4417 6.225 23.325C4.30835 22.2083 2.79168 20.6917 1.675 18.775C0.55835 16.8583 0 14.7667 0 12.5ZM2.075 12.5C2.075 15.1 2.95 17.3917 4.7 19.375C5.5 17.8083 6.76667 16.3167 8.5 14.9C10.2333 13.4833 11.925 12.5917 13.575 12.225C13.325 11.6417 13.0834 11.1167 12.85 10.65C9.98335 11.5667 6.88335 12.025 3.55 12.025C2.9 12.025 2.41668 12.0167 2.1 12C2.1 12.0667 2.09585 12.15 2.0875 12.25C2.07917 12.35 2.075 12.4333 2.075 12.5ZM2.4 9.925C2.76667 9.95833 3.30835 9.975 4.025 9.975C6.80835 9.975 9.45 9.6 11.95 8.85C10.6834 6.6 9.29168 4.725 7.775 3.225C6.45835 3.89167 5.32917 4.81668 4.3875 6C3.44585 7.18333 2.78335 8.49168 2.4 9.925ZM6.125 20.725C8.00835 22.1917 10.1334 22.925 12.5 22.925C13.7333 22.925 14.9584 22.6917 16.175 22.225C15.8417 19.375 15.1917 16.6167 14.225 13.95C12.6917 14.2833 11.1459 15.125 9.5875 16.475C8.02917 17.825 6.875 19.2417 6.125 20.725ZM9.95 2.425C11.4167 3.94167 12.775 5.83332 14.025 8.1C16.2917 7.15 18 5.94168 19.15 4.475C17.2167 2.875 15 2.075 12.5 2.075C11.65 2.075 10.8 2.19167 9.95 2.425ZM14.925 9.875C15.175 10.4083 15.4584 11.0833 15.775 11.9C17.0084 11.7833 18.35 11.725 19.8 11.725C20.8334 11.725 21.8584 11.75 22.875 11.8C22.7417 9.53333 21.925 7.51667 20.425 5.75C19.3417 7.36667 17.5084 8.74168 14.925 9.875ZM16.4 13.65C17.25 16.1167 17.825 18.65 18.125 21.25C19.4417 20.4 20.5167 19.3083 21.35 17.975C22.1833 16.6417 22.6833 15.2 22.85 13.65C21.6334 13.5667 20.525 13.525 19.525 13.525C18.6084 13.525 17.5667 13.5667 16.4 13.65Z"
                        fill="#1B4E6B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_130_735">
                        <rect width="25" height="25" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                {/* end of dribble logo */}

                {/* behance logo */}
                <div className="bg-secondary p-3 rounded-[25px]">
                  <svg
                    width="26"
                    height="22"
                    viewBox="0 0 26 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="behance logo" clip-path="url(#clip0_130_738)">
                      <path
                        id="Vector"
                        d="M10.5694 9.8446C11.9497 9.21374 12.6701 8.25916 12.6701 6.77332C12.6701 3.84314 10.3872 3.12927 7.7526 3.12927H0.5V17.8383H7.9566C10.7517 17.8383 13.3776 16.5558 13.3776 13.5675C13.3776 11.7206 12.4618 10.3551 10.5694 9.8446ZM3.88108 5.64026H7.05382C8.27344 5.64026 9.37153 5.96814 9.37153 7.32117C9.37153 8.57043 8.51649 9.07263 7.3099 9.07263H3.88108V5.64026ZM7.49653 15.3397H3.88108V11.2889H7.56597C9.05469 11.2889 9.99653 11.8824 9.99653 13.389C9.99653 14.8749 8.8724 15.3397 7.49653 15.3397ZM23.0564 5.34973H16.8194V3.90125H23.0564V5.34973ZM25.5 12.6669C25.5 9.51672 23.5729 6.88953 20.079 6.88953C16.6849 6.88953 14.3802 9.32996 14.3802 12.5258C14.3802 15.8419 16.5634 18.1163 20.079 18.1163C22.7396 18.1163 24.4627 16.9708 25.2917 14.5345H22.592C22.3012 15.4435 21.1033 15.9249 20.1745 15.9249C18.3819 15.9249 17.4401 14.9205 17.4401 13.2147H25.474C25.487 13.0404 25.5 12.8536 25.5 12.6669ZM17.4444 11.3719C17.5443 9.97327 18.5165 9.09753 19.9835 9.09753C21.52 9.09753 22.2925 9.96082 22.4227 11.3719H17.4444Z"
                        fill="#1B4E6B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_130_738">
                        <rect
                          width="25"
                          height="21.25"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                {/* end of behance logo */}

                {/* instagram logo */}
                <div className="bg-secondary p-3 rounded-[25px]">
                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="instagram logo" clip-path="url(#clip0_130_741)">
                      <g id="Group">
                        <g id="Group_2">
                          <path
                            id="Vector"
                            d="M7.83421 11C7.83421 8.97503 9.47539 7.33304 11.5004 7.33304C13.5255 7.33304 15.1675 8.97503 15.1675 11C15.1675 13.025 13.5255 14.667 11.5004 14.667C9.47539 14.667 7.83421 13.025 7.83421 11ZM5.85185 11C5.85185 14.1196 8.38072 16.6484 11.5004 16.6484C14.6202 16.6484 17.149 14.1196 17.149 11C17.149 7.8804 14.6202 5.35163 11.5004 5.35163C8.38072 5.35163 5.85185 7.8804 5.85185 11ZM16.0526 5.12767C16.0523 5.85669 16.6431 6.44791 17.3721 6.4482C18.1012 6.44849 18.6924 5.85774 18.6927 5.12873C18.693 4.39971 18.1022 3.80849 17.3732 3.8082C16.6445 3.80854 16.0532 4.399 16.0526 5.12767ZM7.05626 19.9537C5.98376 19.9049 5.40083 19.7263 5.01344 19.5753C4.49985 19.3754 4.1334 19.1373 3.74812 18.7525C3.36284 18.3678 3.12435 18.0017 2.92529 17.4882C2.77427 17.101 2.59563 16.5179 2.54687 15.4454C2.49354 14.2859 2.4829 13.9376 2.4829 11.0001C2.4829 8.06256 2.49442 7.71522 2.54687 6.55477C2.59572 5.48231 2.77568 4.90037 2.92529 4.51202C3.12523 3.99846 3.36337 3.63202 3.74812 3.24676C4.13287 2.8615 4.49897 2.62302 5.01344 2.42396C5.40065 2.27295 5.98376 2.09431 7.05626 2.04556C8.2158 1.99223 8.56412 1.98158 11.5004 1.98158C14.4368 1.98158 14.7854 1.99311 15.9459 2.04556C17.0184 2.0944 17.6004 2.27436 17.9888 2.42396C18.5024 2.62302 18.8688 2.86202 19.2541 3.24676C19.6394 3.6315 19.877 3.99846 20.0769 4.51202C20.2279 4.89922 20.4066 5.48231 20.4553 6.55477C20.5087 7.71522 20.5193 8.06256 20.5193 11.0001C20.5193 13.9376 20.5087 14.285 20.4553 15.4454C20.4065 16.5179 20.227 17.1008 20.0769 17.4882C19.877 18.0017 19.6388 18.3682 19.2541 18.7525C18.8693 19.1369 18.5024 19.3754 17.9888 19.5753C17.6015 19.7263 17.0184 19.905 15.9459 19.9537C14.7864 20.0071 14.4381 20.0177 11.5004 20.0177C8.5628 20.0177 8.21544 20.0071 7.05626 19.9537ZM6.96518 0.066616C5.79412 0.119944 4.9939 0.305624 4.29506 0.577544C3.57132 0.858352 2.95864 1.23508 2.3464 1.84633C1.73416 2.45758 1.35839 3.0712 1.07757 3.79491C0.805636 4.49416 0.619949 5.2939 0.566619 6.46492C0.512408 7.63778 0.5 8.01275 0.5 11C0.5 13.9872 0.512408 14.3622 0.566619 15.5351C0.619949 16.7062 0.805636 17.5058 1.07757 18.2051C1.35839 18.9284 1.73425 19.5427 2.3464 20.1537C2.95855 20.7647 3.57132 21.1409 4.29506 21.4225C4.99522 21.6944 5.79412 21.8801 6.96518 21.9334C8.13871 21.9867 8.51307 22 11.5004 22C14.4878 22 14.8628 21.9876 16.0357 21.9334C17.2069 21.8801 18.0065 21.6944 18.7058 21.4225C19.4291 21.1409 20.0422 20.7649 20.6545 20.1537C21.2667 19.5424 21.6417 18.9284 21.9233 18.2051C22.1952 17.5058 22.3818 16.7061 22.4343 15.5351C22.4876 14.3613 22.5 13.9872 22.5 11C22.5 8.01275 22.4876 7.63778 22.4343 6.46492C22.3809 5.29382 22.1952 4.49372 21.9233 3.79491C21.6417 3.07164 21.2658 2.45854 20.6545 1.84633C20.0432 1.23411 19.4291 0.858352 18.7067 0.577544C18.0065 0.305624 17.2068 0.119064 16.0366 0.066616C14.8637 0.013288 14.4887 0 11.5013 0C8.51395 0 8.13871 0.012408 6.96518 0.066616Z"
                            fill="#1B4E6B"
                          />
                        </g>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_130_741">
                        <rect
                          width="22"
                          height="22"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                {/* end of instagram logo */}

                {/* linkedin logo */}
                <div className="bg-secondary p-3 rounded-[25px]">
                  <svg
                    width="25"
                    height="23"
                    viewBox="0 0 25 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="LinkedIn logo" clip-path="url(#clip0_130_746)">
                      <path
                        id="Vector"
                        d="M0.5 2.61363C0.5 1.85604 0.767463 1.23104 1.30236 0.738635C1.83727 0.246204 2.53267 0 3.38851 0C4.22909 0 4.90918 0.242409 5.42881 0.727272C5.96371 1.22727 6.23118 1.87877 6.23118 2.68181C6.23118 3.40909 5.97137 4.01513 5.45174 4.49999C4.91684 4.99999 4.2138 5.24999 3.34266 5.24999H3.31974C2.47916 5.24999 1.79907 4.99999 1.27944 4.49999C0.759806 3.99999 0.5 3.3712 0.5 2.61363ZM0.798021 22.5V7.31817H5.88731V22.5H0.798021ZM8.70705 22.5H13.7963V14.0227C13.7963 13.4924 13.8575 13.0833 13.9797 12.7954C14.1937 12.2803 14.5185 11.8447 14.954 11.4886C15.3896 11.1326 15.936 10.9545 16.5931 10.9545C18.3049 10.9545 19.1607 12.0985 19.1607 14.3863V22.5H24.25V13.7954C24.25 11.553 23.7151 9.85226 22.6453 8.69317C21.5754 7.53408 20.1618 6.95453 18.4042 6.95453C16.4327 6.95453 14.8967 7.79544 13.7963 9.47726V9.52271H13.7734L13.7963 9.47726V7.31817H8.70705C8.73761 7.80301 8.7529 9.31058 8.7529 11.8409C8.7529 14.3712 8.73761 17.9242 8.70705 22.5Z"
                        fill="#1B4E6B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_130_746">
                        <rect
                          width="23.75"
                          height="22.5"
                          fill="white"
                          transform="translate(0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                {/* end of linkedin logo */}
              </div>
            </div>
            {/* end of share the listing desktop */}
          </div>
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
