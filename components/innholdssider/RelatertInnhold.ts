export type RelatertInnholdLenke = {
    navn: string,
    lenke: string,
    variant: string,
    tema: string
}

export type RelatertInnhold = {
    tittel: string,
    lenker: Array<RelatertInnholdLenke>,
    sortOrder: number
}