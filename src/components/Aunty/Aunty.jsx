//import React from 'react'

import Cusin from "../Cusin/Cusin";

export default function Aunty({ring}) {
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cusin>Abir</Cusin>
        <Cusin hasFriend={true} ring={ring}>Niber</Cusin>
      </section>
    </div>
  )
}
