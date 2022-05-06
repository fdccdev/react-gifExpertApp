import React, { useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'
import { AddCategory } from './AddCategory'

export const GifGrid = ({ params }) => {
  const { keyword } = params
  const { gifs, loading } = useFetchGifs(keyword)
  const [categories, setCategories] = useState([])

  return (
    <>
    <AddCategory setCategories={setCategories} />
      <h3 className="animate__animated animate__fadeIn">{keyword.replace(/%20/g, " ")}</h3>

      {!loading && <p className="animate__animated animate__flash">Loading</p>}
      <div className="card-grid">
        {gifs?.map((img) => {
          return <GifGridItem key={img.id} {...img} />
        })}
      </div>
    </>
  )
}
