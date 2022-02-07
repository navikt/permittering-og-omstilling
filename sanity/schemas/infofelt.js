export default {
  title: "Infofelt",
  name: "infofelt",
  type: "document",
  fields: [
    {
      title: "Tittel",
      name: "tittel",
      type: "string",
    },
    {
      title: "ID",
      name: "id",
      type: "string",
    },
    {
      title: "Beskrivelse",
      name: "beskrivelse",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Type",
      name: "variant",
      type: "string",
      options: {
        list: [
          { title: 'Info', value: 'info'},
          { title: 'Success', value: 'success' },
          { title: 'Warning', value: 'warning' },
          { title: 'Error', value: 'error' },
          { title: 'Dropdown', value: 'dropdown'}
        ]
      }
    },
    {
      title: "Tema",
      name: "tema",
      type: "reference",
      to: [{ type: "tema" }],
    },
  ],
};
