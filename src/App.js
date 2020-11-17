import React from 'react'

import PokemonCards from './PokemonCards/PokemonCards'
import classes from './App.module.css'

const App = () => {
  return (
    <>
      <div className={classes.Container}>
        <PokemonCards />
      </div>
    </>
  )
}

export default App
