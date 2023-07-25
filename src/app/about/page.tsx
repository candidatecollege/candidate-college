"use client";
import { Footer, Navbar } from "@/components";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <main className="bg-primary h-full">
      {/* Navbar */}
      <Navbar active="About Us" isDetail={false} />

      {/* Hero */}
      <section className="flex flex-col pt-[80px] px-5 md:max-w-6xl md:mx-auto md:justify-center md:items-center relative md:h-screen">
        <p className="text-gray text-sm md:text-center lg:text-base md:w-[40%]">
          Developing With Us
        </p>

        <h1 className="font-semibold text-white pt-4 text-3xl md:text-[70px] md:w-[70%] md:text-center leading-[110%]">
          Top Education Platform in Indonesia
        </h1>

        <p className="text-gray text-sm leading-7 pt-6 md:text-center lg:text-base md:w-[50%]">
          With us achieving dreams in building your education, together
          say&nbsp;
          <span className="underline">“Yes”</span> to extraordinary dreams
        </p>

        <Link
          href="/about"
          title="Get To Know About CC"
          about="Get To Know About CC"
          className="bg-secondary text-primary font-medium text-base rounded-full px-5 py-3 text-center cursor-pointer mt-6 md:mt-[31px]"
        >
          Get To Know About CC
        </Link>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default About;
