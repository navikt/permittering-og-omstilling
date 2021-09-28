export default {
  title: "Steg",
  name: "steg",
  type: "object",
  fields: [
    {
      title: "Steg",
      name: "steg",
      type: "string",
    },
    {
      title: "Beskrivelse",
      name: "beskrivelse",
      type: "array",
      of: [
        { type: "block" },
        { type: "reference", to: [{ type: "infofelt" }] },
      ],
    },
    {
      title: "Tema",
      name: "tema",
      type: "reference",
      to: [{ type: "tema" }],
    },
  ],
};
