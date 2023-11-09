const getPokemon = require("./getPokemon");
const getPokeByID = require("./getPokeById");
const getPokeByName = require("./getPokemonByName");
const getTypes = require("./getTypes");
const postPokemon = require("./postPokemon");
const getUser = require("./getUser");
const postUser = require("./postUser");
const updateUser = require("./updateUser");

module.exports = {
    getPokemon,
    getPokeByID,
    getPokeByName,
    getTypes,
    postPokemon,
    getUser,
    postUser,
    updateUser
}