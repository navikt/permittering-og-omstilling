export default {
    title: "Steg for steg",
    name: "stegforsteg",
    type: "document",
    fields: [
        {
            title: "Tittel",
            name: "tittel",
            type: "string"
        },
        {
            type: 'array',
            name: 'steg',
            of: [
                {
                    title: 'Steg',
                    type: 'steg'
                },
            ]
        }

    ]
}

