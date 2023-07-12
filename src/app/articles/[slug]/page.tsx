'use client'
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Detail = () => {

  const [article, setArticle] = useState<any>(null)

  const router = useRouter();
  const { slug } = router.query;

  const BASE_URL = 'http://127.0.0.1:8000/api/articles/';

  const fetchArticle = async () => {
    const article = await axios.get(BASE_URL + slug);
    setArticle(article.data.data);
  }

  useEffect(() => {
    fetchArticle()
    console.log(article)
  }, [])

  return (
    <div>Detail</div>
  )
}

export default Detail