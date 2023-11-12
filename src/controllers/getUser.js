const fs = require('fs');
const path = require("path");
const validateUser = require('./utils/validateUser');

const getUser = (req, res) => {
    const { username, password } = req.query;

    try {
        // const validationResult = validateUser(username, password);
        // if(!validationResult.isValid) {
        //     return res.status(400).json({ message: validationResult.message });
        // }
        
        if(!fs.existsSync(`src/data/${username}.json`)) {
            return res.status(404).json({ message: 'This user does not exist. Try registering first.'});
        }

        const result = fs.readFileSync(`src/data/${username}.json`, { encoding: 'utf8', flag: 'r' });
        const data = JSON.parse(result);

        if(data.password !== password) {
            return res.status(400).json({ message: 'Password does not match, try again.' });
        }

        return res.status(200).json(data);
    } catch (error) {
        // En caso de error, también debes retornar la respuesta en lugar de seguir ejecutando código
        return res.status(500).json({ message: error.message });
    }
}

module.exports = getUser;