import { useState, useEffect } from 'react'
import { getGifs } from '../services/getGifs'

export const useFetchGifs = (keyword = null) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  })

  useEffect(() => {

    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    getGifs(keywordToUse).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      })
      localStorage.setItem('lastKeyword', keyword)
    })
  }, [keyword])

  return state
}
