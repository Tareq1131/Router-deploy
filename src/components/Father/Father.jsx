//import React from 'react';

import Brother from "../Brother/Brother";
import Mysels from "../Myself/Mysels";
import Sister from "../Sister/Sister";

const Father = ({ring}) => {
    return (
        <div>
            <h2>Father</h2>
            <section className="flex">
                <Mysels ring={ring}></Mysels>
                <Sister></Sister>
                <Brother></Brother>
                
            </section>
        </div>
    );
};

export default Father;