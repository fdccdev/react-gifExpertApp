import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import Home from './pages/Home'
import { GifGrid } from './components/GifGrid'
import { Route, Link } from 'wouter'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Psycho Pass'])

  return (
    <>
      <div className='logo'>
        <Link to='/'>
          <img className='img-home' src={process.env.PUBLIC_URL + '/gex-rbg.png'} alt='gif expert' />
        </Link>
      </div>
      <h2 style={{ textAlign: 'center' }}>Gif Expert</h2>
      <AddCategory setCategories={setCategories} />

      <Route path='/' component={Home} />
      <Route path="/search/:keyword" component={GifGrid} />
    </>
  )
}
