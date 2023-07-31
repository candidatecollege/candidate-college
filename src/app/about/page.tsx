"use client";
import { Footer, Navbar } from "@/components";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Image from "next/image";

const About = () => {
  const socials = [
    {
      id: 1,
      name: "Instagram",
      link: "https://www.instagram.com/candidate.college/",
      component: <InstagramIcon color="inherit" fontSize="inherit" />,
    },
    {
      id: 2,
      name: "Twitter",
      link: "https://twitter.com/CCollege_Ind",
      component: <TwitterIcon color="inherit" fontSize="inherit" />,
    },
    {
      id: 3,
      name: "Spotify",
      link: "https://open.spotify.com/show/0xhjenJefepCIKH5UeVyiE?si=08402adcbd92430b",
      component: <PodcastsIcon color="inherit" fontSize="inherit" />,
    },
    {
      id: 4,
      name: "Youtube",
      link: "https://www.youtube.com/channel/UCk2XANWkjfjc9K305H2WjrQ",
      component: <YouTubeIcon color="inherit" fontSize="inherit" />,
    },
  ];

  return (
    <main className="bg-primary h-full">
      {/* Navbar */}
      <Navbar active="About Us" isDetail={false} />

      {/* Hero */}
      <section className="flex flex-col w-full h-full lg:pt-[90px] md:pt-[165px] pt-[155px] px-5 py-12 md:max-w-6xl md:mx-auto justify-center md:items-center relative lg:h-screen">
        <p className="text-gray text-sm md:text-center lg:text-base md:w-[40%]">
          Developing With Us
        </p>

        <h1 className="font-semibold text-white pt-4 text-3xl md:text-[70px] xl:w-[70%] md:w-[90%] md:text-center leading-[110%]">
          Top Education Platform in Indonesia
        </h1>

        <p className="text-gray text-sm leading-7 md:pt-6 pt-4 md:text-center lg:text-base md:w-[50%]">
          With us achieving dreams in building your education, together
          say&nbsp;
          <span className="underline">“Yes”</span> to extraordinary dreams
        </p>

        <Link
          href="/about"
          title="Get To Know About CC"
          about="Get To Know About CC"
          className="bg-secondary text-primary font-semibold text-base rounded-full px-8 py-3 text-center md:self-center self-start cursor-pointer mt-6 md:mt-[31px]"
        >
          Get To Know About CC
        </Link>

        <ul className="flex flex-row mt-[38px] gap-6">
          {socials.map((social, index) => (
            <Link
              className="flex text-3xl bg-secondary text-primary w-12 h-12 justify-center items-center rounded-full font-normal"
              href={social.link}
              title={social.name}
              about={social.name}
              key={index}
            >
              {social.component}
            </Link>
          ))}
        </ul>
      </section>

      {/* Work With Us */}
      <section className="w-full h-full flex lg:flex-row flex-col gap-6 bg-white md:px-[70px] px-5 pt-[90px]">
        <div className="flex items-center md:m-auto relative md:w-[520px] w-full h-[308px] p-6 bg-primary rounded-3xl overflow-hidden">
          <div className="flex flex-col xl:w-[55%] w-[50%]">
            <p className="text-[#90A3BF] xl:text-[15px] text-sm font-normal">
              Let's Development
            </p>
            <h2 className="text-white xl:text-[40px] text-[36px] font-bold">
              Work With Us
            </h2>
            <p className="text-[#90A3BF] xl:text-[15px] text-sm font-normal leading-7">
              Together we build your Product
            </p>
          </div>
          <Image
            src="/decoration/half-ellipse-gradient.svg"
            alt=""
            className="absolute top-[20%!important] object-contain"
            fill={true}
          />
          <Image
            src="/decoration/woman.png"
            alt=""
            className="absolute object-contain"
            fill={true}
            objectPosition="right"
          />
        </div>
        <div className="flex md:flex-row flex-col md:gap-0 gap-[30px] items-center justify-between w-full md:px-10 px-5 xl:py-[50px] py-10 bg-[#F8F8F8] rounded-3xl">
          <div className="flex flex-col justify-evenly basis-1/4 md:text-left text-center">
            <h2 className="text-primary xl:text-[40px] text-[36px] font-semibold leading-tight">
              Trusted Partner
            </h2>
            <p className="text-[#90A3BF] xl:text-base text-sm font-normal pt-[10px] leading-7">
              Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
            </p>
          </div>
          <div className="flex xl:flex-row md:flex-col flex-row xl:basis-1/2 basis-1/4 xl:justify-center justify-evenly items-center xl:gap-9 md:gap-0 gap-4">
            <div>
              <p className="text-primary xl:text-[40px] text-[36px] font-extrabold leading-normal text-center">
                200+
              </p>
              <p className="text-[#90A3BF] xl:text-base text-sm font-normal leading-7 text-center">
                Partners Collab
              </p>
            </div>
            <div>
              <p className="text-primary xl:text-[40px] text-[36px] font-extrabold leading-normal text-center">
                1,230
              </p>
              <p className="text-[#90A3BF] xl:text-base text-sm font-normal leading-7 text-center">
                Success Events
              </p>
            </div>
          </div>
          <div className="flex basis-auto justify-end items-center">
            <Link
              href="/"
              className="bg-secondary text-primary font-semibold text-base rounded-full md:px-8 px-[50px] py-3 text-center cursor-pointer inline-block self-center shadow-[0_25px_30px_0px_rgba(0,_65,_232,_0.10)]"
            >
              Let's work
            </Link>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="w-full h-full bg-white md:px-[70px] px-5 pt-[65px] pb-[80px]">
        <h3 className="text-[#90A3BF] xl:text-base text-sm font-normal text-center">
          Events
        </h3>
        <h2 className="text-primary xl:text-[40px] text-[36px] font-semibold text-center pt-[10px]">
          Success Events
        </h2>
        <p className="text-[#90A3BF] xl:text-base text-sm font-normal leading-7 text-center m-auto w-2/4 pt-[15px]">
          Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
          Terabel pov astrobel sar direlig.Lörem ipsum astrobel sar direlig.
          Kronde est
        </p>

        <div className="grid grid-cols-4 grid-rows-2 gap-6 pt-10">
          <div className="flex items-end relative overflow-hidden w-full bg-[url('/decoration/event-1.png')] bg-no-repeat bg-cover aspect-square col-span-2 row-span-2 rounded-3xl p-10">
            <div className="flex items-center z-20">
              <div className="flex-1">
                <h4 className="text-white xl:text-[32px] text-[30px] font-semibold">
                  Website Design
                </h4>
                <p className="text-[#D1D4DC] xl:text-base text-sm font-normal pt-3 leading-[25px]">
                  Lörem ipsum astrobel sar direlig. Kronde est konfoni med
                  kelig. Terabel pov astrobel sar
                </p>
              </div>
              <div className="flex-1 text-end">
                <Link
                  href="/"
                  className="bg-transparent border-[1px] border-white text-white font-medium text-base rounded-full px-8 py-3 inline-block shadow-[0_25px_30px_0px_rgba(0,_65,_232,_0.10)]"
                >
                  Let's Join
                </Link>
              </div>
            </div>
            <div className="absolute pt-[60px] bg-[linear-gradient(to_top,_rgba(0,0,0,0.85),_transparent)] w-full h-[40%] bottom-0 left-0 z-10"></div>
          </div>
          <div className="flex items-end relative overflow-hidden w-full bg-[url('/decoration/event-2.png')] bg-no-repeat bg-cover col-span-2 col-start-3 rounded-3xl p-5">
            <div className="flex items-center z-20">
              <div className="basis-3/4">
                <h4 className="text-white xl:text-2xl text-[30px] font-semibold">
                  Website Design
                </h4>
                <p className="text-[#D1D4DC] xl:text-base text-sm font-normal pt-3 leading-7">
                  Lörem ipsum astrobel sar direlig. Kronde est konfoni med
                  kelig. Terabel pov astrobel sar
                </p>
              </div>
            </div>
            <div className="absolute pt-[60px] bg-[linear-gradient(to_top,_rgba(0,0,0,0.85),_transparent)] w-full h-full bottom-0 left-0 z-10"></div>
          </div>
          <div className="flex items-end relative overflow-hidden w-full bg-[url('/decoration/event-3.png')] bg-no-repeat bg-cover col-span-2 col-start-3 row-start-2 rounded-3xl p-5">
            <div className="flex items-center z-20">
              <div className="basis-3/4">
                <h4 className="text-white xl:text-2xl text-[30px] font-semibold">
                  Website Design
                </h4>
                <p className="text-[#D1D4DC] xl:text-base text-sm font-normal pt-3 leading-7">
                  Lörem ipsum astrobel sar direlig. Kronde est konfoni med
                  kelig. Terabel pov astrobel sar
                </p>
              </div>
            </div>
            <div className="absolute pt-[60px] bg-[linear-gradient(to_top,_rgba(0,0,0,0.85),_transparent)] w-full h-full bottom-0 left-0 z-10"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default About;
