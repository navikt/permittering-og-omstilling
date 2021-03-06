export default {
  title: "Relatert innhold",
  name: "relatertInnhold",
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
          type: "relatertInnholdLenke",
        },
      ],
    },
    {
      title: "Rekkefølge",
      type: "number",
      name: "sortOrder",
    },
    {
      title: "Tema",
      name: "tema",
      type: "reference",
      to: [{ type: "tema" }],
    },
  ],
};
