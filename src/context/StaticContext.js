import React from 'react'

const Context = React.createContext({
    msg: 'Esto es acceso al context sin provider',
    check: false
})

export default Context