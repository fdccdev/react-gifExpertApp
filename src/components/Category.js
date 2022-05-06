import React from 'react'
import { Link } from 'wouter'

export const Category = ({ name, options = [] }) => {
  return (
    <section>
      <h4>{name}</h4>
      <div className='trends'>
        {options.map((item) => (
          <Link className='link' to={`/search/${item}`} key={item}>
            <a className='trend-items'>{item}</a>
          </Link>
        ))}
      </div>
    </section>
  )
}
