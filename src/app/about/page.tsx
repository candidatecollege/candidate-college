"use client";
import { Footer, Navbar } from "@/components";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import YouTubeIcon from "@mui/icons-material/YouTube";

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
          className="bg-secondary text-primary font-medium text-base rounded-full px-8 py-3 text-center md:self-center self-start cursor-pointer mt-6 md:mt-[31px]"
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
      <section className="w-full h-full flex lg:flex-row flex-col gap-6 bg-white px-10 pt-[90px] pb-[65px] md:py-20">
        <div className="min-w-[364px] h-[308px] bg-primary rounded-3xl"></div>
        <div className="flex justify-between w-full h-[308px] px-10 xl:py-[50px] py-10 bg-[#F8F8F8] rounded-3xl">
          <div className="flex flex-col justify-evenly basis-1/4">
            <h2 className="text-primary xl:text-[40px] text-[36px] font-semibold leading-tight">
              Trusted Partner
            </h2>
            <p className="text-[#90A3BF] xl:text-base text-sm font-normal leading-7">
              Lörem ipsum astrobel sar direlig. Kronde est konfoni med kelig.
            </p>
          </div>
          <div className="flex xl:flex-row flex-col xl:basis-1/2 basis-1/4 xl:justify-center justify-evenly items-center xl:gap-9 gap-0">
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
              className="bg-secondary text-primary font-medium text-base rounded-full px-8 py-3 text-center cursor-pointer inline-block self-center shadow-[0_25px_30px_0px_rgba(0,_65,_232,_0.10)]"
            >
              Let's work
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default About;
