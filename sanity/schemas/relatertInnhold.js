export default {
  title: "Relatert innhold",
  name: "relatertinnhold",
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
      name: "lenker",
      of: [
        {
          title: "lenker",
          type: "relatertinnholdlenke",
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
