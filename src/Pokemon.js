import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import mockData from './mockData'
import { Typography, Link } from '@material-ui/core'
import { toFirstCharUppercase } from './constants'


const Pokemon = () => {
  const { pokemonId } = useParams()
  const [pokemon, setPokemon] = useState(mockData[`${pokemonId}`])

  const generatePokemonJSX = () => {
    const { name, id, species, height, weight, types, sprites } = pokemon
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
    const {front_default} = sprites
    return (
      <>
        <Typography variant='h1'>
          {`${id}.`} {toFirstCharUppercase(name)}
          <img alt='the pokemon is being displayed' src={front_default}/>
        </Typography>
        <img alt = 'the pokemon is being displayed' style={{width: '300px', height: '300px'}} src={fullImageUrl}/>
        <Typography variant='h3'>Pokemon Info</Typography>
        <Typography>
          {'Species: '}
          <Link href={species.url}>{species.name}</Link>
        </Typography>
      </>
    )
  }

  return (
    <>{generatePokemonJSX()}</>
  )
}

export default Pokemon