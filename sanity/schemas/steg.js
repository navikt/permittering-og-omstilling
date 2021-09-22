export default {
    title: "Steg",
    name: "steg",
    type: "document",
    fields: [
        {
            title: "Steg",
            name: "steg",
            type: "string"
        },
        {
            title: "Beskrivelse",
            name: "beskrivelse",
            type: 'array',
            of: [{type: 'block'}]
        }
    ]
}
