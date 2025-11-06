import { ToastContainer, toast } from "react-toastify";
import { useRef, useState } from "react";

function Logimine() {
  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const [paroolKorrektne, setParoolKorrektne] = useState(true);
  const [parooliVeaSonum, setParooliVeaSonum] = useState("");
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

  const kontrolliParooli = () => {
    if (paroolRef.current.value.length < 8) {
      setParooliVeaSonum("Parool on liiga lühike!");
      setParoolKorrektne(false);
      return
    }
    if (paroolRef.current.value === paroolRef.current.value.toLowerCase()) {
      setParooliVeaSonum("Parool peab sisaldama vähemalt üht suurt tähte!");
      setParoolKorrektne(false);
      return;
    }
    if (paroolRef.current.value === paroolRef.current.value.toUpperCase()) {
      setParooliVeaSonum("Parool peab sisaldama vähemalt üht väikest tähte!");
      setParoolKorrektne(false);
      return;
    }

    if (!(paroolRef.current.value.includes("%"))) {
      setParooliVeaSonum("Parool peab sisaldama % tähemärki!");
      setParoolKorrektne(false);
      return;
    }
    setParooliVeaSonum("");
    setParoolKorrektne(true);
  }

  const logiSisse = () => {
    if (paroolKorrektne && paroolRef.current.value === "%23Av4236") {
      muudaSisselogitud("jah");
      toast.success(`${kasutajaNimiRef.current.value}, oled sisselogitud!`);
      return;
    }
    toast.error("Vale parool!");
  }

  return (
    <div>
      {sisselogitud == "ei" && (
        <div>
          <label>Kasutajanimi</label> <br />
          <input ref={kasutajaNimiRef} type="text" /> <br />
          <label>Parool</label> <br />
          <input ref={paroolRef} onChange={kontrolliParooli} type="password" />
        </div>
      )}
      {sisselogitud === "ei" && (
        <button className="logi" onClick={logiSisse}>
          Logi sisse
        </button>
      )}
      {sisselogitud === "jah" && (
        <button className="logi" onClick={() => muudaSisselogitud("ei")}>
          Logi välja
        </button>
      )}
      <br />
      { paroolKorrektne === false && <div>Parool pole korrektne: {parooliVeaSonum}</div> }
      <ToastContainer 
        theme="dark"
        autoClose={3000}
      />
    </div>
  );
}
export default Logimine;
