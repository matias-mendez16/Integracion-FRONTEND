import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DerechosReservados } from './components/DerechosReservados'



function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/derechos-reservados" element={<DerechosReservados />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
