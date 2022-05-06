import React, { useContext } from 'react'
import StaticContext from '../../context/StaticContext'

export default function Detail({ params }) {
  const context = useContext(StaticContext)
  console.log(context)
  return <p>Gif con el id {params.id}</p>
}
