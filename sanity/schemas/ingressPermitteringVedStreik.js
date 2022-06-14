export default {
    title: "Permitteringsmelding ved streik",
    name: "permitteringsmeldingVedStreik",
    type: "document",
    fields: [
        {
            title: "Innhold",
            name: "innhold",
            type: "array",
            of: [
                { type: "block" },
                { type: "reference", to: [{ type: "infofelt" }] },
            ],
        }
    ],
};
