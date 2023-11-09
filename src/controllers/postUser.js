const fs = require('fs');
const validateUser = require('./utils/validateUser');

const postUser = (req, res) => {
    const { username, password } = req.body;

    try {
        const validationResult = validateUser(username, password);
        if(!validationResult.isValid) res.status(400).json({ message: validationResult.message });

        if(fs.existsSync(path.resolve(`../data/${username}.json`))) 
            res.status(403).json({ message: 'This user already exist. Try another username.'});

        let newUser = { username: username, password: password, wallet: 0, ownedPokemonsIds: []};
        
        let dataToSave = JSON.stringify(newUser);

        fs.writeFileSync(
            path.resolve(`../data/${username}.json`), 
            dataToSave, 
            { encoding: "utf8", }
            );
        
        res.status(200).json(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
}

module.exports = postUser;