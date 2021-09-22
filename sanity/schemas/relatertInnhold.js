export default {
    title: "Relatert innhold",
    name: "relatertinnhold",
    type: "document",
    fields: [
        {
            title: "Navn",
            name: "navn",
            type: "string"
        },
        {
            title: "Lenke",
            name: "lenke",
            type: "url"
        },
        {
            title: "Tema",
            name: "tema",
            type: "reference",
            to: [{type: "tema"}]
        }
    ]
}
