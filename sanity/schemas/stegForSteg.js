export default {
  title: "Steg for steg",
  name: "stegForSteg",
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
      type: "array",
      name: "steg",
      of: [
        {
          title: "Steg",
          type: "steg",
        },
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
