export default {
  title: "Relatert innhold",
  name: "relatertInnholdLenke",
  type: "object",
  fields: [
    {
      title: "Navn",
      name: "navn",
      type: "string",
    },
    {
      title: "Lenke",
      name: "lenke",
      type: "url",
    },
    {
      title: "Type",
      name: "variant",
      type: "string",
      options: {
        list: [ 
          { title: 'Skjema', value: 'skjema'},
          { title: 'Regelverk', value: 'regelverk' }
        ]
      }
    },
  ],
};
