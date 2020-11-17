import React, { useEffect, useState } from 'react'

import axios from 'axios'
import classes from './PokemonCards.module.css'
import Modal from '../Modal/Modal'
import Backdrop from '../Modal/Backdrop/Backdrop'
import './PokemonCards.css'

const PokemonCards = (props) => {
  const [getPokemon, setPokemon] = useState()
  const [getSinglePokemon, setSinglePokemon] = useState(null)
  const [getModal, setModal] = useState(null)
  const [getBackdrop, setBackdrop] = useState(null)
  const [searchInputValue, setSearchInputValue] = useState('')

  // grass #78c850
  // poison #a040a0
  // water #6890f0
  // bug #a8b820
  // flying #a890f0
  // normal #a8a878
  // electric #f8d030
  // ground #e0c068
  // fairy #ee99ac
  // psychic #f85888
  // fighting #c03028
  // rock #b8a038
  // dragon #7038f8
  // ice #98d8d8
  // fire  #f08030

  let pokemonType = []

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0')
      .then((response) => {
        setPokemon(response.data.results)
      })
  }, [])

  const getPokemonType = (index) => {
    index = index + 1

    if (
      index === 1 ||
      index === 2 ||
      index === 3 ||
      index === 43 ||
      index === 44 ||
      index === 45 ||
      index === 69 ||
      index === 70 ||
      index === 71
    ) {
      pokemonType.push('#78c850, #a040a0')
    }

    if (index === 79 || index === 80) {
      pokemonType.push('#6890f0, #f85888')
    }

    if (
      index === 4 ||
      index === 5 ||
      index === 37 ||
      index === 38 ||
      index === 58 ||
      index === 59 ||
      index === 77 ||
      index === 78 ||
      index === 126 ||
      index === 136
    ) {
      pokemonType.push('#f08030')
    }

    if (index === 6 || index === 146) {
      pokemonType.push('#f08030, #a890f0')
    }

    //water
    if (
      index === 7 ||
      index === 8 ||
      index === 9 ||
      index === 54 ||
      index === 55 ||
      index === 60 ||
      index === 61 ||
      index === 86 ||
      index === 90 ||
      index === 91 ||
      index === 98 ||
      index === 99 ||
      index === 116 ||
      index === 117 ||
      index === 118 ||
      index === 119 ||
      index === 120 ||
      index === 129 ||
      index === 134
    ) {
      pokemonType.push('#6890f0')
    }

    if (index === 87) {
      pokemonType.push('#6890f0, #98d8d8')
    }

    if (index === 92 || index === 93 || index === 94) {
      pokemonType.push('#f85888, #a040a0')
    }

    if (index === 62) {
      pokemonType.push('#6890f0, #c03028')
    }

    if (index === 46 || index === 47) {
      pokemonType.push('#a8b820, #78c850')
    }

    if (index === 114) {
      pokemonType.push('#78c850')
    }

    //bug flying
    if (index === 12 || index === 123) {
      pokemonType.push('#a8b820, #a890f0')
    }

    //grass

    if (index === 102 || index === 103) {
      pokemonType.push('#78c850, #f85888')
    }

    //normal flying
    if (
      index === 16 ||
      index === 17 ||
      index === 18 ||
      index === 21 ||
      index === 22 ||
      index === 83 ||
      index === 84 ||
      index === 85
    ) {
      pokemonType.push('#a8a878, #a890f0')
    }

    if (index === 31 || index === 34) {
      pokemonType.push('#a040a0, #e0c068')
    }

    //normal fairy
    if (index === 39 || index === 40) {
      pokemonType.push('#a8a878, #ee99ac')
    }

    if (index === 41 || index === 42) {
      pokemonType.push('#a040a0, #a890f0')
    }

    //water poison
    if (index === 72 || index === 73) {
      pokemonType.push('#6890f0, #a040a0')
    }

    //rock ground
    if (
      index === 74 ||
      index === 75 ||
      index === 76 ||
      index === 95 ||
      index === 111 ||
      index === 112
    ) {
      pokemonType.push('#b8a038, #e0c068')
    }

    if (index === 121) {
      pokemonType.push('#6890f0, #f85888')
    }

    //psychic fairy
    if (index === 122) {
      pokemonType.push('#f85888, #ee99ac')
    }

    if (
      index === 13 ||
      index === 14 ||
      index === 15 ||
      index === 48 ||
      index === 49
    ) {
      //bug ??
      pokemonType.push('#a8b820, #a040a0')
    }

    //bug
    if (index === 10 || index === 11 || index === 127) {
      pokemonType.push('#a8b820')
    }

    //flying
    if (index === 142) {
      pokemonType.push('#a890f0')
    }
    //water fighting

    //normal
    if (
      index === 19 ||
      index === 20 ||
      index === 52 ||
      index === 53 ||
      index === 108 ||
      index === 113 ||
      index === 115 ||
      index === 128 ||
      index === 132 ||
      index === 133 ||
      index === 137 ||
      index === 143
    ) {
      pokemonType.push('#a8a878')
    }

    if (
      index === 23 ||
      index === 24 ||
      index === 29 ||
      index === 30 ||
      index === 32 ||
      index === 33 ||
      index === 88 ||
      index === 89 ||
      index === 109 ||
      index === 110
    ) {
      pokemonType.push('#a040a0')
    }

    //electric
    if (
      index === 25 ||
      index === 26 ||
      index === 81 ||
      index === 82 ||
      index === 100 ||
      index === 101 ||
      index === 125 ||
      index === 135
    ) {
      pokemonType.push('#f8d030')
    }

    //electric flying
    if (index === 145) {
      pokemonType.push('#f8d030, #a890f0')
    }

    //ground
    if (
      index === 27 ||
      index === 28 ||
      index === 50 ||
      index === 51 ||
      index === 104 ||
      index === 105
    ) {
      pokemonType.push('#e0c068')
    }

    //fairy
    if (index === 35 || index === 36) {
      pokemonType.push('#ee99ac')
    }

    //ice psychic
    if (index === 124) {
      pokemonType.push('#98d8d8, #f85888')
    }

    //water flying
    if (index === 130) {
      pokemonType.push('#6890f0, #a890f0')
    }
    //pyschic

    if (
      index === 63 ||
      index === 64 ||
      index === 65 ||
      index === 96 ||
      index === 97 ||
      index === 150 ||
      index === 151
    ) {
      pokemonType.push('#f85888')
    }

    //fighting
    if (
      index === 56 ||
      index === 57 ||
      index === 66 ||
      index === 67 ||
      index === 68 ||
      index === 106 ||
      index === 107
    ) {
      pokemonType.push('#c03028')
    }

    //ice water
    if (index === 131) {
      pokemonType.push('#98d8d8, #6890f0')
    }

    if (index === 138 || index === 139 || index === 140 || index === 141) {
      pokemonType.push('#b8a038, #6890f0')
    }

    //dragon
    if (index === 147 || index === 148) {
      pokemonType.push('#7038f8')
    }

    //dragon flying
    if (index === 149) {
      pokemonType.push('#7038f8, #a890f0')
    }

    //ice flying
    if (index === 144) {
      pokemonType.push('#98d8d8, #a890f0')
    }
  }

  const getInputPokemon = (e) => {
    setSearchInputValue(e.target.value)
  }

  const testing = (id) => {
    setModal(true)
    setBackdrop(true)
    setSinglePokemon(id.target.alt)

    if (!id.target.alt) {
      setSinglePokemon(id.target.lastChild.alt)
      if (!id.target.lastChild.alt) {
        setSinglePokemon(id.target.nextElementSibling.alt)
      }
    }
  }

  const getIdPtag = (id) => {
    setModal(true)
    setBackdrop(true)
    setSinglePokemon(id.target.nextElementSibling.alt)
  }

  const closeModalOpacity = () => {
    setBackdrop(false)
    setModal(false)
  }

  if (!getPokemon) return <p>loading...</p>
  if (!pokemonType) return <h1>loading...</h1>

  let filteredContacts = getPokemon.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchInputValue.toLowerCase())
  })

  return (
    <div className={classes.PokemonCardsContainer}>
      <div className={classes.SearchInput}>
        <img src={`${process.env.PUBLIC_URL}/images/172.png`} alt='pichu' />
        <label>
          Search
          <input
            type='search'
            placeholder='bulbasaur...'
            onChange={(e) => getInputPokemon(e)}
          ></input>
        </label>
      </div>
      <Backdrop show={getBackdrop} clicked={closeModalOpacity}>
        <Modal show={getModal} id={getSinglePokemon} />
      </Backdrop>

      {filteredContacts.map((pokemon, index) => {
        getPokemonType(index)

        return (
          <div
            style={{
              background: pokemonType[index].includes(' ')
                ? `linear-gradient(120deg, ${pokemonType[index]})`
                : `${pokemonType[index]}`,
            }}
            className={[classes.PokemonCards, pokemonType[index]].join(' ')}
            id={pokemon.name}
            key={index}
            onClick={testing}
          >
            <p onClick={getIdPtag}>{pokemon.name}</p>
            <img
              id={pokemon.name}
              loading='lazy'
              className={pokemonType[index]}
              src={`${process.env.PUBLIC_URL}/images/${pokemon.name}.png`}
              alt={pokemon.name}
            />
          </div>
        )
      })}
    </div>
  )
}

export default PokemonCards
