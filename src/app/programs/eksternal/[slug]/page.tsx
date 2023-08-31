'use client'
import React, { useEffect, useState } from 'react'
import { CTA, Footer, Navbar } from '@/components';
import Image from 'next/image';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { WhatsApp } from '@mui/icons-material';
import { articlesOnPage } from '@/data/articleData';
import { usePathname, useRouter } from 'next/navigation'
import axios from 'axios';
import { formatDate } from '@/utils/time';
import { generateShareLinks } from '@/utils/socials';
import Link from 'next/link';
import { categoryId } from '@/utils/category';
import CardItemLandscape from '@/components/CardItemLandscape';

const Detail = () => {
  const slug = usePathname().slice(20)
  const [event, setEvents] = useState<any>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const loadingContents = [1, 2, 3, 4, 5, 6]

  const fetchEvents = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(`https://resource.candidatecollegeind.com/api/events/${slug}`);

      setTimeout(() => {
        setEvents(response.data.data);
        setIsLoading(false); // After setting the data, set isLoading to false
      }, 1500);
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  }

  const [relatedEventes, setRelatedEvents] = useState<any[]>([])
  const [isLoadingRelatedEvents, setIsLoadingRelatedEvents] = useState<boolean>(true)

  const fetchRelatedEvents = async () => {
    setIsLoadingRelatedEvents(true)
    const id = categoryId(event && event.category, ["All", "Students", "Education", "Gen Z", "Technology", "Nowdays"])
    try {
      const response = await axios.get(`https://resource.candidatecollegeind.com/api/event/categories/${id}`)

      setTimeout(() => {
        setRelatedEvents(response.data.data.articles)
        setIsLoadingRelatedEvents(false)
      }, 1500)
    } catch (error) {
      console.log(error)
      setIsLoadingRelatedEvents(false)
    }
  }

  const links = generateShareLinks(event && event.name, `https://candidatecollegeind.com/articles/${event && event.slug}`)

  const socials = [
    { id: 1, name: 'Twitter', link: links.twitter, component: <TwitterIcon color='inherit' fontSize='inherit' /> },
    { id: 2, name: 'Instagram', link: links.instagram, component: <InstagramIcon color='inherit' fontSize='inherit' /> },
    { id: 3, name: 'Whatsapp', link: links.whatsapp, component: <WhatsApp color='inherit' fontSize='inherit' /> },
  ]

  useEffect(() => {
    fetchEvents()
    fetchRelatedEvents()
  }, [])

  console.log(relatedEventes)

  return (
    <main className="bg-white h-full w-full">
      {/* Navbar */}
      <Navbar active='Programs' isDetail={true} />

      {/* Hero */}
      {
        isLoading ?
        <section className="p-16 md:max-w-6xl md:mx-auto pt-32 md:pt-40 h-screen overflow-scroll scrollbar-hide gap-4 px-5 md:px-16">

            <div className="flex flex-col gap-4 md:px-24">
                <div className="flex flex-col gap-4 pb-6 border-b border-b-gray items-center justify-center">
                    <div className=" md:w-[50%] md:py-10 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse">
                    </div>

                    <div className="flex flex-col gap-1 w-full items-start justity-start md:items-center md:justify-center">
                        <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
                        <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
                        <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
                        <div className="w-2/3 py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>

                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center pt-2 gap-4 w-full md:justify-between">
                    <div className='flex flex-row gap-2 text-gray items-center w-full'>
                      <div className="w-[5rem] py-4 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse">
                      </div> | <div className="w-[5rem] py-4 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse">
                      </div> | <div className="w-[5rem] py-4 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse">
                      </div>
                    </div>

                    <div className="flex flex-row items-center gap-2 w-full md:justify-end md:self-end">
                      <p className="text-gray">Share : </p>
                      <div className="flex flex-row gap-2">
                        <div className="w-3 h-3 rounded-full p-5 bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse">
                        </div>
                        <div className="w-3 h-3 rounded-full p-5 bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse">
                        </div>
                        <div className="w-3 h-3 rounded-full p-5 bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse">
                        </div>
                      </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-[15rem] md:h-[30rem] my-6 rounded-xl bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse object-cover mx-auto'></div>

            <div className="flex flex-col gap-2 w-full">
              <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
              <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
              <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
              <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
              <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
              <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
              <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
              <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
              <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div><div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div><div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div><div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div><div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div><div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
              <div className="w-2/3 py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
            </div>

          </section>
          :
          <section className="flex flex-col pt-32 md:pt-40 gap-4 px-5 md:max-w-6xl md:mx-auto py-12 bg-white md:justify-center md:items-center relative h-full">

            <div className="flex flex-col gap-4 md:px-24">
              <div className="flex flex-col gap-4 pb-6 border-b border-b-gray">
                <h1 className="font-semibold text-primary text-3xl md:text-[60px] md:text-center md:w-[100%] md:leading-[100%] leading-[150%]">
                  {event && event.name}
                </h1>

                <p className="text-gray text-base md:text-base md:text-center md:w-[100%]">
                  {event && event.snippets}
                </p>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between md:w-full pt-2 gap-4">
                <p className='text-sm text-gray'>
                  {event && event.duration} Min Read  &nbsp; | &nbsp; {formatDate(event && event.created_at)} | &nbsp; {event && event.author}
                </p>
                <div className="flex flex-row items-center gap-3">
                  <p className='text-sm text-gray'>
                    Share :
                  </p>
                  <div className="flex flex-row gap-3">
                    {
                      socials.map((social, index) => (
                        <Link href={social.link} about={social.name} title={social.name} target='_blank' key={index} className='text-xl rounded-full text-primary bg-secondary px-[0.65rem] pt-1 pb-2 hover:bg-primary hover:text-white duration-700 transition-all cursor-pointer'>
                          {social.component}
                        </Link>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
            
            <Image 
              src={`https://resource.candidatecollegeind.com/storage/${event && event.cover}`}
              alt='Cover Landscape'
              title='Cover Landscape'
              width={100}
              height={0}
              className='w-[30rem] h-[30rem] mt-2 rounded-xl object-cover hidden md:block'
            />

            <Image 
              src={`https://resource.candidatecollegeind.com/storage/${event && event.cover}`}
              alt='Cover Landscape'
              title='Cover Landscape'
              width={100}
              height={0}
              className='w-full h-full mt-2 rounded-xl object-cover block md:hidden'
            />

            <div className="text-primary text-lg text-justify w-full prose prose-rich-text prose-headings:text-primary prose-strong:text-primary md:pt-10" dangerouslySetInnerHTML={{ __html: event && event && event.body }} />

            <div className="flex flex-row items-center justify-between pb-6 mt-10 border-b border-b-gray w-full">
              <h2 className="font-semibold text-2xl md:text-4xl text-primary">Related Events</h2>
            </div>

            {/* Articles */}
            <div className="flex flex-col gap-8 md:gap-5 mt-5 md:flex-row md:items-start md:justify-start w-full">
                  {
                    isLoadingRelatedEvents ? 
                    loadingContents.slice(0, 3).map((event, index) => (
                      <CardItemLandscape data={event} key={index}  isLoading={true} />
                    )) :
                    relatedEventes.slice(0, 3).map((event, index) => (
                      <CardItemLandscape data={event} key={index}  isLoading={false} />
                    ))
                  }
            </div>

          </section>
      }

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <div className="w-full bg-primary">
        <Footer />
      </div>
    </main>
  )
}

export default Detail