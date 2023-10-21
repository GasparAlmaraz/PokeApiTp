const axios = require("axios");

const getPokemonInfo = async (pokemon) => {
    const response = await axios.get(pokemon.url);
    const { id, name, sprites, types, stats, base_experience } = response.data;
    const image = sprites.other.home.front_default;
    const type = types.map(type => type.type.name);

    return { id, name, image, type };
}

module.exports = getPokemonInfo;