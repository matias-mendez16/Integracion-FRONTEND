import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { NuestroEquipo } from './components/NuestroEquipo'
import { Contactenos } from './components/Contactenos'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { Login } from './components/Login'
import { TerminosYCondiciones } from './components/TerminosYCondiciones'
import { DescargoDeResponsabilidad } from './components/DescargoDeResponsabilidad'
import { DerechosReservados } from './components/DerechosReservados'
import { FAQ } from './components/FAQ'
import { NotFound } from './pages/'



function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuestro-equipo" element={<NuestroEquipo />} />
        <Route path="/contactenos" element={<Contactenos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/terminos-y-condiciones" element={<TerminosYCondiciones />} />
        <Route path="/descargo-de-responsabilidad" element={<DescargoDeResponsabilidad />} />
        <Route path="/derechos-reservados" element={<DerechosReservados />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
