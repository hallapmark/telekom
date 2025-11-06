import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import Ilmumine from './pages/Ilmumine'
import Kujundus from './pages/Kujundus'
import Muutmine from './pages/Muutmine'
import Telefon from './pages/Telefon'
import Hind from './pages/Hind'
import Kontakt from './pages/Kontakt'
import Meist from './pages/Meist'
import { useRef, useState } from 'react'
import Months from './pages/Arrays/Months';
import Arrays from './pages/Arrays/Arrays';
import Animals from './pages/Arrays/Animals';
import Words from './pages/Arrays/Words';

function App() {
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
    }

    if (paroolRef.current.value === "%23Av4236") {
      muudaSisselogitud("jah");
      toast.success(`${kasutajaNimiRef.current.value}, oled sisselogitud!`);
      return;
    };
    toast.error("Vale parool!");
  }

  return (
    <div className="App">
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
      <Link to="/arrays"><button>Arrays</button></Link>
      
      <Routes>
        <Route path="/" element={ <Navigate to="/ilmumine" />} />
        <Route path="/ilmumine" element={ <Ilmumine/> } />
        <Route path="/kujundus" element={ <Kujundus/> } />
        <Route path="/muutmine" element={ <Muutmine/> } />
        <Route path="/telefon" element={ <Telefon/> } />
        <Route path="/hind" element={ <Hind/> } />
        <Route path="/kontakt" element={ <Kontakt/> } />
        <Route path="/meist" element={ <Meist/> } />

        <Route path="/arrays" element={ <Arrays/> } />
        <Route path="/months" element={ <Months/>} />
        <Route path="/animals" element={ <Animals/>} />
        <Route path="/words" element={ <Words/>} />

        <Route path="/*" element={ 
          <div>
            <h2>404</h2>
            <h3>Page not found</h3>
          </div> 
        } />
      </Routes>

      <ToastContainer 
        theme="colored"
        autoClose={3000}
      />

    </div>
  )
}

export default App
