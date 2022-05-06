import React from 'react'
import { Route, Link } from 'wouter'

export const GifGridItem = ({ id, title = '', url }) => {
  return (
    <div className={'Gif'}>
      <Link to={`/gif/${id}`}>
        <h4>{title}</h4>
        <img className='link' loading="lazy" src={url} alt={title} />
      </Link>
    </div>
  )
}
