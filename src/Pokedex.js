import React, { useState, useEffect } from 'react'
import { alpha, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import { toFirstCharUppercase } from './constants'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { 
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Typography,
  TextField
} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
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
  searchContainer: {
    display: 'flex',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    paddingLeft: '20px',
    paddingRight: '20px',
    marginTop: '5px',
    marginBottom: '5px',
  }
}))


const Pokedex = () => {
  const nav = useNavigate()
  const classes = useStyles()
  const [pokemonData, setPokemonData] = useState(undefined)
  

  useEffect(() => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
    .then( (res) => {
      const {data: {results}} = res
      const newPokemonData = {}
      results.forEach((pokemon,index) => {
        newPokemonData[index+1] = {
          id: index+1,
          name: pokemon.name,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`,
        }
      })
      setPokemonData(newPokemonData)
    })
  },[])


  const getPokemonCard = (pokemonId) => {
    const { id, name, sprite} = pokemonData[`${pokemonId}`]

    console.log(sprite)
    return(
      <Grid item xs={12} sm={4} key={pokemonId}>
        <Card onClick = {() => nav(`${pokemonId}`)}>
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
        <Toolbar>
          <div className={classes.searchContainer}>
            <SearchIcon className={classes.searchIcon}/>
            <TextField className={classes.textInput}/>
          </div>
        </Toolbar>
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