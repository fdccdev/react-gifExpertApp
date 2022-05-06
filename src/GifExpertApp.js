import React, { useState } from 'react'
import StaticContext from './context/StaticContext'
import Home from './pages/Home'
import Detail from './pages/Detail'
import { GifGrid } from './components/GifGrid'
import { Route, Link } from 'wouter'
import { GifsContextProvider } from './context/GifsContext'

export const GifExpertApp = () => {
  return (
    <StaticContext.Provider
      value={{ msg: 'Esto es con acceso al context con provider', check: true }}
    >
      <div className="logo">
        <Link to="/">
          <h2>Gifact</h2>
        </Link>
      </div>

      <GifsContextProvider>
        <Route path="/" component={Home} />
        <Route path="/search/:keyword" component={GifGrid} />
        <Route path="/gif/:id" component={Detail} />
      </GifsContextProvider>
    </StaticContext.Provider>
  )
}
