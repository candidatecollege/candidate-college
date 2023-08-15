'use client'
import { CTA, CardItem, Footer, Navbar } from '@/components'
import Link from 'next/link'
import Image from 'next/image'
import { articleSectionOnLanding, eventSectionOnLanding, valueSectionOnLanding, values } from '@/data/staticData'
import { articles, articlesOnLanding } from '@/data/articleData'
import "./scrollable.css";
import { useEffect, useState, useRef } from 'react'
import axios from 'axios';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Home() {
  const [articles, setArticles] = useState<any[]>([])
  const [isLoadingArticles, setIsLoadingArticles] = useState<boolean>(false)
  const loadingContent = [1, 2, 3, 4, 5, 6]

  const fetchArticles = async () => {
    setIsLoadingArticles(true)

    try {
      const response = await axios.get(`https://resource.candidatecollegeind.com/api/articles`)

      setTimeout(() => {
        setArticles(response.data.data);
        setIsLoadingArticles(false); // After setting the data, set isLoading to false
      }, 1500);
    } catch (error) {
      console.error(error)
      setIsLoadingArticles(false)
    }
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <main className="bg-primary h-full">
      {/* Navbar */}
      <Navbar active='Home' isDetail={false} />
      
      {/* Hero */}
      <section className="flex flex-col pt-36 gap-4 px-5 md:max-w-6xl md:mx-auto py-12 bg-primary md:justify-center md:items-center relative h-fit md:h-screen">
        <h1 className="font-semibold text-white text-3xl md:text-[70px] md:w-[90%] md:text-center md:leading-[100%] leading-[150%]">
        Achieve Quality Equally For All Indonesian Student.
        </h1>

        <p className="text-gray text-sm md:text-center lg:text-base md:w-[40%]">
        Candidate College is an Education Platform that works to facilitate students in Indonesia at home and aboard to achieve a quality education system.
        </p>

        <Link href='/coming' title='Get To Know About CC' about='Get To Know About CC' className='bg-secondary text-primary font-medium text-base rounded-full px-5 py-3 text-center cursor-pointer md:w-1/4 mt-6 md:mt-0'>Get To Know About CC</Link>

        <Link href='/coming' title='See Events on Candidate College' about='See Events on Candidate College' className='bg-transparent text-gray font-normal -mt-3 text-base rounded-full px-5 py-3 text-center cursor-pointer md:w-1/4'>See Events</Link>
      </section>

      {/* Values */}
      <section className="w-full h-full bg-white px-5 py-10 md:py-20 flex flex-col gap-9 md:items-center md:justify-center">
        <div className="flex flex-col gap-2 w-full md:items-center md:justify-center">
          <h3 className="text-primary text-xs md:text-base font-medium uppercase">{valueSectionOnLanding.subtitle}</h3>
          <h2 className='text-secondary text-2xl md:text-[40px] font-medium w-[20rem] md:w-[30rem] md:leading-[40px] md:text-center'>{valueSectionOnLanding.title}</h2>
          <p className="text-gray text-sm md:text-center lg:text-base md:w-[40%]">
          {valueSectionOnLanding.description}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          {
            values.map((value, index) => (
              <div key={index} className="flex flex-col gap-1 items-center justify-center">
                <Image 
                  src={`/decoration/${value.image}`}
                  title={value.desc}
                  alt={value.desc}
                  className= {`w-[13rem] h-[13rem] ${value.id == 2 || value.id == 3? 'md:w-[20rem] md:h-[20rem]' : 'md:w-[18rem] md:h-[18rem]'} object-contain`}
                  width={0}
                  height={0}
                />
                <p className="text-gray text-sm text-center lg:text-base md:w-[80%]">
                {value.desc}
                </p>
              </div>
            ))
          }
        </div>

        <div className="flex flex-col gap-4 md:w-full md:items-center md:justify-center mt-6 md:mt-0">
          <Link href='/coming' title='See Our Events/Programs' about='See Our Events/Programs' className='bg-secondary text-primary font-medium text-base rounded-full px-5 py-3 text-center cursor-pointer md:w-1/4'>See Candidate College Events</Link>
        </div>
      </section>

      {/* Articles */}
      <section className="w-full h-full bg-white px-5 py-10 md:py-10 flex flex-col gap-9 -mt-1 md:px-10 overflow-hidden">
        <div className="flex flex-col gap-2 w-full md:px-10">
          <h3 className="text-primary text-xs md:text-base font-medium uppercase">{articleSectionOnLanding.subtitle}</h3>
          <div className="flex flex-col gap-2 md:flex-row md:gap-20 md:items-center">
            <h2 className='text-secondary text-2xl md:text-[40px] font-medium w-[20rem] md:w-[30rem] md:leading-[40px]'>{articleSectionOnLanding.title}</h2>
            <p className="text-gray text-sm lg:text-base md:w-[40%]">
            {articleSectionOnLanding.description}
            </p>
          </div>
        </div>
        
        <div className="flex gap-2 overflow-x-auto overflow-y-hidden w-full h-full pb-2 md:px-10 no-scrollbar scrollbar-hide" style={{ scrollbarWidth: "none" }}>
          <div className="flex flex-row gap-4 no-scrollbar scrollbar-hide" style={{ minWidth: `${articles.length * 22}rem`, }}>
            {
              isLoadingArticles ? 
              loadingContent?.map((article, index) => (
                <CardItem key={index} data={article} type={'Article'} isLoading={true} />
              ))
              :
              articles?.map((article, index) => (
                <CardItem key={index} data={article} type={'Article'} isLoading={false} />
              ))
            }
          </div>
        </div>

      
        <div className="flex flex-col gap-4 md:w-full md:items-center md:justify-center mt-6 md:mt-0">
          <Link href='/articles' title='Read More Articles' about='Read More Articles' className='bg-secondary text-primary font-medium text-base rounded-full px-5 py-3 text-center cursor-pointer md:w-1/4'>Read More Articles</Link>
        </div>
      </section>

      {/* Events */}
      {/* <section className="w-full h-full bg-white px-5 py-10 md:py-10 flex flex-col gap-9 -mt-1 md:px-10 overflow-hidden">
        <div className="flex flex-col gap-2 w-full md:px-10">
          <h3 className="text-primary text-xs md:text-base font-medium uppercase">{eventSectionOnLanding.subtitle}</h3>
          <div className="flex flex-col gap-2 md:flex-row md:gap-20 md:items-center">
            <h2 className='text-secondary text-2xl md:text-[40px] font-medium w-[20rem] md:w-[30rem] md:leading-[40px]'>{eventSectionOnLanding.title}</h2>
            <p className="text-gray text-sm lg:text-base md:w-[40%]">
            {eventSectionOnLanding.description}
            </p>
          </div>
        </div>
        
        <div className="flex gap-2 overflow-x-auto overflow-y-hidden w-full h-full pb-2 md:px-10 no-scrollbar scrollbar-hide" style={{ scrollbarWidth: "none" }}>
          <div className="flex flex-row gap-4 no-scrollbar scrollbar-hide" style={{ minWidth: `${articlesOnLanding.length * 22}rem`, }}>
            {articlesOnLanding.map((article, index) => (
              <div key={index} className="flex flex-col gap-2 rounded-xl bg-white shadow-md cursor-pointer">
                <Image 
                  src={article.cover}
                  alt={article.title}
                  title={article.title}
                  className="rounded-lg w-[22rem] h-[20rem]"
                  width={0}
                  height={0}
                />

                <div className="flex flex-col gap-2 pt-3 pb-5 relative px-5">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-4">
                      <div className="flex flex-col items-center justify-center">
                        <p className="font-semibold text-primary">5</p>
                        <p className="text-xs font-normal text-gray">
                          Days
                        </p>
                      </div>

                      <div className="flex flex-col items-center justify-center">
                        <p className="font-semibold text-primary">0</p>
                        <p className="text-xs font-normal text-gray">
                          Hours
                        </p>
                      </div>

                      <div className="flex flex-col items-center justify-center">
                        <p className="font-semibold text-primary">2</p>
                        <p className="text-xs font-normal text-gray">
                          Mins
                        </p>
                      </div>

                      <div className="flex flex-col items-center justify-center">
                        <p className="font-semibold text-primary">1</p>
                        <p className="text-xs font-normal text-gray">
                          Secs
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link href='/articles' title='Read More' about='Read More' className='bg-secondary text-primary font-medium text-sm rounded-full py-3 text-center cursor-pointer mt-5'>Register Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 md:w-full md:items-center md:justify-center mt-6 md:mt-0">
          <Link href='/articles' title='Read More Articles' about='Read More Articles' className='bg-secondary text-primary font-medium text-base rounded-full px-5 py-3 text-center cursor-pointer md:w-1/4'>See More Our Events</Link>

          <Link href='/events' title='See Events on Candidate College' about='See Events on Candidate College' className='bg-transparent text-gray font-normal -mt-3 text-base rounded-full px-5 py-3 text-center cursor-pointer md:w-1/4'>Read Articles</Link>
        </div>
      </section> */}

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  )
}
