export default {
    title: "Temainnhold",
    name: "temainnhold",
    type: "document",
    fields: [
        {
            title: "Tittel",
            name: "tittel",
            type: "string"
        },
        {
            title: "Ingress",
            name: "ingress",
            type: "string"
        },
        {
            title: "Innhold",
            name: "innhold",
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
