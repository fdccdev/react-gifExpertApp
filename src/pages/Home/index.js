import React, { useState } from 'react'
import { Link } from 'wouter'
import { useFetchGifs } from '../../hooks/useFetchGifs'
import { GifGridItem } from '../../components/GifGridItem'
import { AddCategory } from '../../components/AddCategory'
import TrendingSreaches from '../../components/TrendingSreaches'


const TOP_GIFS = ['Matrix', 'Argentina', 'Colombia', 'Spain']

export default function Home() {
  const { gifs } = useFetchGifs()
  const [categories, setCategories] = useState([])
  

  return (
    <>
      <AddCategory setCategories={setCategories} />
      <div>
        <h3>Categorías populares</h3>
        <ul className="menu">
          {TOP_GIFS.map((item) => (
            <Link key={item} to={`search/${item}`}>
              {item}
            </Link>
          ))}
          
        </ul>
        <h3>Última búsqueda</h3>
        <div className="card-grid">
          {gifs?.map((img) => {
            return <GifGridItem key={img.id} {...img} />
          })}
        </div>
        <TrendingSreaches />
      </div>
    </>
  )
}
