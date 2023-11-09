const fs = require('fs');
const validateUser = require('./utils/validateUser');

const updateUser = (req, res) => {
    const { username, password, wallet, ownedPokemonIds} = req.body;
    try {
        const validationResult = validateUser(username, password);
        if(!validationResult.isValid) res.status(400).json({ message: validationResult.message });

        if(!fs.existsSync(path.resolve(`../data/${username}.json`))) 
            res.status(403).json({ message: 'This user does not exist. Try another username.'});

        let updatedUser = { username: username, password: password, wallet: wallet, ownedPokemonsIds: ownedPokemonIds};
        
        let dataToSave = JSON.stringify(updatedUser);

        fs.writeFileSync(
            path.resolve(`../data/${username}.json`), 
            dataToSave, 
            { encoding: "utf8", }
            );
        
        res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
}

module.exports = updateUser;