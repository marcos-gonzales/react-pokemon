import React, { useEffect, useState } from 'react'

import axios from 'axios'
import PokemonCard from '../PokemonCard/PokemonCard'
import classes from '../Modal/Modal.module.css'

const Modal = (props) => {
  const [getPokemon, setPokemon] = useState(null)

  useEffect(() => {
    if (!props.id) return <h1>Loading...</h1>
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
      .then((pokemon) => {
        setPokemon(pokemon)
      })
  }, [props.id])

  return props.show ? (
    <div
      onClick={props.closeModal}
      className={[
        classes.Modal,
        getPokemon
          ? getPokemon.data.types.map((pokemon) => pokemon.type.name).join(' ')
          : '',
      ].join(' ')}
    >
      <PokemonCard id={props.id} />
    </div>
  ) : null
}

export default Modal
