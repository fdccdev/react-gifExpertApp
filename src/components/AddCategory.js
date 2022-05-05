import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'wouter'

export const AddCategory = ({ setCategories }) => {
  const [location, setLocation] = useLocation()
  const [inputValue, setinputValue] = useState('')

  const handleInput = (e) => {
    setinputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()    
    window.location.pathname.indexOf('search') !== -1 ? setLocation(`${inputValue}`) : setLocation(`search/${inputValue}`) 
    setLocation(`${inputValue}`)

    if (inputValue.trim().length > 2) {
      setCategories(inputValue)
      // setinputValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
      <input type="text" value={inputValue} onChange={handleInput} placeholder='Search a gif here...'/>
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}
