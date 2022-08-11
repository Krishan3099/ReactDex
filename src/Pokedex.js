import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { 
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardMedia,
  CardContent
} from '@material-ui/core'


const useStyles = makeStyles({
  pokedexContainer: {
    paddingTop: '20px',
    paddingLeft: '50px',
    paddingRight: '50px',
  }
})

const getPokemonCard = () => {
  return(
    <Grid item xs={12} sm={4}>
      <Card>
        <CardContent>hi</CardContent>
      </Card>
    </Grid>
  )
}

const Pokedex = () => {
  const classes = useStyles()

  return (
    <>
      <AppBar position='static'>
        <Toolbar/>
      </AppBar>
      <Grid container spacing={2} className={classes.pokedexContainer}>
        {getPokemonCard()}
        {getPokemonCard()}
        {getPokemonCard()}
        {getPokemonCard()}
        {getPokemonCard()}
      </Grid>
    </>
  )
}

export default Pokedex