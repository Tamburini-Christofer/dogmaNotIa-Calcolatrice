import { useState } from "react";

export default function Calcolatrice() {
  let [number, setNumber] = useState("");

  const arrayNumber = [
    { name: "1", value: 1 },
    { name: "2", value: 2 },
    { name: "3", value: 3 },
    { name: "4", value: 4 },
    { name: "5", value: 5 },
    { name: "6", value: 6 },
    { name: "7", value: 7 },
    { name: "8", value: 8 },
    { name: "9", value: 9 },
    { name: "0", value: 0 },
  ];

  let firstValue = "";

  function deleteNumber () {
    setNumber((number) => number === "" ? "0" : number.slice(0,-1))
  }

  function reset () {
    setNumber((number) => number = "0")
  }
  console.log(`Il valore di ${firstValue}`)
  return (
    <>
      <div id="contenitoreCalcolatrice">
        <div className="contenitoreRisultato">{number === "" ? "0" : number}</div>
        <div id="contenitoreValori">
          <div className="contenitoreNumeri">
            {arrayNumber.map((n) => (
              <button
                key={n.value}
                className="celle numero"
                onClick={() => setNumber((number) => number + n.name)}
              >
                {n.name}
              </button>
            ))}
            <button className="celle numero" onClick={deleteNumber}> <i className="fa-solid fa-delete-left"></i> </button>
            <button className="celle numero" onClick={reset}> CE </button>
          </div>
          <div className="contenitoreOperandi">
              <button className="celle operandi">X</button>
              <button className="celle operandi">-</button>
              <button className="celle operandi">+</button>
              <button className="celle operandi">=</button>
          </div>
        </div>
      </div>
    </>
  );
}


//* Ho deciso di utilizzare la dicitura alternativa a quella che usavo di solito
//* Ho deciso di mappare in modo da non usare file ripetuto
//* Creazione dello state e assegnazione valore iniziale al contenitore del risultato che sarà 0 inizialmente

//* L'idea iniziale è quella di aggiungere come stringa i vari numeri da poter usare nell'operazione successiva, poichè se avessi mantenuto
//* il valore numerico ci sarebbe stato un'aggiornamento dello stato e sostituzione di quello precedente. 

//* Ho creato delle condizioni per far sparire lo zero all'inizio tramite il metodo slice 
//* Ora, quando utilizzero gli operatori aritmetici, la stringa verrà trasformata in un numero e archiviata per poi essere eseguita al tasto =

//!Esempio di logica: 
//! Digito 64 come stringa
//! Seleziono uno degli operatori 
//! 64 viene archiviato in un array e l'operatore pushato insieme
//! Digito 98 come stringa
//! Seleziono uno degli operatori 
//! Lo stato deve variare con l'operazione in tempo reale. 

