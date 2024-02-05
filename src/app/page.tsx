"use client";
import { CTA, CardItem, Footer, Navbar } from "@/components";
import Link from "next/link";
import Image from "next/image";
import {
  articleSectionOnLanding,
  eventSectionOnLanding,
  valueSectionOnLanding,
  values,
} from "@/data/staticData";
import { articles, articlesOnLanding } from "@/data/articleData";
import "./scrollable.css";
import { useEffect, useState, useRef } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";

import "../styles/swiper-about.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import ButtonCountdown from "@/components/main/eventSection/molecule/atom/ButtonCountdown";
import ButtonType from "@/components/main/eventSection/molecule/atom/ButtonType";
import ButtonWrapper from "@/components/main/eventSection/molecule/ButtonWrapper";
import ArrowWrapper from "@/components/main/eventSection/molecule/ArrowWrapper";

export type Event = {
  start_date_time: string;
  slug: string;
  cover: string;
  type: string;
  name: string;
  snippets: string;
};

export type EventCountdowns = {
  [slug: string]: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
};

export default function Home() {
  const [articles, setArticles] = useState<any[]>([]);
  const [isLoadingArticles, setIsLoadingArticles] = useState<boolean>(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoadingEvents, setIsLoadingEvents] = useState<boolean>(false);

  const [eventStartTime, setEventStartTime] = useState(0); // Initialize with 0 or the actual start time from the API
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [eventCountdowns, setEventCountdowns] = useState<EventCountdowns>({});
  const loadingContent = [1, 2, 3, 4, 5, 6];

  const fetchArticles = async () => {
    setIsLoadingArticles(true);

    try {
      const response = await axios.get(`/api/articles?count=8`);

      setTimeout(() => {
        setArticles(response.data.data);
        setIsLoadingArticles(false); // After setting the data, set isLoading to false
      }, 1500);

      console.log(response);
    } catch (error) {
      console.error(error);
      setIsLoadingArticles(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("/api/events");
      const eventData = response.data.data; // Get the data from the response
      setEvents(eventData);
      setIsLoadingEvents(false);

      // Calculate and set the countdown for each event
      const now = new Date().getTime();
      const countdowns: { [key: string]: any } = {};

      eventData.forEach((event: any) => {
        // Specify the type of 'event' as 'any'
        const eventStartTime = new Date(event.start_date_time).getTime();
        const timeDifference = eventStartTime - now;

        if (timeDifference <= 0) {
          // Event has started, set countdown to 0
          countdowns[event.slug] = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          };
        } else {
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

          countdowns[event.slug] = {
            days,
            hours,
            minutes,
            seconds,
          };
        }
      });

      setEventCountdowns(countdowns);
    } catch (error) {
      console.error("Error fetching events:", error);
      setIsLoadingEvents(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Function to calculate and update the countdown for a specific event
  const updateCountdownForEvent = (eventSlug: any, startTime: any) => {
    const now = new Date().getTime();
    const timeDifference = startTime - now;

    if (timeDifference <= 0) {
      // Event has started, set countdown to 0
      setEventCountdowns((prevCountdowns) => ({
        ...prevCountdowns,
        [eventSlug]: {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        },
      }));
    } else {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setEventCountdowns((prevCountdowns) => ({
        ...prevCountdowns,
        [eventSlug]: {
          days,
          hours,
          minutes,
          seconds,
        },
      }));
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    // Update the countdown for each event
    for (const event of events) {
      const eventStartTime = new Date(event.start_date_time).getTime();
      updateCountdownForEvent(event.slug, eventStartTime);
    }

    // Set up an interval to update the countdown every second
    const countdownInterval = setInterval(() => {
      for (const event of events) {
        const eventStartTime = new Date(event.start_date_time).getTime();
        updateCountdownForEvent(event.slug, eventStartTime);
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(countdownInterval);
  }, [events]);

  return (
    <main className="bg-primary h-full">
      {/* Navbar */}
      <Navbar active="Home" isDetail={false} />

      {/* Hero */}
      <section className="flex flex-col pt-36 gap-4 px-5 md:max-w-6xl md:mx-auto py-12 bg-primary md:justify-center md:items-center relative h-fit md:h-screen">
        <h1 className="font-semibold text-white text-3xl md:text-[70px] md:w-[90%] md:text-center md:leading-[100%] leading-[150%]">
          Achieve Quality Equally For All Indonesian Student.
        </h1>

        <p className="text-gray text-sm md:text-center lg:text-base md:w-[40%]">
          Candidate College is an Education Platform that works to facilitate
          students in Indonesia at home and aboard to achieve a quality
          education system.
        </p>

        <Link
          href="/coming"
          title="Get To Know About CC"
          about="Get To Know About CC"
          className="bg-secondary text-primary font-medium text-base rounded-full px-5 py-3 text-center cursor-pointer md:w-1/4 mt-6 md:mt-0"
        >
          Get To Know About CC
        </Link>

        <Link
          href="/coming"
          title="See Events on Candidate College"
          about="See Events on Candidate College"
          className="bg-transparent text-gray font-normal -mt-3 text-base rounded-full px-5 py-3 text-center cursor-pointer md:w-1/4"
        >
          See Events
        </Link>
      </section>

      {/* Values */}
      <section className="w-full h-full bg-white px-5 py-10 md:py-20 flex flex-col gap-9 md:items-center md:justify-center">
        <div className="flex flex-col gap-2 w-full md:items-center md:justify-center">
          <h3 className="text-primary text-xs md:text-base font-medium uppercase">
            {valueSectionOnLanding.subtitle}
          </h3>
          <h2 className="text-secondary text-2xl md:text-[40px] font-medium w-[20rem] md:w-[30rem] md:leading-[40px] md:text-center">
            {valueSectionOnLanding.title}
          </h2>
          <p className="text-gray text-sm md:text-center lg:text-base md:w-[40%]">
            {valueSectionOnLanding.description}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 items-center justify-center"
            >
              <Image
                src={`/decoration/${value.image}`}
                title={value.desc}
                alt={value.desc}
                className={`w-[13rem] h-[13rem] ${
                  value.id == 2 || value.id == 3
                    ? "md:w-[20rem] md:h-[20rem]"
                    : "md:w-[18rem] md:h-[18rem]"
                } object-contain`}
                width={0}
                height={0}
              />
              <p className="text-gray text-sm text-center lg:text-base md:w-[80%]">
                {value.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 md:w-full md:items-center md:justify-center mt-6 md:mt-0">
          <Link
            href="/coming"
            title="See Our Events/Programs"
            about="See Our Events/Programs"
            className="bg-secondary text-primary font-medium text-base rounded-full px-5 py-3 text-center cursor-pointer md:w-1/4"
          >
            See Candidate College Events
          </Link>
        </div>
      </section>

      {/* Articles */}
      <section className="w-full h-full bg-white px-5 py-10 md:py-10 flex flex-col gap-9 -mt-1 md:px-10 overflow-hidden">
        <div className="flex flex-col gap-2 w-full md:px-10">
          <h3 className="text-primary text-xs md:text-base font-medium uppercase">
            {articleSectionOnLanding.subtitle}
          </h3>
          <div className="flex flex-col gap-2 md:flex-row md:gap-20 md:items-center">
            <h2 className="text-secondary text-2xl md:text-[40px] font-medium w-[20rem] md:w-[30rem] md:leading-[40px]">
              {articleSectionOnLanding.title}
            </h2>
            <p className="text-gray text-sm lg:text-base md:w-[40%]">
              {articleSectionOnLanding.description}
            </p>
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            // Adjust the number of slides per view for different screen widths
            // When the screen width is less than 640px (typical mobile width), show only 1 slide
            0: {
              slidesPerView: 1,
            },
            // For larger screens, revert to 3 slides per view
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {isLoadingArticles
            ? loadingContent?.map((article, index) => (
                <SwiperSlide>
                  <div className="flex flex-col gap-2 rounded-xl bg-white shadow-md cursor-pointer">
                    <div className="rounded-lg w-[22rem] h-[22rem] bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"></div>

                    <div className="flex flex-col gap-2 pt-3 pb-5 relative px-5">
                      <div className="bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse w-2/3 rounded-lg py-3"></div>

                      <div className="flex flex-col gap-1 w-full">
                        <div className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"></div>
                        <div className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"></div>
                        <div className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"></div>
                        <div className="w-2/3 py-2 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse"></div>
                      </div>

                      <Link
                        href="/articles"
                        title="Read More"
                        about="Read More"
                        className="bg-secondary text-transparent font-medium text-sm rounded-full py-3 text-center cursor-pointer mt-5 bg-gradient-to-r from-yellow-200 to-yellow-300 animate-pulse"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            : articles?.map((article, index) => (
                <SwiperSlide>
                  <Link
                    href={`/articles/${article.slug}`}
                    title="Read More"
                    about="Read More"
                    className="flex flex-col gap-2 rounded-xl bg-white shadow-md cursor-pointer w-[22rem]"
                  >
                    <Image
                      src={`/uploads/${article.cover}`}
                      alt={article.title}
                      title={article.title}
                      className="rounded-lg w-[22rem] h-[22rem] object-cover"
                      width={0}
                      height={0}
                    />

                    <div className="flex flex-col gap-2 pt-3 pb-5 relative px-5">
                      <h3 className="font-semibold text-base text-primary">
                        {article.title.length > 33
                          ? article.title.substring(0, 33) + "..."
                          : article.title}
                      </h3>
                      <p className="font-normal text-sm text-gray">
                        {article.snippets.substring(0, 150) + "..."}
                      </p>
                      <Link
                        href={`/articles/${article.slug}`}
                        title="Read More"
                        about="Read More"
                        className="bg-secondary text-primary font-medium text-sm rounded-full py-3 text-center cursor-pointer mt-5"
                      >
                        Read More
                      </Link>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
        </Swiper>

        <div className="flex flex-col gap-4 md:w-full md:items-center md:justify-center mt-6 md:mt-0">
          <Link
            href="/articles"
            title="Read More Articles"
            about="Read More Articles"
            className="bg-secondary text-primary font-medium text-base rounded-full px-5 py-3 text-center cursor-pointer md:w-1/4"
          >
            Read More Articles
          </Link>
        </div>
      </section>

      {/* Events */}

      <section className="flex flex-col w-full h-full bg-white pt-[100px] pb-40">
        <h3 className="text-primary md:px-[70px] xl:text-base text-sm font-normal text-center">
          Our Events
        </h3>
        <h2 className="text-secondary md:px-[70px] xl:text-[40px] text-[35px] font-semibold text-center">
          Join and Develop With Us
        </h2>
        <p className="text-primary text-base md:text-[18px] font-normal leading-6 text-center m-auto lg:w-4/6 md:w-3/4 w-[95%] pt-[15px]">
          Engage in enriching experiences that foster growth. Join us for
          insightful sessions, workshops, and more. Don't miss out!
        </p>

        <div className="mt-[105px] w-full m-auto">
          <Swiper
            slidesPerView={"auto"}
            // spaceBetween={55}
            centeredSlides={false}
            grabCursor={true}
            initialSlide={1}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: "auto",
                spaceBetween: 30,
              },
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation]}
            className="swiper_container !overflow-y-visible flex justify-center"
          >
            {isLoadingEvents
              ? loadingContent.map((_, index) => (
                  <SwiperSlide
                    key={index}
                    className="!w-[580px] rounded-[24px] shadow-[0_0px_15px_3px_rgba(0,_0,_0,_0.1)] mx-5 lg:mx-0"
                  >
                    <div className="w-full h-full rounded-[24px] py-5 px-[20px] bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.2)]">
                      <div className="flex flex-col md:flex-row lg:flex-row justify-start mb-[60px] lg:mb-[88px] mt-8">
                        <button className="bg-secondary text-primary w-max rounded-[20px] px-6 py-2 text-sm font-semibold lg:mr-4"></button>
                        <button className="bg-secondary text-primary w-max mt-3 xl:mt-0 rounded-[20px] px-6 py-2 text-sm font-semibold"></button>
                      </div>
                      <h5 className="text-[#FFFFFF] xl:text-[26px] text-2xl font-semibold leading-[26px] text-left mb-3"></h5>
                      <p className="text-[#FFFFFF] xl:text-lg text-sm font-normal leading-[26px] text-left mb-8"></p>
                    </div>
                  </SwiperSlide>
                ))
              : events.map((event) => (
                  <SwiperSlide
                    key={event.slug}
                    className="!max-w-[580px] !h-[389px] rounded-[24px] shadow-[0_0px_15px_3px_rgba(0,_0,_0,_0.1)] mx-5 lg:mx-0"
                    style={{
                      backgroundImage: `url(/uploads/${event.cover})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="w-full h-full rounded-[24px] py-5 px-[20px] bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.2)]">
                      <Link href={`/events/${event.slug}`}>
                        <ButtonWrapper
                          event={event}
                          eventCountdowns={eventCountdowns}
                        />
                        <h5 className="text-[#FFFFFF]  text-[24px]  font-semibold leading-[26px] text-left mb-3">
                          <div className="inline sm:hidden">
                            {event.name.substring(0, 48) + "..."}
                          </div>
                          <div className="hidden sm:inline">{event.name}</div>
                        </h5>
                        <p className="text-[#FFFFFF] text-[16px] text-sm font-normal leading-[24px] text-left mb-8">
                          <div className="inline sm:hidden">
                            {event.snippets.substring(0, 32) + "..."}
                          </div>
                          <div className="hidden sm:inline">
                            {event.snippets}
                          </div>
                        </p>
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}

            <ArrowWrapper />
          </Swiper>
        </div>
      </section>
      {/* End of New Events */}

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
