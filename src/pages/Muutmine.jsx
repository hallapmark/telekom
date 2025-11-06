import { useState } from "react";

function Muutmine() {

  const [hind, uuendaHind] = useState(39);
  const [valitud, uuendaValitud] = useState("family");

  return (
    <div>
      <span 
        className={valitud === "family" ? "pakett-aktiivne" : "pakett"} 
        onClick={() => {
          uuendaHind(39)
          uuendaValitud("family")
      }}
      >Family</span>
      <span 
        className={valitud === "standard" ? "pakett-aktiivne" : "pakett"} 
        onClick={() => {
          uuendaHind(17)
          uuendaValitud("standard")
      }}
      >Standard</span>
      <span 
        className={valitud === "mini" ? "pakett-aktiivne" : "pakett"} 
        onClick={() => {
          uuendaHind(7)
          uuendaValitud("mini")
      }}
      >Mini</span>
      <div>Kuumakse: 0 €</div>
      <div>Tavahind: {hind} €</div>
    </div>
  )
}

export default Muutmine