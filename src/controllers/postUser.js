const fs = require('fs');
const path = require('path'); 
const validator = require('validator');
const validateUser = require('./utils/validateUser');

const postUser = (req, res) => {
    const { username, password } = req.body;

    try {
        // const validationResult = validateUser(username, password);
        // if(!validationResult.isValid) res.status(400).json({ message: validationResult.message });

        if (!validator.isEmail(username)) {
            return res.status(400).json({ message: 'Username is not in the right e-mail format.' })
        }
    
        if (password.length < 8 || password.length > 16) {
            return res.status(400).json({ message: 'Password must be 8 characters minimum and 16 characters max.' })
        }

        if(fs.existsSync(`src/data/${username}.json`)) 
            return res.status(403).json({ message: 'This user already exist. Try another username.'});

        let newUser = { username: username, password: password, wallet: 0, ownedPokemonIds: [], answeredQuestions: 0};
        
        let dataToSave = JSON.stringify(newUser);

        fs.writeFileSync(
            `src/data/${username}.json`, 
            dataToSave, 
            { encoding: "utf8", }
            );
        
        return res.status(200).json(newUser);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
}

module.exports = postUser;