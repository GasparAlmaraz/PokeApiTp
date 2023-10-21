const axios = require('axios');

const getPokeByName = async (req, res) => {
    const { name } = req.params;
    try {
        let pokemon = {};

        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
        );
        const apiPokemon = response.data;
        pokemon = {
            id: apiPokemon.id,
            name: apiPokemon.name,
            image: apiPokemon.sprites.other.home.front_default,
            type: apiPokemon.types.map((type) => type.type.name),
            attack: apiPokemon.stats[1].base_stat,
            hp: apiPokemon.stats[0].base_stat,
            attack: apiPokemon.stats[1].base_stat,
            defense: apiPokemon.stats[2].base_stat,
            baseExperience: apiPokemon.base_experience,
            speed: apiPokemon.stats[5].base_stat || null,
            height: apiPokemon.height || null,
            weight: apiPokemon.weight || null,
        };
        
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = getPokeByName;