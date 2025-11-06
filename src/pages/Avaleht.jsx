import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function Avaleht() {
  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

  function logiSisse() {
    if (paroolRef.current.value.length < 8) {
      toast.error("Parool on liiga lühike!");
      return;
    }

    if (paroolRef.current.value === paroolRef.current.value.toLowerCase()) {
      toast.error("Parool peab sisaldama vähemalt üht suurt tähte!");
      return;
    }

    if (paroolRef.current.value === paroolRef.current.value.toUpperCase()) {
      toast.error("Parool peab sisaldama vähemalt üht väikest tähte!");
      return;
    }

    if (!(paroolRef.current.value.includes("%"))) {
      toast.error("Parool peab sisaldama % tähemärki!");
      return;
    }

    if (paroolRef.current.value === "%23Av4236") {
      muudaSisselogitud("jah");
      toast.success(`${kasutajaNimiRef.current.value}, oled sisselogitud!`);
      return;
    }
    toast.error("Vale parool!");
  }
  return (
    <div>
      <h1>Avaleht</h1>
      {sisselogitud == "ei" && 
        <div>
          <label>Kasutajanimi</label> <br/>
          <input ref={kasutajaNimiRef} type="text" /> <br/>
          <label>Parool</label> <br/>
          <input ref={paroolRef}type="password" />
        </div>}
      {sisselogitud === "ei" && 
        <button className="logi" onClick={logiSisse}>Logi sisse</button>}
      {sisselogitud === "jah" && 
        <button className="logi" onClick={() => muudaSisselogitud("ei")}>Logi välja</button>}
      <br />
      <ToastContainer 
        theme="coloder"
        autoClose={3000}
      />
    </div>
  )
}
export default Avaleht