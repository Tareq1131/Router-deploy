//import React from 'react';

import { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Special = ({ring}) => {
    const angti = useContext(RingContext)
    return (
        <div>
            <h2>Special</h2>
            {/* <p><small>Ring: {ring}</small></p> */}
            <p><small>Ring: {angti}</small></p>
        </div>
    );
};

export default Special;