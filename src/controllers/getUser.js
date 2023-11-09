const fs = require('fs');
const path = require("path");
const validator = require('validator');
const validateUser = require('./utils/validateUser');

const getUser = (req, res) => {
    const { username, password } = req.query;

    try {
        const validationResult = validateUser(username, password);
        if(!validationResult.isValid) res.status(400).json({ message: validationResult.message });
        
        if(!fs.existsSync(path.resolve(`../data/${username}.json`))) res.status(404).json({ message: 'This user does not exist. Try register first.'});

        const result = fs.readFileSync(`../data/${username}.json`, { encoding: 'utf8', flag: 'r' });
        const data = JSON.parse(result);

        if(data.password != password) res.status(400).json({ message: 'Password does not match, try again.' });

        res.status(200).json({ content: data });
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = getUser;