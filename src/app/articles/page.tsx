"use client";
import { CTA, CardItem, Footer, ListItem, Navbar } from "@/components";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { articlesOnPage } from "@/data/articleData";
import Image from "next/image";
import axios from "axios";
import CardItemLandscape from "@/components/CardItemLandscape";
import JumboItem from "@/components/JumboItem";
import { categoryId } from "@/utils/category";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";

import "../../styles/swiper-article-page.css";

// Import Static File
import {popularArticles, popularArticlesDataType} from "@/data/popularArticleData";

// Import Function
import { formatDate } from "@/utils/formatDate";
import { formatArticleTitle } from "@/utils/formatArticleTitle";
import { formatName } from "@/utils/formatName";

// Import Component
import CardPopularArticle  from "@/components/articles/CardPopularArticle";

type ArticleType = {
  id: number;
  title: string;
  author: string;
  slug: string;
  category: string;
  cover_landscape: string;
  cover: string;
  body: string;
  snippets: string;
  duration: number;
  view: number;
  created_at: string;
  page: null | string | number;
  count: string;
};

const Articles = () => {
  const [isShowAllArticles, setIsShowAllArticles] = useState<boolean>(false);
  const [isSeeLatest, setIsSeeLatest] = useState<boolean>(false);
  const [currentIndexSlider, setCurrentIndexSlider] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const [articles, setArticles] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState<boolean>(true);
  const [isLoadingArticles, setIsLoadingArticles] = useState<boolean>(true);

  const [articlesByCategory, setArticlesByCategory] = useState<any[]>([]);
  const [isLoadingArticleByCategory, setIsLoadingArticleByCategory] =
    useState<boolean>(true);
  const loadingContent = [1, 2, 3, 4, 5, 6];

  const myRef = useRef<HTMLDivElement>(null);
  const scrollToRef = () => myRef.current?.scrollIntoView({ behavior: 'smooth' });

  const fetchArticleByCategory = async () => {
    setIsLoadingArticleByCategory(true);

    const id = categoryId(activeCategory, categories);

    try {
      const response = await axios.get(`/api/article/categories/${id}`);

      console.log(response);

      setArticlesByCategory(response.data.data.articles);

      setTimeout(() => {
        setIsLoadingArticleByCategory(false); // After setting the data, set isLoading to false
      }, 1500);
    } catch (error) {
      console.error(error);
      setIsLoadingArticles(false);
    }
  };

  const activeCategoryHandler = (category: string) => {
    setActiveCategory(category);
  };

  const fetchArticles = async () => {
    setIsLoadingArticles(true);

    try {
      const response = await axios.get(`/api/articles?sortby=view&count=10`);
      // const sortedArticles: any[] = response.data.data.sort(
      //   (a: any, b: any) => {
      //     if (a.view > b.view) return 1;
      //     if (a.view < b.view) return -1;
      //     return 0;
      //   }
      // );
      const sortedArticles: ArticleType[] = response.data.data;
      console.log("sort", sortedArticles);
      // filter article greater then zero
      const sortedArticleGreatThanZero = sortedArticles.filter(
        (article) => article.view > 0
      );

      console.log("Sort zero", sortedArticleGreatThanZero);
      // Change this if want change number of article most view
      const numberCountArticles = 5;

      // if number count of article view > 0 is less than numberCountArticle in above,
      // its mean in array articles there was zero views, so au ah so inglish,
      // ambil secara acak views yang 0.
      if (sortedArticleGreatThanZero.length < numberCountArticles) {
        const restCount =
          numberCountArticles - sortedArticleGreatThanZero.length;
        const articleViewEqualZero = sortedArticles.filter(
          (article) => article.view === 0
        );

        const randomPickArticleEqualZero = articleViewEqualZero.sort(
          () => Math.random() - 0.5
        );
        // .slice(0, restCount);

        const mergedArticles = sortedArticleGreatThanZero.concat(
          randomPickArticleEqualZero
        );

        setArticles(mergedArticles);
        setIsLoadingArticles(false);
      } else {
        // const slicedArticle = sortedArticleGreatThanZero.slice(0, 5);

        setArticles(sortedArticleGreatThanZero);
        setIsLoadingArticles(false);
      }
    } catch (error) {
      console.error(error);
      setIsLoadingArticles(false);
    }
  };

  const fetchCategories = async () => {
    setIsLoadingCategories(true);

    try {
      const response = await axios.get(`/api/article/categories`);

      setTimeout(() => {
        setCategories(response.data.data);
        setIsLoadingCategories(false); // After setting the data, set isLoading to false
      }, 1500);
    } catch (error) {
      console.error(error);
      setIsLoadingArticles(false);
    }
  };

  // Used to sort articles data based on largest views
  const getMostViewedArticles = (arr: any[], n:any) => {
    const sortedArticles = arr.sort((a: any, b: any) => {
      return b.views - a.views;
    });

    return sortedArticles.slice(0, n)
  };

  // Used to sort articles data based on latest date
  const getLatestArticles = (arr: any[], n:any) => {
    const sortedArticles = arr.sort((a: any, b: any) => {
      const dateA = new Date(a.created_at);
      const dateB = new Date(b.created_at);

      return dateB.getTime() - dateA.getTime();
    });

    return sortedArticles.slice(0, n);
  };

  // Used to format number of articles cards per row and simultaneously render cards
  const renderPopularArticles = () => {
    const mostViewed = getMostViewedArticles(popularArticles, 8);
    const latest = getLatestArticles(popularArticles, 2);
    
    const cardsPerRow = [3, 2, 3, 2];
    let currentIndex  = 0;
    let number = 1;

    return cardsPerRow.map((numCards, rowIndex) => {
      let rowCards = [];

      rowCards = mostViewed.slice(currentIndex, currentIndex + numCards);
      currentIndex += numCards;

      if (rowIndex == 3) {
        rowCards = latest;
      };

      return (
        <div key={rowIndex} className='flex lg:flex-row xxsm:flex-col lg:gap-2 xxsm:gap-4 lg:mt-0 xxsm:-mt-[22px]'>
          {rowCards.map((article: popularArticlesDataType, index: number) => (
            <CardPopularArticle 
                number={number++}
                rowIndex={rowIndex}
                index={index}
                title={formatArticleTitle(article.title)}
                duration={article.duration}
                date={formatDate(article.created_at)}
                author={formatName(article.author)}
                cover_landscape={article.cover_landscape}
            />
          ))};
        </div>
      );
    });
  };

  useEffect(() => {
    fetchArticles();

    fetchCategories();
  }, []);

  useEffect(() => {
    fetchArticleByCategory();
  }, [activeCategory]);

  return (
    <main className="bg-primary h-full w-full">
      {/* Navbar */}
      <Navbar
        className="animate__animated animate__fadeInDownBig"
        active="Articles"
        isDetail={false}
      />

      {/* Hero */}
      <section className="flex overflow-hidden relative flex-col w-full h-auto min-h-full justify-center bg-[url('/decoration/hero-section-background.png')] bg-cover">
        <div className="flex flex-col lg:mx-32 xsm:mx-10 xxsm:mx-8 lg:mt-40 xsm:mt-44 xxsm:mt-32 mb-20">
          {/* Title */}
          <div className="flex">
            <h1 className="text-right font-bold lg:text-6xl xsm:text-5xl xxsm:text-3xl lg:pl-[200px] lg:leading-[5rem] xsm:leading-[4rem] xxsm:leading-[2.6rem] animate-slideRight">
              Find Insightful Articles To Make You More <span className="text-secondary">Thoughtful</span> And Full Of New <span className="text-[#5EACDD]">Knowledge.</span>
            </h1>           
          {/* Sub Title */}
          <div className="flex flex-row lg:pr-[520px] xsm:pr-[100px] xxsm:pr-[40px] lg:-mt-[30px] xsm:mt-[140px] xxsm:mt-[120px] gap-x-8 lg:items-start xsm:items-center xxsm:items-end">
            {/* Button */}
            <div className="flex flex-col justify-center items-center lg:gap-y-8 xsm:gap-y-10 xxsm:gap-y-8">
              <div className="bg-white w-[0.8px] lg:h-28 xsm:h-20 xxsm:h-20 rounded-lg"></div>
                <button className="w-16 h-16 border-[1px] border-white rounded-full text-center" title="Click to scroll down" onClick={scrollToRef}>
                  Scroll
                </button>
            </div>
            {/* Desc */}
            <div className="flex flex-col lg:gap-y-11 xsm:gap-y-6 xxsm:gap-y-12">
              <p className="text-gray lg:text-[15px] xsm:text-[15px] xxsm:text-[13px] animate-slideRight">
                Candidate College can help you explore your potential and gain a comprehensive understanding, make you discover your dream education system, and help you get one step closer to your dreams, And make you shine brighter.
              </p> 
              <p className="font-semibold lg:text-2xl xsm:text-2xl xxsm:text-xl lg:pt-0 lg:pb-0 xsm:pt-12 xsm:pb-10 xxsm:pt-2 xxsm:pb-5 ">Latest Article</p>
            </div>
          </div>
        </div>  
      </section>

      {/* Popular Articles */}
      <section className="flex flex-col lg:px-14 pt-14 pb-20 bg-white" ref={myRef}>
        {/* Title */}
        <h1 className="text-primary text-2xl font-bold m-8 lg:mb-10 xxsm:mb-16">
          Popular Article
        </h1>
        {/* Card */}
        <div className="flex flex-col lg:justify-center lg:items-center lg:gap-4 xxsm:gap-0 md:px-36 xxsm:px-6">
          {renderPopularArticles()}
        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Articles;
