import React, {useEffect, useState} from "react";
import {PersonType} from "../../../poagpermitteringogomstilling/saniTyper";
import {fetchsanityJSON} from "../../fetch-utils";


export const Omstilling = () =>  {
    const [person, setPerson] = useState<PersonType|undefined>(undefined);

    useEffect(() => {
        try {
            fetchsanityJSON().then(person => setPerson(person))
        }
        catch {
            console.log('fillern')
        }

    })

    return (
        <div className="App"> {
            person?.name + 'Hello'
        }
        </div>
    );
}

export default Omstilling;
