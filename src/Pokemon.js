import React from 'react'
import { useParams } from 'react-router-dom'

const Pokemon = () => {
  const { pokemonId } = useParams()
  return (
    <div>{`This is the Pokemon Page for Pokemon #${pokemonId}`}</div>
  )
}

export default Pokemon