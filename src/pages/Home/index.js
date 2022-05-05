import React from 'react'
import { Link } from 'wouter'
import { useFetchGifs } from '../../hooks/useFetchGifs'
import { GifGridItem } from '../../components/GifGridItem'

const TOP_GIFS = ['Matrix', 'Argentina', 'Colombia', 'Spain']

export default function Home() {
  const { data: images, loading } = useFetchGifs('rick')

  return (
    <>
      <h3>Top gifs populares</h3>
      <ul>
        {TOP_GIFS.map((item) => (
          <Link to={`search/${item}`}>Gifs de {item}</Link>
        ))}
      </ul>
      <div className="card-grid">
        {images?.map((img) => {
          return <GifGridItem key={img.id} {...img} />
        })}
      </div>
    </>
  )
}
