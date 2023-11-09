const fs = require('fs');
const path = require('path'); 
const validator = require('validator');
const validateUser = require('./utils/validateUser');

const updateUser = (req, res) => {
    const { username, password, wallet, ownedPokemonIds} = req.body;
    try {
        // const validationResult = validateUser(username, password);
        // if(!validationResult.isValid) res.status(400).json({ message: validationResult.message });

        if(username != undefined) {
            if (!validator.isEmail(username)) {
                return res.status(400).json({ message: 'Username is not in the right e-mail format.' })
            }
        }else{
            return res.status(400).json({ message: "Username is required"});
        }

        if(password != undefined) {
            if (password.length < 8 || password.length > 16) {
                return res.status(400).json({ message: 'Password must be 8 characters minimum and 16 characters max.' })
            }
        }

        if(!fs.existsSync(`src/data/${username}.json`)) {
            return res.status(403).json({ message: 'This user does not exist. Try another username.'});
        }   

        const result = fs.readFileSync(`src/data/${username}.json`, { encoding: 'utf8', flag: 'r' });
        const data = JSON.parse(result);

        let updatedUser = { username: username, password: password ?? data.password, wallet: wallet ?? data.wallet, ownedPokemonIds: ownedPokemonIds ?? data.ownedPokemonIds};
        
        let dataToSave = JSON.stringify(updatedUser);

        fs.writeFileSync(
            `src/data/${username}.json`, 
            dataToSave, 
            { encoding: "utf8", }
            );
        
        return res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error.message);
    }
}

module.exports = updateUser;