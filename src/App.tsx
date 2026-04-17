import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { FAQ } from './components/FAQ'


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/faq" element={<FAQ />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
