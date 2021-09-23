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
  ],
};
