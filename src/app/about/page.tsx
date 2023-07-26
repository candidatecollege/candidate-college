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
      <section className="w-full h-full bg-white px-5 py-10 md:py-20 flex flex-col gap-9 md:items-center md:justify-center"></section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default About;
