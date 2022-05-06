import React from 'react'

export const Category = ({ name, options = [] }) => {
  return (
    <section>
      <h4>{name}</h4>
      <div>
        {options.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  )
}
