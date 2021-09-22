export default {
    title: "Vanlig spørsmål",
    name: "vanligsporsmal",
    type: "document",
    fields: [
        {
            title: "Spørsmål",
            name: "sporsmal",
            type: "string"
        },
        {
            title: "Svar",
            name: "svar",
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            title: "Tema",
            name: "tema",
            type: "reference",
            to: [{type: "tema"}]
        }
    ]
}
