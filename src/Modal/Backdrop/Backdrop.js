import React from 'react'

import classes from './Backdrop.module.css'

const Backdrop = (props) => {
  const closeBackdrop = (e) => {
    console.log(e.target.parentElement.className.split('_')[0])
    if (e.target.parentElement.className.split('_')[0] === 'PokemonCards') {
      props.clicked(false)
    }
  }

  return (
    <div
      style={{
        height: props.show ? '100%' : '0%',
        opacity: props.show ? '1' : '0',
      }}
      className={classes.Backdrop}
      onClick={(e) => closeBackdrop(e)}
    >
      {props.children}
    </div>
  )
}

export default Backdrop
