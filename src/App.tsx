import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TerminosYCondiciones } from './components/TerminosYCondiciones'


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/terminos-y-condiciones" element={<TerminosYCondiciones />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
