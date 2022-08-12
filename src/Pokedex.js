import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import mockData from './mockData'
import { toFirstCharUppercase } from './constants'
import { 
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Typography
} from '@material-ui/core'


const useStyles = makeStyles({
  pokedexContainer: {
    paddingTop: '20px',
    paddingLeft: '50px',
    paddingRight: '50px',
  },
  cardMedia: {
    margin: 'auto',
  },
  cardContent: {
    textAlign: 'center'
  },
})


const Pokedex = () => {
  const classes = useStyles()
  const [pokemonData, setPokemonData] = useState(mockData)
  
  const getPokemonCard = (pokemonId) => {
    // console.log(pokemonData[`${pokemonId}`])
    const { id, name, sprites: {front_default: sprite}} = pokemonData[`${pokemonId}`]
    // const sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"

    console.log(sprite)
    return(
      <Grid item xs={12} sm={4} key={pokemonId}>
        <Card onClick = {() => history.push(`$/{pokemonId}`)}>
          <CardMedia 
            className={classes.cardMedia}
            image={sprite}
            style={{width: '130px', height: '130px'}}
          />
          <CardContent className={classes.cardContent}>
            <Typography>{`${id}. ${toFirstCharUppercase(name)}`}</Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  }

  return (
    <>
      <AppBar position='static'>
        <Toolbar/>
      </AppBar>
      {pokemonData ? (
        <Grid container spacing={2} className={classes.pokedexContainer}>
        {Object.keys(pokemonData).map(pokemonId => 
          getPokemonCard(pokemonId)
          )}
      </Grid>
      ) : (
        <CircularProgress />
      )}
      
    </>
  )
}

export default Pokedex