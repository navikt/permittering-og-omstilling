const express = require('express');
const sanity = require('./sanity-utils');

const app = express();
const port = process.env.PORT || 3000;
const BASE_PATH = '/permittering-og-omstilling';


const startServer = async () => {

    app.get(`${BASE_PATH}/internal/isAlive`, (req, res) =>
        res.sendStatus(200)
    );
    app.get(`${BASE_PATH}/internal/isReady`, (req, res) =>
        res.sendStatus(200)
    );

    app.get(`${BASE_PATH}/innhold/`, (req, res) => {
        sanity.fetchInnhold(res);
    });

    console.log('start regular server');
    app.listen(port, () => {
        console.log('Server listening on port', port);
    });

};

const startServerWithDecorator = () => {
    startServer();
};

startServerWithDecorator();