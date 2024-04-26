'use strict'

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const pathToFile = path.join(__dirname, 'counter.json');

let counter = {
    countMain: 0,
    countAbout: 0
};

if (fs.existsSync(pathToFile)) {
    counter = JSON.parse(fs.readFileSync(pathToFile, 'utf8'));
} else {
    fs.writeFileSync(pathToFile, JSON.stringify(counter));
}

app.get('/', (req, res) => {
    res.send(`
    <h1>Hello!</h1>
    <a href='/about'>About</a> 
    <p>Посещений: ${counter.countMain}</p>
    `);
    counter.countMain++;
    fs.writeFileSync(pathToFile, JSON.stringify(counter));
});
app.get('/about', (req, res) => {
    res.send(`<h1>About</h1><a href='/'>Home</a> <p>Посещений: ${counter.countAbout}</p>`);
    counter.countAbout++;
    fs.writeFileSync(pathToFile, JSON.stringify(counter));
});

const port = '8080';

app.listen(port, () => console.log("Started"));