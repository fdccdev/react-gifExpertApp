import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ params }) => {
  const { keyword } = params
  const { data: images, loading } = useFetchGifs(keyword)

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{keyword.replace(/%20/g, " ")}</h3>

      {loading && <p className="animate__animated animate__flash">Loading</p>}
      <div className="card-grid">
        {images?.map((img) => {
          return <GifGridItem key={img.id} {...img} />
        })}
      </div>
    </>
  )
}
