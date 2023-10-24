//import React from 'react';

import Frind from "../Frind/Frind";

const Cusin = ({childern,hasFriend, ring}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p><small>{childern}</small></p>
           {hasFriend &&<Frind ring={ring}></Frind>}
        </div>
    );
};

export default Cusin;