const fs = require('fs');
const validator = require('validator');

const getUser = (req, res) => {
    const { username, password } = req.query;

    if (!validator.isEmail(username)) {
        return res.status(400).json({ message: 'Username is not in the right e-mail format.' });
    }

    // Validación de longitud de contraseña
    if (password.length < 8 || password.length > 16) {
        return res.status(400).json({ message: 'Password must be 8 characters minimum and 16 characters max.' });
    }

    try {
        if(!fs.existsSync(`../data/${username}.json`)) res.status(404).json({ message: 'This user does not exist. Try register first.'});

        const result = fs.readFileSync(`../data/${username}.json`, { encoding: 'utf8', flag: 'r' });
        const data = JSON.parse(result);

        if(data.password != password) res.status(400).json({ message: 'Password does not match, try again.' });

        res.status(200).json({ content: data });
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = getUser;