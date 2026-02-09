import { useState } from "react";

export default function Calcolatrice() {
  let [valueInput, setvalueInput] = useState("");
  let [valueInputSucc, setvalueInputSucc] = useState(null)
  let [operation, setOperator] = useState(null)

  let arrayvalueInput = ["1","2","3","4","5","6","7","8","9", "0"," ","."];
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
      setvalueInput(
        valueInput === "0" ? getValue : valueInput + getValue
      );
      break;

      case "+":
      case "-":
      case "x":
      case "%":
      case "/":
      setvalueInputSucc(valueInput)
      setOperator(getValue)
      setvalueInput("")
      break;

      case ".":
      if(!valueInput.includes(".")) setvalueInput(valueInput + ".");
      break;

      case "=":
        const prev = parseFloat(valueInputSucc);
        const curr = parseFloat(valueInput);
        const total= operation === "+" ? prev + curr :
                     operation === "-" ? prev - curr :
                     operation === "x" ? prev * curr :
                     operation === "/" ? prev / curr :
                     operation === "%" ? (prev / 100) * curr : curr
      setvalueInput(total)
      setvalueInputSucc("")
      setOperator(null)
      break;

      case "clear":
      setvalueInput("")
      setOperator(null)
      setvalueInputSucc(null)
      break;

      case "clearEntry": 
      setvalueInput((valueInput) => valueInput === "" ? "0" : valueInput.slice(0,-1))
      break;
    }
  };

  return (
    <>
      <div id="contenitoreCalcolatrice">
        <div className="contenitoreRisultato">
          {valueInputSucc} <br />
          {operation} <br />
          {valueInput === "" ? "0" : valueInput}
          </div>
        <div id="contenitoreValori">
          <div className="contenitoreNumeri">
            {arrayvalueInput.map((n) => (
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



