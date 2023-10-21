
const axios = require("axios");

const getTypes = async (req, res) => {
  try {

    const response = await axios.get('https://pokeapi.co/api/v2/type');
    const apiTypes = response.data.results;

    res.status(200).json(apiTypes);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = getTypes;