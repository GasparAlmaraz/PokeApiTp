const express = require('express');
const { getPokemon, getPokeByID, getPokeByName, postPokemon } = require('../controllers');

const pokeRouter = express.Router();

pokeRouter.get("/getPokemons", getPokemon);
pokeRouter.get("/getPokemonByName/:name", getPokeByName);
pokeRouter.get("/getPokemonById/:idPokemon", getPokeByID);

pokeRouter.post("/postPokemon", postPokemon);

module.exports = pokeRouter;