"use client";
import { CTA, Footer, Navbar } from "@/components";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/swiper-about.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

// Import React Modules
import React, {useState, useEffect} from 'react';

// Import Function
import { formatEndpointText } from "../../utils/formatEndpointText";

// Initialized Data Types Used for Current Event Data 
interface EventType {
  name: string,
  snippets: string,
  link_registration: string,
  cover: string,
  cover_landscape: string
}

const About = ( ) => {
  // Variable that Saves Event Data According to Their Upcoming Order
  const [firstEvent, setFirstEvent] = useState<EventType[]>([]);
  const [secondEvent, setSecondEvent] = useState<EventType[]>([]);
  const [thirdEvent, setThirdEvent] = useState<EventType[]>([]);

  useEffect(() => {
    // Cut Sentence in Snippets Data to 14 Words
    const truncatedSnippetsData = (eventsData: any) => {
      return eventsData.map((data : any) => {
        const snippets = data.snippets.split(' ');
        const truncateSnippets = snippets.length > 14 ? `${snippets.slice(0, 14).join(' ')} ...` : data.snippets;
        return { ...data, snippets: truncateSnippets}
      })
    }

    // Retrieve 3 Upcoming Events From API
    const CurrentEvents = async() => {
      try {
        const response = await fetch("https://candidate-college.vercel.app/api/events");
        const jsonData = await response.json();

        // Sort Event Data Based on Upcoming "start_date_time" Property
        const today = new Date();
        const sortedData = jsonData.data.filter((event: any) => new Date(event.start_date_time) >= today);
        sortedData.sort((dataA: any, dataB: any) => new Date(dataA.start_date_time).getTime() - new Date(dataB.start_date_time).getTime());
        
        const firstEventData = truncatedSnippetsData(sortedData.slice(0, 1));
        const secondEventData = truncatedSnippetsData(sortedData.slice(1, 2));
        const thirdEventData = truncatedSnippetsData(sortedData.slice(2, 3));
        
        setFirstEvent(firstEventData);
        setSecondEvent(secondEventData);
        setThirdEvent(thirdEventData);
      }
      catch(error) {
        console.log("Error Fetching Data : ", error);
      }
    }
    CurrentEvents();
  }, [])

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

  const divisions = [
    { id: 1, url: "/decoration/division.jpg", slug: "web-development" },
    { id: 2, url: "/decoration/division.jpg", slug: "academic-development" },
    { id: 3, url: "/decoration/division.jpg", slug: "people-and-culture" },
    { id: 4, url: "/decoration/division.jpg", slug: "talent-engagement" },
    { id: 5, url: "/decoration/division.jpg", slug: "social-media-specialist"},
    { id: 6, url: "/decoration/division.jpg", slug: "social-media-editor"},
    { id: 7, url: "/decoration/division.jpg", slug: "content-writer"},
  ];

  return (
    <main className="bg-primary h-full">
      {/* Navbar */}
      <Navbar active="About Us" isDetail={false} />

      {/* Hero */}
      <section className="flex flex-col w-full h-full lg:pt-[90px] md:pt-[165px] pt-[155px] px-5 py-12 md:max-w-6xl md:mx-auto justify-center md:items-center relative lg:h-screen bg-primary">
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
      <section className="w-full h-full bg-white md:px-[70px] px-5 pt-[65px]">
        <h3 className="text-[#90A3BF] xl:text-base text-sm font-normal text-center">
          Events
        </h3>
        <h2 className="text-primary xl:text-[40px] text-[36px] font-semibold text-center pt-[10px]">
          Success Events
        </h2>
        <p className="text-[#90A3BF] xl:text-base text-sm font-normal leading-7 text-center m-auto lg:w-3/4 xxsm:w-11/12 w-[95%] pt-[15px]">
        Exciting events are waiting to enrich your learning journey, from inspiring seminars to practical workshops designed to help you develop your best potential in the academic world.
        </p>
        
        {/* List of Upcoming Events */}
        <div className="grid lg:grid-cols-4 grid-cols-1 lg:grid-rows-2 grid-rows-1 gap-6 pt-10">
          {/* First Event */}
          {firstEvent.map(item => (
            <div className="flex items-end relative overflow-hidden w-full bg-no-repeat bg-cover aspect-square col-span-2 row-span-2 rounded-3xl md:p-10 p-[25px]" style={{backgroundImage: (`url(https://candidate-college.vercel.app/uploads/${item.cover})`)}}>
              <div className="flex md:flex-row flex-col md:items-center items-start z-20"> 
              <div className="flex-1">
                <h4 className="text-white lg:text-[22px] xxsm:text-[20px] font-semibold">
                  {item.name}
                </h4>
                <p className="text-[#D1D4DC] xl:text-base lg:text-[12px] xxsm:text-[14px] font-normal pt-3 leading-[25px]">
                  {item.snippets}
                </p>
              </div>
              <div className="flex-1 text-end">
                <Link
                  href={item.link_registration}
                  className="bg-transparent border-[1px] border-white text-white font-medium text-base rounded-full px-8 py-3 md:mt-0 mt-5 inline-block shadow-[0_25px_30px_0px_rgba(0,_65,_232,_0.10)]"
                >
                  Let's Join
                </Link>
              </div>
              </div>
            <div className="absolute pt-[20px] bg-[linear-gradient(to_top,_rgba(0,0,0,1),_transparent)] w-full h-full bottom-0 left-0 z-10 lg:backdrop-blur-[1.8px] xsm:backdrop-blur-[1.8px] xxsm:backdrop-blur-[3.4px]"></div>
            </div>
          ))}
          {/* Second Event */}
          {secondEvent.map(item => (
            <div className="lg:flex hidden items-end relative overflow-hidden w-full bg-no-repeat bg-cover col-span-2 col-start-3 rounded-3xl p-5" style={{backgroundImage: (`url(https://candidate-college.vercel.app/uploads/${item.cover_landscape})`)}}>
              <div className="flex items-center z-20">
                <div className="basis-3/4">
                  <h4 className="text-white text-[16px] font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-[#D1D4DC] text-[12px] font-normal pt-3 leading-7">
                    {item.snippets}
                  </p>
                </div>
              </div>
                <div className="absolute pt-[60px] bg-[linear-gradient(to_top,_rgba(0,0,0,1),_transparent)] w-full h-full bottom-0 left-0 z-10 backdrop-blur-[1.4px]"></div>
            </div>
          ))}
          {/* Third Event */}
          {thirdEvent.map(item => (
            <div className="lg:flex hidden items-end relative overflow-hidden w-full bg-[url('/decoration/event-3.png')] bg-no-repeat bg-cover col-span-2 col-start-3 row-start-2 rounded-3xl p-5" style={{backgroundImage: (`url(https://candidate-college.vercel.app/uploads/${item.cover_landscape})`)}}>
              <div className="flex items-center z-20">
                <div className="basis-3/4">
                  <h4 className="text-white text-[16px] font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-[#D1D4DC] text-[12px] font-normal pt-3 leading-7">
                    {item.snippets}
                  </p>
                </div>
              </div>
              <div className="absolute pt-[60px] bg-[linear-gradient(to_top,_rgba(0,0,0,1),_transparent)] w-full h-full bottom-0 left-0 z-10 backdrop-blur-[1.4px]"></div>
            </div>
          ))}
        </div>
        {/* Other Events  */}
        <div className="flex justify-center md:pt-10 pt-8">
          <Link
            href="/"
            className="bg-secondary text-primary font-semibold text-base rounded-full px-8 py-3 text-center inline-block"
          >
            See Our Events
          </Link>
        </div>
      </section>

      {/* Divisions */}
      <section className="w-full h-full bg-white md:px-[70px] px-5 pt-[70px]">
        <h3 className="text-[#90A3BF] xl:text-base text-sm font-normal text-center">
          Divisions
        </h3>
        <h2 className="text-primary xl:text-[40px] text-[36px] font-semibold text-center pt-[10px]">
          Divisions Who Support CC
        </h2>
        <p className="text-[#90A3BF] xl:text-lg text-sm font-normal leading-7 text-center m-auto lg:w-4/6 md:w-3/4 w-[95%] pt-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>

        <div className="mt-[55px] mx-auto mb-0">
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
            {divisions.map((division, index) => (
              <SwiperSlide className="!w-[550px] !h-[550px] relative">
                <Link href={`/about/division/${division.slug}`}>
                  <img
                    src={division.url}
                    key={index}
                    title={formatEndpointText(division.slug)}
                    alt="slide_image"
                    className="w-[550px] h-[550px] object-cover rounded-sm shadow-[0_10px_20px_0px_rgba(0,_0,_0,_0.15)]"
                  />
                </Link>
              </SwiperSlide>
            ))}
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow bg-secondary !w-[70px] !h-[70px] rounded-full left-0">
                <ArrowBackIosNewIcon className="!w-[2rem] text-primary" />
              </div>
              <div className="swiper-button-next slider-arrow bg-secondary !w-[70px] !h-[70px] rounded-full right-0">
                <ArrowForwardIosIcon className="!w-[2rem] text-primary" />
              </div>
            </div>
          </Swiper>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full h-full bg-white pt-[100px] pb-40">
        <h3 className="text-[#90A3BF] md:px-[70px] xl:text-base text-sm font-normal text-center">
          Testimonials
        </h3>
        <h2 className="text-primary md:px-[70px] px-5 xl:text-[40px] text-[36px] font-semibold text-center pt-[10px]">
          What Our Interns Say
        </h2>
        <p className="text-[#90A3BF] md:px-[70px] px-5 xl:text-lg text-sm font-normal leading-7 text-center m-auto lg:w-4/6 md:w-3/4 w-[95%] pt-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>

        <div className="mt-[105px] w-full">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={55}
            centeredSlides={true}
            grabCursor={true}
            initialSlide={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation]}
            className="swiper_container !overflow-y-visible"
          >
            {/* Shadow yang digunakan belum mengikuti yang di Figma */}
            <SwiperSlide className="bg-white relative !w-[580px] rounded-[42px] shadow-[0_0px_15px_3px_rgba(0,_0,_0,_0.1)] pt-20 pb-5 px-[65px]">
              <div className="flex justify-center">
                <Image
                  src="/decoration/avatar-1.png"
                  alt="Avatar"
                  className="absolute top-[-40px] object-contain"
                  width={88}
                  height={88}
                />
              </div>
              <p className="text-[#90A3BF] xl:text-lg text-sm font-normal leading-[26px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <h5 className="text-secondary pt-5 xl:text-[26px] text-sm font-semibold leading-[26px] text-center">
                Mike Torello
              </h5>
              <h6 className="text-primary text-xs font-medium leading-[26px] text-center">
                Executive Engineer
              </h6>
            </SwiperSlide>
            <SwiperSlide className="bg-white relative !w-[580px] rounded-[42px] shadow-[0_0px_15px_3px_rgba(0,_0,_0,_0.1)] pt-20 pb-5 px-[65px]">
              <div className="flex justify-center">
                <Image
                  src="/decoration/avatar-2.png"
                  alt="Avatar"
                  className="absolute top-[-40px] object-contain"
                  width={88}
                  height={88}
                />
              </div>
              <p className="text-[#90A3BF] xl:text-lg text-sm font-normal leading-[26px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <h5 className="text-secondary pt-5 xl:text-[26px] text-sm font-semibold leading-[26px] text-center">
                Rick Wright
              </h5>
              <h6 className="text-primary text-xs font-medium leading-[26px] text-center">
                Executive Engineer
              </h6>
            </SwiperSlide>
            <SwiperSlide className="bg-white relative !w-[580px] rounded-[42px] shadow-[0_0px_15px_3px_rgba(0,_0,_0,_0.1)] pt-20 pb-5 px-[65px]">
              <div className="flex justify-center">
                <Image
                  src="/decoration/avatar-3.png"
                  alt="Avatar"
                  className="absolute top-[-40px] object-contain"
                  width={88}
                  height={88}
                />
              </div>
              <p className="text-[#90A3BF] xl:text-lg text-sm font-normal leading-[26px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <h5 className="text-secondary pt-5 xl:text-[26px] text-sm font-semibold leading-[26px] text-center">
                Devon Miles
              </h5>
              <h6 className="text-primary text-xs font-medium leading-[26px] text-center">
                Executive Engineer
              </h6>
            </SwiperSlide>
            <div className="slider-controler relative bottom-[-4rem] flex items-center justify-center">
              <div className="swiper-button-prev slider-arrow bg-secondary !w-[70px] !h-[70px] rounded-full !left-[40%] !translate-x-[40%]">
                <ArrowBackIosNewIcon className="!w-[2rem] text-primary" />
              </div>
              <div className="swiper-button-next slider-arrow bg-secondary !w-[70px] !h-[70px] rounded-full !left-[55%] !translate-x-[-55%]">
                <ArrowForwardIosIcon className="!w-[2rem] text-primary" />
              </div>
            </div>
          </Swiper>
        </div>
      </section>

      <CTA />

      {/* Footer */}
      <div className="w-full bg-primary">
      <Footer />
      </div>
    </main>
  );
};

export default About;
