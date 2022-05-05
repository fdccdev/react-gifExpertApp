import React from 'react'
import { Link } from 'wouter'
import { useFetchGifs } from '../../hooks/useFetchGifs'
import { GifGridItem } from '../../components/GifGridItem'

const TOP_GIFS = ['Matrix', 'Argentina', 'Colombia', 'Spain']

export default function Home() {
  const { data: images } = useFetchGifs('rick and morthy')

  return (
    <>
      <h3>Top gifs populares</h3>
      <ul className='menu'>
        {TOP_GIFS.map((item) => (
          <Link key={item} to={`search/${item}`}>Gifs de {item}</Link>
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
