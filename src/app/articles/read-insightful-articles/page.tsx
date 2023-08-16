'use client'
import { CTA, Footer, Navbar } from '@/components'
import CardItemLandscape from '@/components/CardItemLandscape'
import SearchIcon from '@/components/icons/SearchIcon'
import { categoryId } from '@/utils/category'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const ReadInsightfulArticles = () => {
    const [articles, setArticles] = useState<any[]>([])
    const [categories, setCategories] = useState<any[]>([])
    const [isLoadingArticles, setIsLoadingArticles] = useState<boolean>(true)
    const loadingContent = [1, 2, 3, 4, 5, 6]

    const fetchArticles = async () => {
        setIsLoadingArticles(true)
        const id = categoryId("All", categories)
    
        try {
          const response = await axios.get(`https://resource.candidatecollegeind.com/api/article/categories/${id}`)
    
          setTimeout(() => {
            setArticles(response.data.data.articles);
            setIsLoadingArticles(false); // After setting the data, set isLoading to false
          }, 1500);
        } catch (error) {
          console.error(error)
          setIsLoadingArticles(false)
        }
    }

    const fetchCategories = async () => {

      try {
        const response = await axios.get(`https://resource.candidatecollegeind.com/api/article/categories`)
  
        setTimeout(() => {
          setCategories(response.data.data);
        }, 1500);
      } catch (error) {
        console.error(error)
        setIsLoadingArticles(false)
      }
    }

    const [findArticle, setFindArticle] = useState<string>("")

    const handleFindArticle = (e: any) => {
        e.preventDefault();
        setIsLoadingArticles(true);
        setArticles(loadingContent)
    
        const filteredData = articles.filter((item) =>
        item.title.toLowerCase().includes(findArticle.toLowerCase())
        );

        if (findArticle == "") {
            fetchArticles()
        } else {
            setTimeout(() => {
                setArticles(filteredData);
                setIsLoadingArticles(false); // After setting the data, set isLoading to false
            }, 2000);
        }
    };

    useEffect(() => {
        fetchArticles()
        fetchCategories()
      }, [])

    return (
        <main className="bg-primary h-full w-full">
        {/* Navbar */}
        <Navbar active='Articles' isDetail={false} />

        <section className="flex flex-col w-full px-5 pt-5 md:pt-32 pb-20 bg-white">
            <div className="flex flex-col md:mx-auto md:max-w-5xl bg-white">
                <div
                className='w-full h-[25rem] mt-2 rounded-xl object-cover bg-primary flex justify-center items-center relative mb-10'
                >
                    <Image 
                        src={'/decoration/insightful.png'}
                        width={0}
                        height={0}
                        className='w-[35rem]'
                        alt='Article Decoration'
                        title='Article Decoration'
                    />

                    <div className="flex flex-col gap-4 mb-3 items-center justify-center mr-20">
                        <h1 className="font-semibold text-white text-3xl md:text-[70px] text-center md:leading-[100%] leading-[150%]">
                        Insightful Articles
                        </h1>

                        <p className="text-gray text-sm lg:text-base md:w-[85%] text-center">
                        Candidate College is an Education Platform that works to facilitate students in Indonesia at home and aboard to achieve a quality education system.
                        </p>
                    </div>

                    <form onSubmit={handleFindArticle} autoComplete='off' className="absolute -bottom-5 mx-auto w-full md:w-[50%] px-12 -ml-5">
                        <div className="flex flex-row gap-2">
                            <input type="texxt" className="shadow-md bg-white text-primary placeholder:text-gray w-full py-3 px-6 rounded-full text-sm md:text-base" placeholder='Find Article' value={findArticle} onChange={(e) => setFindArticle(e.target.value)} />

                            <button className='flex items-center justify-center bg-secondary rounded-full p-3 shadow-md'>
                            <SearchIcon size={'24'} color={'#1B4E6B'} />
                            </button>
                        </div>
                    </form>
                </div>

                <div className={`flex`}>
                    {
                      articles.length == 0 ? 
                      <div className='w-full h-fit py-10 flex items-center justify-center'>
                        <div className="flex flex-col gap-2 w-full">
                          <Image 
                            src="/decoration/empty.png"
                            title="Empty Article Decoration"
                            alt="Empty Article Decoration"
                            width={0}
                            height={0}
                            className='w-[25rem] h-[25rem] object-contain mx-auto'
                            priority
                          />
                          <p className="text-gray text-base text-center">No Article Found</p>
                        </div>
                      </div> : 
                      <div className="flex flex-col gap-8 md:gap-5 mt-7 md:grid md:grid-cols-3">
                      {articles.map((article, index) => (
                        <CardItemLandscape key={index} data={article} type={'Article'} isLoading={isLoadingArticles} />
                      ))}
                      </div>
                    }
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

export default ReadInsightfulArticles
