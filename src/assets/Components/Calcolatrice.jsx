import { useState } from "react";

export default function Calcolatrice() {
  let [number, setnumber] = useState("");
  let [numberSucc, setnumberSucc] = useState(null);
  let [operator, setOperator] = useState(null);

  let arraynumber = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    " ",
    ".",
  ];
  let arraySymbols = ["x", "+", "/", "-", "%", "="];

  const handleClick = (e) => {
    const getValue = e.currentTarget.value;
    switch (getValue) {
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
        setnumber(number === "0" ? getValue : number + getValue);
        break;

      case "+":
      case "-":
      case "x":
      case "%":
      case "/":
        setnumberSucc(number);
        setOperator(getValue);
        setnumber("0");
        break;

      case ".":
        if (!number.includes(".")) setnumber(number + ".");
        break;

      case "=":
        const prev = parseFloat(numberSucc);
        const curr = parseFloat(number);
        const total =
          operator === "+"
            ? prev + curr
            : operator === "-"
              ? prev - curr
              : operator === "x"
                ? prev * curr
                : operator === "/"
                  ? prev / curr
                  : operator === "%"
                    ? (prev / 100) * curr
                    : curr;
        setnumber(total);
        setnumberSucc("");
        setOperator(null);
        break;

      case "clear":
        setnumber("");
        setOperator(null);
        setnumberSucc(null);
        break;

      case "clearEntry":
        setnumber((number) => (number === "" ? "0" : number.slice(0, -1)));
        break;
    }
  };

  return (
    <>
      <div id="contenitoreCalcolatrice">
        <div className="contenitoreRisultato">
          {numberSucc} 
          {operator} 
          {number === "" ? "0" : number}
        </div>
        <div id="contenitoreValori">
          <div className="contenitoreNumeri">
            {arraynumber.map((n) => (
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
            <button
              className="celle operandi"
              onClick={handleClick}
              value="clearEntry"
            >
              {" "}
              <i className="fa-solid fa-delete-left"></i>{" "}
            </button>
            <button
              className="celle operandi"
              onClick={handleClick}
              value="clear"
            >
              {" "}
              CE{" "}
            </button>
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

//* Ho trovato una guida e l'ho seguita per capire gestire gli stati.
//* Ho integrato tutti gli stati seguendo un pò la logica e la guida.

//todo In questo momento la mia calcolatrice è in grado di fare calcoli semplici.

//todo Vorrei integrare:
// La possibilità di fare calcoli + complessi
// Una pulizia del codice
// La possibilità di vedere le operazioni a console
// La possibilità di tenere una cronologia delle operazioni
