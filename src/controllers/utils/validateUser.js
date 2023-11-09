const validator = require('validator');

const validateUser = (username, password) => {
    if (!validator.isEmail(username)) {
        return { message: 'Username is not in the right e-mail format.', isValid: false }
    }

    if (password.length < 8 || password.length > 16) {
        return { message: 'Password must be 8 characters minimum and 16 characters max.', isValid: false }
    }

    return true;
}

module.exports = validateUser;