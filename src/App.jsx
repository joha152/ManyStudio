import './App.css'
import { Route, Routes } from 'react-router';
import Home from "./Componentes/Home/Home";
import Contacto from "./Componentes/Contacto/Contacto";
import Footer from "./Componentes/Footer/Footer";
import Galeria from "./Componentes/Galeria/Galeria";
import QuienesSomos from "./Componentes/QuienesSomos/QuienesSomos";
import Navbar from "./Componentes/Navbar/Navbar";

function App() {
  // hay que hacer el ruteo en app
  //

  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path='/quienesSomos' element={<QuienesSomos />} />
        <Route path='/galeria' element={<Galeria />} />
      </Routes>
      {/* <Footer /> */}

    </>
  )
}

export default App
