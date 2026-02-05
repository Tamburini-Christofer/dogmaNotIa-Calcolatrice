import { useState } from "react"

export default function Calcolatrice() {
  const [ number, setNumber ] = useState(0);

  const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const arraySymbol = ["X", "-", "+", "="];

  return (
    <>
      <div id="contenitoreCalcolatrice">
        <div className="contenitoreRisultato">{number}</div>
        <div id="contenitoreValori">
          <div className="contenitoreNumeri">
            {arrayNumber.map((n) => (
              <button key={n} className="celle numero">{n}</button>
            ))}
          </div>
          <div className="contenitoreOperandi">
            {arraySymbol.map((s) => (
              <button className="celle operandi">{s}</button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

//* Ho deciso di utilizzare la dicitura alternativa a quella che usavo di solito
//* Ho deciso di mappare in modo da non usare file ripetuto
//* Creazione dello state e assegnazione valore iniziale al contenitore del risultato che sarà 0 inizialmente
