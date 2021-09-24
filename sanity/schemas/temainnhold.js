export default {
  title: "Temainnhold",
  name: "temaInnhold",
  type: "document",
  fields: [
    {
      title: "Tittel",
      name: "tittel",
      type: "string",
    },
    {
      title: "Ingress",
      name: "ingress",
      type: "string",
    },
    {
      title: "ID",
      name: "id",
      type: "string",
    },
    {
      title: "Innhold",
      name: "innhold",
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
