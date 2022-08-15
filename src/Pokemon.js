import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import mockData from './mockData'
import { Typography, Link, CircularProgress, Button } from '@material-ui/core'
import { toFirstCharUppercase } from './constants'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Pokemon = () => {
  const nav = useNavigate()
  const { pokemonId } = useParams()
  const [pokemon, setPokemon] = useState(mockData[`${pokemonId}`])

  useEffect(() => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
    .then((res) => {
      const {data} = res
      setPokemon(data)
    })
    .catch((err) => {
      setPokemon(false)
    })
  }, [pokemonId])


  //states
  //1. pokemon = undefined, getting info
  // return -> loading progress
  //2. pokemon = good data, got info
  // return -> actual info
  //3. pokemon = bad data / false
  // return -> pokemon not found

  const generatePokemonJSX = () => {
    const { name, id, species, height, weight, types, sprites } = pokemon
    // const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
    const fullImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
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
        <Typography>Height: {height} </Typography>
        <Typography>Weight: {weight} </Typography>
        <Typography variant='h6'>Types:</Typography>
        {types.map((typeInfo) => {
          const { type: {name} } = typeInfo;
          return <Typography key={name}> {`${name}`} </Typography>
        })}
      </>
    )
  }

  return (
    <>
      {pokemon === undefined && <CircularProgress/>}
      {pokemon !== undefined && pokemon && generatePokemonJSX()}
      {pokemon === false && <Typography>Pokemon not found</Typography>}
      {pokemon !== undefined && (
        <Button variant="contained" onClick={() => nav('/')}>
          Back to Pokedex
        </Button>
      )}
    </>
  )
}

export default Pokemon