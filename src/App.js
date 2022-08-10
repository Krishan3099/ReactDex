import React from 'react';
import Pokedex from './Pokedex';
import Pokemon from './Pokemon';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Pokedex/> }/>
        <Route
          exact
          path="/:pokemonId"
          element={<Pokemon/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
