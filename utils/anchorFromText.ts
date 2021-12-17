export const createAnchor = (ankerTekst: string) : string => {
    return ankerTekst ? ankerTekst.replace(/[^a-zA-Z0-9]/g,'-') : "-";
}
