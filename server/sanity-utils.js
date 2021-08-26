const sanityClient = require('@sanity/client');

const client = sanityClient({
    projectId: process.env.SANITY_PROJECT_ID.trim(),
    dataset: process.env.SANITY_DATASET.trim(),
    token: process.env.SANITY_TOKEN.trim(),
    useCdn: false,
});

const sendDataObj = (json) => ({
    data: json,
    env: [process.env.SANITY_PROJECT_ID, process.env.SANITY_DATASET],
});

const sanityQuery = () => '*';

const fetchInnhold = async (res) => {
    const query = sanityQuery();
    const sanityResponse = await client.fetch(query);
    res.send(sendDataObj(sanityResponse));
};

module.exports.fetchInnhold = fetchInnhold;
