const express = require('express');

const server = express();
const PORT = process.env.PORT || 3000;
const BASE_PATH = '/permittering-og-omstilling';

const startServer = () => {

    server.get(`${BASE_PATH}/api/internal/isAlive`, (req, res) => res.send('ok'));
    server.get(`${BASE_PATH}/api/internal/isReady`, (req, res) => res.send('ok'));

    server.get(`${BASE_PATH}/permittering`, (req, res) => {
        res.redirect(301, 'https://www.nav.no/arbeidsgiver/permittere');
    });
    server.get(`${BASE_PATH}/streik`, (req, res) => {
        res.redirect(301, 'https://www.nav.no/arbeidsgiver/permittere#streik');
    });
    server.get(`${BASE_PATH}`, (req, res) => {
        res.redirect(301, 'https://www.nav.no/arbeidsgiver/permittere-nedbemanne');
    });

    server.listen(PORT, () => {
        console.log('Server listening on port', PORT);
    });
}

startServer();
