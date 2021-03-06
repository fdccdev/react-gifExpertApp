import { useContext, useState, useEffect } from 'react'
import { getGifs } from '../services/getGifs'
import GifsContext from '../context/GifsContext'


export const useFetchGifs = (keyword = null) => {
  const [loading, setLoading] = useState(false)
  const {gifs, setGifs} = useContext(GifsContext)
  
  useEffect(() => {
    setLoading(true)
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    getGifs(keywordToUse).then((imgs) => {
      setGifs(imgs)
      localStorage.setItem('lastKeyword', keyword)
    })
  }, [keyword, setGifs])

  return {gifs, loading}
}
