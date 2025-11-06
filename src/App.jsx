import './App.css'
import { ToastContainer } from 'react-toastify';
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import Ilmumine from './pages/Ilmumine'
import Kujundus from './pages/Kujundus'
import Muutmine from './pages/Muutmine'
import Telefon from './pages/Telefon'
import Hind from './pages/Hind'
import Kontakt from './pages/Kontakt'
import Meist from './pages/Meist'
import Months from './pages/Arrays/Months';
import Arrays from './pages/Arrays/Arrays';
import Animals from './pages/Arrays/Animals';
import Words from './pages/Arrays/Words';
import Logimine from './pages/Logimine';
import Avaleht from './pages/Avaleht';

function App() {
  return (
    <div className="App">

      <Link to="/logi-sisse"><button>Logi sisse</button></Link>
      <Link to="/ilmumine"><button>Ilmumine</button></Link>
      <Link to="/kujundus"><button>Kujundus</button></Link>
      <Link to="/muutmine"><button>Muutmine</button></Link>
      <Link to="/telefon"><button>Telefon</button></Link>
      <Link to="/hind"><button>Hind</button></Link>
      <Link to="/kontakt"><button>Kontakt</button></Link>
      <Link to="/meist"><button>Meist</button></Link>
      <Link to="/arrays"><button>Arrays</button></Link>
      
      <Routes>
        <Route path="/" element={ <Navigate to="/avaleht" />} />
        <Route path="/avaleht" element={ <Avaleht /> } />
        <Route path="/logi-sisse" element={ <Logimine /> } />
        <Route path="/ilmumine" element={ <Ilmumine /> } />
        <Route path="/kujundus" element={ <Kujundus /> } />
        <Route path="/muutmine" element={ <Muutmine /> } />
        <Route path="/telefon" element={ <Telefon /> } />
        <Route path="/hind" element={ <Hind /> } />
        <Route path="/kontakt" element={ <Kontakt /> } />
        <Route path="/meist" element={ <Meist /> } />
        
        <Route path="/arrays" element={ <Arrays /> } />
        <Route path="/months" element={ <Months />} />
        <Route path="/animals" element={ <Animals />} />
        <Route path="/words" element={ <Words />} />

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
