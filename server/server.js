const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const BASE_PATH = '/permittering-og-omstilling';


const startServer = async () => {
    app.get(`${BASE_PATH}/innhold/`, (req, res) => {
        const cacheInnhold = sanity.mainCacheInnhold.get(
            sanity.mainCacheInnholdKey
        );
        cacheInnhold
            ? res.send(sendDataObj(cacheInnhold))
            : sanity.fetchInnhold(res);
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