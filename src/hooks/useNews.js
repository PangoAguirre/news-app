import { useEffect, useState } from "react";
import { getApiNews } from "../api/endpoints";
import { apiKey } from "../apiKey";

export function useNews({word, numPage}) {
    const [news, setNews] = useState()
    const [totalResults, setTotalResults] = useState(0)
    const [loading, setLoading] = useState(false)
  
    useEffect(() => {
      if (!word) return
      setLoading(true)
      fetch(getApiNews({ word: word, numPage: numPage, apiKey: apiKey }))
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Error en la respuesta: ${res.status}`)
          }
          return res.json();
        })
        .then((news) => {
          const { articles, totalResults } = news
          setNews(articles)
          setTotalResults(totalResults)
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }, [word, numPage]);
  
    return {news, totalResults, loading}
  }