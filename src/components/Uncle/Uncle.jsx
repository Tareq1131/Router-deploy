//import React from 'react'

import { createContext, useContext} from "react";
import Cusin from "../Cusin/Cusin";
import { MoneyContext } from "../Grandpa/Grandpa";

export const MoneyContext2 = createContext(0);
export default function Uncle() {
    const[money, setMoney]= useContext(MoneyContext);
  
  return (
    <div>
      <h2>Uncle</h2>
      <p><small>grandpa money: {money}</small></p>
      <button onClick={()=>setMoney(money+ 1000)}>Send 1000Tk</button>
      <button onClick={()=>setMoney(money-1000)}> Remove</button>
      <section className="flex">
        <Cusin>Nabil</Cusin>
        <Cusin>Nabila</Cusin>
      </section>
    </div>
  )
}
