const generatePassword = require('generate_password_given_length');

const pswd = generatePassword.generatePassword(10);
console.log(pswd);