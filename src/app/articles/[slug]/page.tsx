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

const Detail = () => {
  const socials = [
    { id: 1, name: 'Twitter', link: 'https://twitter.com/CCollege_Ind', component: <TwitterIcon color='inherit' fontSize='inherit' /> },
    { id: 2, name: 'Instagram', link: 'https://www.instagram.com/candidate.college/', component: <InstagramIcon color='inherit' fontSize='inherit' /> },
    { id: 3, name: 'Whatsapp', link: 'https://www.youtube.com/channel/UCk2XANWkjfjc9K305H2WjrQ', component: <WhatsApp color='inherit' fontSize='inherit' /> },
  ]

  const slug = usePathname().slice(10)
  const [article, setArticle] = useState<any>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const fetchArticle = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(`https://resource.candidatecollegeind.com/api/articles/${slug}`);

      setTimeout(() => {
        setArticle(response.data.data);
        setIsLoading(false); // After setting the data, set isLoading to false
      }, 1500);
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchArticle()
  }, [])

  return (
    <main className="bg-white h-full w-full">
      {/* Navbar */}
      <Navbar active='Articles' isDetail={true} />

      {/* Hero */}
      {
        isLoading ?
        <section className="p-16 md:max-w-6xl md:mx-auto pt-32 md:pt-40 h-screen overflow-scroll scrollbar-hide gap-4">

            <div className="flex flex-col gap-4 md:px-24">
                <div className="flex flex-col gap-4 pb-6 border-b border-b-gray items-center justify-center">
                    <div className=" md:w-[50%] py-10 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse">
                    </div>

                    <div className="flex flex-col gap-1 w-full items-center justify-center">
                        <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
                        <div className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
                        <div className="w-2/3 py-3 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse"></div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-center md:w-full pt-2 gap-4">
                    <div className='flex flex-row gap-2'>
                    <div className="w-[5rem] py-4 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse">
                    </div>  &nbsp; | &nbsp; <div className="w-[5rem] py-4 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse">
                    </div> | <div className="w-[5rem] py-4 rounded-lg bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse">
                    </div>
                    </div>
                </div>
            </div>

            <div className='w-[30rem] h-[30rem] my-6 rounded-xl bg-gradient-to-r from-blue-100 to-blue-300 animate-pulse object-cover mx-auto'></div>

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
                  {article && article.title}
                </h1>

                <p className="text-gray text-base md:text-base md:text-center md:w-[100%]">
                  {article && article.snippets}
                </p>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between md:w-full pt-2 gap-4">
                <p className='text-sm text-gray'>
                  {article && article.duration} Min Read  &nbsp; | &nbsp; {formatDate(article && article.created_at)} | &nbsp; {article && article.author}
                </p>
                <div className="flex flex-row items-center gap-3">
                  <p className='text-sm text-gray'>
                    Share :
                  </p>
                  <div className="flex flex-row gap-3">
                    {
                      socials.map((social, index) => (
                        <span key={index} className='text-xl rounded-full text-primary bg-secondary px-[0.65rem] pt-1 pb-2 hover:bg-primary hover:text-white duration-700 transition-all cursor-pointer'>
                          {social.component}
                        </span>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>

            {/* <Image 
              src={`https://resource.candidatecollegeind.com/storage/${article && article.cover_landscape}`}
              alt='Cover Landscape'
              title='Cover Landscape'
              width={100}
              height={0}
              className='w-full h-[25vh] md:h-full mt-2 rounded-xl object-cover'
            /> */}

            <Image 
              src={`https://resource.candidatecollegeind.com/storage/${article && article.cover_landscape}`}
              alt='Cover Landscape'
              title='Cover Landscape'
              width={100}
              height={0}
              className='w-[30rem] h-[30rem] mt-2 rounded-xl object-cover'
            />

            <div className="text-primary text-lg text-justify w-full prose prose-rich-text prose-headings:text-primary prose-strong:text-primary" dangerouslySetInnerHTML={{ __html: article && article && article.body }} />

            <div className="flex flex-row items-center justify-between pb-6 mt-10 border-b border-b-gray w-full">
              <h2 className="font-semibold text-2xl md:text-4xl text-primary">Related Articles</h2>
            </div>

            {/* Articles */}
            <div className="flex flex-col gap-8 md:gap-5 mt-5 md:grid md:grid-cols-3">
                  {
                    articlesOnPage.slice(0, 3).map((article, index) => (
                      <div key={index} className={`flex-col gap-2 md:items-center md:gap-5 flex`}>
                        <Image 
                          width={100}
                          height={50}
                          src={article && article.coverLandscape}
                          alt={article && article.title}
                          title={article && article.title}
                          className='w-full md:flex-1 h-full rounded-xl'
                          priority
                        />

                        <div className="flex md:flex-1 flex-col gap">
                            <h3 className="font-semibold text-xl md:text-2xl text-primary">
                              {article && article.title}
                            </h3>
                            <p className="font-normal text-sm md:text-base text-gray">
                              {article && article.snippets}
                            </p>

                            <p className="font-normal text-xs text-gray md:mt-5 mt-3">
                              {article && article.publishedAt} | {article && article.duration} min read
                            </p>
                          </div>
                      </div>
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