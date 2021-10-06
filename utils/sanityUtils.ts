// Forklaring: https://www.sanity.io/docs/query-cheat-sheet#a1da4a3b2adc
export const ekspanderReferanser = (felt: string) => `
  ${felt}[]{
    _type == "reference" => @->,
    _type != "reference" => @
  }
`;
