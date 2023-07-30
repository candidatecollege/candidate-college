'use client'
import { CTA, CardItem, Footer, ListItem, Navbar } from '@/components'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { articlesOnPage } from '@/data/articleData';
import Image from 'next/image';
import axios from 'axios';
import CardItemLandscape from '@/components/CardItemLandscape';
import JumboItem from '@/components/JumboItem';

const Articles = () => {
  const [isShowAllArticles, setIsShowAllArticles] = useState<boolean>(false)
  const [isSeeLatest, setIsSeeLatest] = useState<boolean>(false)
  const [currentIndexSlider, setCurrentIndexSlider] = useState<number>(0)
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const [articles, setArticles] = useState<any[]>([])
  const [categories, setCategories] = useState<any[]>([])
  const [isLoadingCategories, setIsLoadingCategories] = useState<boolean>(true)
  const [isLoadingArticles, setIsLoadingArticles] = useState<boolean>(true)
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

  const fetchCategories = async () => {
    setIsLoadingCategories(true)

    try {
      const response = await axios.get(`https://resource.candidatecollegeind.com/api/article/categories`)

      setTimeout(() => {
        setCategories(response.data.data);
        setIsLoadingCategories(false); // After setting the data, set isLoading to false
      }, 1500);
    } catch (error) {
      console.error(error)
      setIsLoadingArticles(false)
    }
  }

  useEffect(() => {
    fetchArticles()
    fetchCategories()
  }, [])

  return (
    <main className="bg-primary h-full w-full">
      {/* Navbar */}
      <Navbar active='Articles' isDetail={false} />

      {/* Hero */}
      <section className="flex flex-col md:flex-row pt-28 gap-4 px-5 md:max-w-6xl md:mx-auto py-12 bg-primary md:justify-center md:items-center relative h-fit md:h-[80vh]">

        <Image 
          src={'/decoration/article.png'}
          width={0}
          height={0}
          className='w-[25rem]'
          alt='Article Decoration'
          title='Article Decoration'
        />

        <div className="flex flex-col gap-4 mb-3">
          <h1 className="font-semibold text-white text-3xl md:text-[70px] md:w-[90%] md:leading-[100%] leading-[150%]">
          Achieve Quality Equally For All Indonesian Student.
          </h1>

          <p className="text-gray text-sm lg:text-base md:w-[85%]">
          Candidate College is an Education Platform that works to facilitate students in Indonesia at home and aboard to achieve a quality education system.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="flex flex-col w-full px-5 pt-5 md:pt-10 pb-20 bg-white">
      {/* rounded-xl bg-gradient-to-r from-blue-100 to-blue-200 animate-pulse */}
        {/* Latest */}
        <div className="flex flex-col md:mx-auto md:max-w-5xl bg-white">
          <div className="overflow-x-auto scrollbar-hide relative">
            <div className="flex flex-row gap-4 md:mt-5 mb-10 md:mb-16 overflow-x-auto overflow-y-hidden w-[1000px] h-full no-scrollbar scrollbar-hide">
              {
                isLoadingCategories ? 
                loadingContent?.map((category, index) => (
                  <ListItem data={category} isLoading={true} onClick={(e: any) => setActiveCategory('')} active={''} />
                ))
                : 
                categories?.map((category, index) => (
                  <ListItem data={category} isLoading={false} onClick={(e: any) => setActiveCategory(category.name)} active={activeCategory} />
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
              <JumboItem data={articlesOnPage[currentIndexSlider]} isLoading={true} />

              <div className="md:flex flex-row gap-4 hidden">
                {
                  articlesOnPage.slice(1, articlesOnPage.length - 1).map((article, index) => (
                    <CardItemLandscape key={index} data={article} type='Article' isLoading={true} />
                  ))
                }
              </div>

              <div className="flex flex-row gap-1 md:hidden items-center justify-center w-full">
                {
                  articlesOnPage.map((article, index) => (
                    <div key={index} onClick={(e) => setCurrentIndexSlider(index)} className={`flex  p-[5px] h-2 ${currentIndexSlider == index ? 'w-8 bg-secondary' : 'w-2 bg-primary'} rounded-full cursor-pointer`}></div>
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
                <div className="flex flex-row gap-4 no-scrollbar scrollbar-hide" style={{ minWidth: `${articles?.length * 22}rem`, }}>
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