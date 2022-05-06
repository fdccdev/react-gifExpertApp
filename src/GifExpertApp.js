import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import Home from './pages/Home'
import Detail from './pages/Detail'
import { GifGrid } from './components/GifGrid'
import { Route, Link } from 'wouter'
import StaticContext from './context/StaticContext'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([])

  return (
    <StaticContext.Provider value={{msg: 'Esto es con acceso al context con provider', check: true}}>
      <div className='logo'>
        <Link to='/'>
          <img className='img-home' src={process.env.PUBLIC_URL + '/gex-rbg.png'} alt='gif expert' />
        </Link>
      </div>
      <h2 style={{ textAlign: 'center' }}>Gif Expert</h2>
      <AddCategory setCategories={setCategories} />

      <Route path='/' component={Home} />
      <Route path="/search/:keyword" component={GifGrid} />
      <Route path="/gif/:id" component={Detail} />
    </StaticContext.Provider>
  )
}
