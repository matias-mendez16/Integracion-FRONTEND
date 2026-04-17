import './App.css'
import { BrowserRouter, Routes} from 'react-router-dom'

import { NavBar } from './components/NavBar'
import TestInversor from './components/TestInversor'



function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
      </Routes>
          <TestInversor/>
    </BrowserRouter>
  )
}

export default App
