import { useState } from "react";

export default function Calcolatrice() {
  let [number, setNumber] = useState("");
  let [provNumber, setProvNumber] = useState(null)
  let [operation, setOperator] = useState(null)

  let arrayNumber = ["1","2","3","4","5","6","7","8","9", "0"," ","."];
  let arraySymbols = ["x", "+", "/", "-", "%", "="]

  const handleClick = (e) => {
    const getValue = e.currentTarget.value;
    switch(getValue) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      setNumber(
        number === "0" ? getValue : number + getValue
      );
      break;

      case "+":
      case "-":
      case "x":
      case "%":
      setProvNumber(number)
      setOperator(getValue)
      setNumber("")
      break;

      case ".":
      if(!number.includes(".")) setNumber(number + ".");
      break;

      case "=":
        const prev = parseFloat(provNumber);
        const curr = parseFloat(number);
        const total= operation === "+" ? prev+curr :
                     operation === "-" ? prev-curr :
                     operation === "x" ? prev*curr :
                     operation === "/" ? prev/curr :
                     operation === "%" ? (prev / 100) * curr : curr
      setNumber(total)
      setProvNumber("")
      setOperator(null)
      break;

      case "clear":
      setNumber("")
      setOperator(null)
      setProvNumber(null)
      break;

      case "clearEntry": 
      setNumber((number) => number === "" ? "0" : number.slice(0,-1))
      break;
    }
  };

  return (
    <>
      <div id="contenitoreCalcolatrice">
        <div className="contenitoreRisultato">
          {provNumber}
          {operation}
          {number === "" ? "0" : number}
          </div>
        <div id="contenitoreValori">
          <div className="contenitoreNumeri">
            {arrayNumber.map((n) => (
              <button
                key={n}
                value={n}
                className="celle numero"
                onClick={handleClick}
              >
                {n}
              </button>
            ))}
          </div>
          <div className="contenitoreOperandi">
            <button className="celle operandi" onClick={handleClick} value="clearEntry"> <i className="fa-solid fa-delete-left"></i> </button>
            <button className="celle operandi" onClick={handleClick} value="clear" > CE </button>
            {arraySymbols.map((s) => (
              <button 
              key={s}
              value={s}
              className="celle operandi"
              onClick={handleClick}
              >
                {s}
             </button>
             
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

