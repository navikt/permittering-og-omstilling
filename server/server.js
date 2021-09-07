const express = require('express');
const { getHtmlWithDecorator } = require('./decorator-utils');
const sanity = require('./sanity-utils');
const path = require('path');
const buildPath = path.join(__dirname, '../build');

const app = express();
const port = process.env.PORT || 3000;
const BASE_PATH = '/permittering-og-omstilling';


const startServer = async () => {

    app.use(BASE_PATH + '/', express.static(buildPath, { index: false }));

    app.get(`${BASE_PATH}/internal/isAlive`, (req, res) =>
        res.sendStatus(200)
    );
    app.get(`${BASE_PATH}/internal/isReady`, (req, res) =>
        res.sendStatus(200)
    );

    app.get(`${BASE_PATH}/innhold/`, (req, res) => {
        sanity.fetchInnhold(res);
    });

    app.get(`${BASE_PATH}/*`, async (req, res) => {
        try {
            res.send(await getHtmlWithDecorator(buildPath + '/index.html'));
        } catch (e) {
            console.error(e);
            console.warn(
                'Kunne ikke hente dekoratør (header/footer). Appen serves uten dekoratør.'
            );
            res.sendFile(buildPath + '/index.html');
        }
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