import {basename} from "./utils/paths";
import {PersonType} from "../poagpermitteringogomstilling/saniTyper";




export const fetchsanityJSON = async (): Promise<PersonType> => {
    const url =
        process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3333';
    const response = await fetch(`http://localhost:3333/person`, { method: 'GET' });
    if (response.ok) {
        return await response.json();

    }
    throw new Error(response.statusText)
};