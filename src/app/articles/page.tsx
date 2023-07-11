'use client'
import { CTA, Footer, Navbar } from '@/components'
import Link from 'next/link'
import React, { useState } from 'react'

import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { articlesOnLanding, articlesOnPage, categories } from '@/data/articleData';
import Image from 'next/image';
import { articleSectionOnLanding } from '@/data/staticData';
import Head from 'next/head';
import { isNamedExports } from 'typescript';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Articles = () => {
  const [isShowAllArticles, setIsShowAllArticles] = useState<boolean>(false)
  const [isSeeLatest, setIsSeeLatest] = useState<boolean>(false)
  const [currentIndexSlider, setCurrentIndexSlider] = useState<number>(0)
  const [activeCategory, setActiveCategory] = useState<string>('All')

  return (
    <main className="bg-primary h-full w-full">
      {/* Head */}
      <Head>
        <title>Articles - Read Most Insightful and Mesmerizing Article Produced By Candidate College</title>
      </Head>

      {/* Navbar */}
      <Navbar active='Articles' />

      {/* Hero */}
      <section className="flex flex-col pt-36 gap-4 px-5 md:max-w-6xl md:mx-auto py-12 bg-primary md:justify-center md:items-center relative h-fit md:h-[75vh]">
        <h1 className="font-semibold text-white text-3xl md:text-[70px] md:w-[90%] md:text-center md:leading-[100%] leading-[150%]">
        Achieve Quality Equally For All Indonesian Student.
        </h1>

        <p className="text-gray text-sm md:text-center lg:text-base md:w-[40%]">
        Candidate College is an Education Platform that works to facilitate students in Indonesia at home and aboard to achieve a quality education system.
        </p>

        <Link href='/about' title='Get To Know About CC' about='Get To Know About CC' className='bg-secondary text-primary font-medium text-base rounded-full px-5 py-3 text-center cursor-pointer md:w-1/4 mt-6 md:mt-0'>Get To Know About CC</Link>

        <Link href='/events' title='See Events on Candidate College' about='See Events on Candidate College' className='bg-transparent text-gray font-normal -mt-3 text-base rounded-full px-5 py-3 text-center cursor-pointer md:w-1/4'>See Events</Link>
      </section>

      {/* Articles */}
      <section className="flex flex-col w-full px-5 pt-5 md:pt-10 pb-20 bg-white">

        {/* Latest */}
        <div className="flex flex-col md:mx-auto md:max-w-5xl bg-white">
          <div className="overflow-x-auto scrollbar-hide relative">
            <div className="flex flex-row gap-4 md:mt-5 mb-10 md:mb-16 overflow-x-auto overflow-y-hidden w-[1000px] h-full no-scrollbar scrollbar-hide">
              {
                categories.map((category, index) => (
                  <div onClick={(e) => setActiveCategory(category.name)} className={`${category.name == activeCategory ? 'bg-primary text-white' : 'bg-secondary text-primary'} font-medium text-sm md:text-base rounded-full px-2 md:px-5 py-3 text-center cursor-pointer mt-6 hover:bg-primary hover:text-white md:mt-0 w-full duration-700 transition-all`}>{category.name}</div>
                ))
              }
            </div>
          </div>

          <div className={`${activeCategory != 'All' ? 'flex flex-col' : 'hidden'}`}>
            <div className="flex flex-row items-center justify-between pb-6 border-b border-b-gray">
                <h2 className="font-semibold text-2xl md:text-4xl text-primary">{activeCategory}</h2>
            </div>

            {/* Articles */}
            <div className="flex flex-col gap-8 md:gap-5 mt-7 md:grid md:grid-cols-3">
              {
                articlesOnPage.map((article, index) => (
                  <div key={index} className={`flex-col gap-2 md:items-center md:gap-5 flex`}>
                    <Image 
                      width={100}
                      height={50}
                      src={article.coverLandscape}
                      alt={article.title}
                      title={article.title}
                      className='w-full md:flex-1 h-full rounded-xl'
                      priority
                    />

                    <div className="flex md:flex-1 flex-col gap">
                        <h3 className="font-semibold text-xl md:text-2xl text-primary">
                          {article.title}
                        </h3>
                        <p className="font-normal text-sm md:text-base text-gray">
                          {article.snippets}
                        </p>

                        <p className="font-normal text-xs text-gray md:mt-5 mt-3">
                          {article.publishedAt} | {article.duration} min read
                        </p>
                      </div>
                  </div>
                ))
              }
            </div>
          </div>

          <div className={`${activeCategory != 'All' ? 'hidden' : 'flex flex-col'}`}>
            <div className="flex flex-row items-center justify-between pb-6 border-b border-b-gray">
              <h2 className="font-semibold text-2xl md:text-4xl text-primary">Latest</h2>
              <div className="flex flex-row items-center justify-center text-sm gap-1 cursor-pointer text-primary">
                See all <span className='text-primary text-sm md:text-base'><ArrowForwardRoundedIcon fontSize='inherit' color='inherit' /></span>
              </div>
            </div>
            
            {/* Scollable */}
            <div className="flex flex-col gap-5 w-full mt-7">
              <div className={`flex-col md:flex-row gap-2 md:items-center md:gap-5 flex`}>
                <Image 
                  width={100}
                  height={50}
                  src={articlesOnPage[currentIndexSlider].coverLandscape}
                  alt={articlesOnPage[currentIndexSlider].title}
                  title={articlesOnPage[currentIndexSlider].title}
                  className='w-full md:w-[650px] md:flex-1 h-full rounded-xl'
                  priority
                />

                <div className="md:flex md:flex-1 flex-col gap-3">
                  <h3 className="font-semibold text-2xl md:text-4xl text-primary">
                    {articlesOnPage[currentIndexSlider].title}
                  </h3>
                  <p className="font-normal text-sm md:text-base text-gray">
                    {articlesOnPage[currentIndexSlider].snippets}
                  </p>

                  <p className="font-normal text-xs text-gray mt-2">
                    {articlesOnPage[currentIndexSlider].publishedAt} | {articlesOnPage[currentIndexSlider].duration} min read
                  </p>
                </div>
              </div>

              <div className="md:flex flex-row gap-4 hidden">
                {
                  articlesOnPage.slice(1, articlesOnPage.length - 1).map((article, index) => (
                    <div key={index} className={`flex-col gap-2 md:items-center md:gap-2 flex`}>
                      <Image 
                        width={100}
                        height={50}
                        src={article.coverLandscape}
                        alt={article.title}
                        title={article.title}
                        className='w-full md:flex-1 h-full rounded-xl object-cover'
                        priority
                      />

                      <div className="md:flex md:flex-1 flex-col gap hidden">
                        <h3 className="font-semibold text-2xl text-primary">
                          {article.title}
                        </h3>
                        <p className="font-normal text-base text-gray">
                          {article.snippets}
                        </p>

                        <p className="font-normal text-xs text-gray mt-5">
                          {article.publishedAt} | {article.duration} min read
                        </p>
                      </div>
                    </div>
                  ))
                }
              </div>

              <div className="flex flex-row gap-1 md:hidden items-center justify-center w-full">
                {
                  articlesOnPage.map((article, index) => (
                    <div onClick={(e) => setCurrentIndexSlider(index)} className={`flex  p-[5px] h-2 ${currentIndexSlider == index ? 'w-8 bg-secondary' : 'w-2 bg-primary'} rounded-full cursor-pointer`}></div>
                  ))
                }
              </div>
            </div>

            <div className="flex flex-row items-center justify-between pb-6 border-b border-b-gray mt-16">
              <h2 className="font-semibold text-2xl md:text-4xl text-primary">Read Insightful Articles</h2>
              <div className="flex flex-row items-center justify-center text-sm gap-1 cursor-pointer text-primary">
                See all <span className='text-primary text-sm md:text-base'><ArrowForwardRoundedIcon fontSize='inherit' color='inherit' /></span>
              </div>
            </div>

            {/* Articles */}
            <section className="w-full h-full bg-white py-10 md:py-10 flex flex-col gap-9 overflow-hidden">
              <div className="flex gap-2 overflow-x-auto overflow-y-hidden w-full h-full pb-2 no-scrollbar scrollbar-hide" style={{ scrollbarWidth: "none" }}>
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
                        <h3 className="font-semibold text-base text-primary">
                          {article.title.length > 33 ? (article.title.substring(0, 33) + '...') : (article.title)}
                        </h3>
                        <p className="font-normal text-sm text-gray">
                          {article.snippets.substring(0, 150) + '...'}
                        </p>
                        <Link href='/articles' title='Read More' about='Read More' className='bg-secondary text-primary font-medium text-sm rounded-full py-3 text-center cursor-pointer mt-5'>Read More</Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>

      </section>

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  )
}

export default Articles