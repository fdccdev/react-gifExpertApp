import React from 'react'
import { Route, Link } from 'wouter'

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className={'card animate__animated animate__fadeIn'}>
      <Link to={`/gif/${id}`}>
        <img className='link' loading="lazy" src={url} alt={title} />
      </Link>
    </div>
  )
}
