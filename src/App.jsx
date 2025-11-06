import './App.css'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import Ilmumine from './pages/Ilmumine'
import Kujundus from './pages/Kujundus'
import Muutmine from './pages/Muutmine'
import Telefon from './pages/Telefon'
import Hind from './pages/Hind'
import Kontakt from './pages/Kontakt'
import Meist from './pages/Meist'
import { useRef, useState } from 'react'

function App() {
  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const [sonum, muudaSonum] = useState("");
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

  function logiSisse() {
    if (paroolRef.current.value === "123") {
      muudaSisselogitud("jah");
      muudaSonum(kasutajaNimiRef.current.value + ", oled sisselogitud");
      return;
    }
    muudaSonum("Vale parool");
  }

  return (
    <div className="App">
      <div>{sonum}</div>
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

      <Link to="/ilmumine"><button>Ilmumine</button></Link>
      <Link to="/kujundus"><button>Kujundus</button></Link>
      <Link to="/muutmine"><button>Muutmine</button></Link>
      <Link to="/telefon"><button>Telefon</button></Link>
      <Link to="/hind"><button>Hind</button></Link>
      <Link to="/kontakt"><button>Kontakt</button></Link>
      <Link to="/meist"><button>Meist</button></Link>
      
      <Routes>
        <Route path="/" element={ <Navigate to="/ilmumine" />} />
        <Route path="/ilmumine" element={ <Ilmumine/> } />
        <Route path="/kujundus" element={ <Kujundus/> } />
        <Route path="/muutmine" element={ <Muutmine/> } />
        <Route path="/telefon" element={ <Telefon/> } />
        <Route path="/hind" element={ <Hind/> } />
        <Route path="/kontakt" element={ <Kontakt/> } />
        <Route path="/meist" element={ <Meist/> } />
        <Route path="/*" element={ 
          <div>
            <h2>404</h2>
            <h3>Page not found</h3>
          </div> 
        } />
      </Routes>

    </div>
  )
}

export default App
