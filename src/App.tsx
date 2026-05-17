import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './routes/ProtectedRoute'
import PublicRoute from './routes/PublicRoute'
import LoginUser from "./pages/LoginUser"
import Dashboard from './pages/Dashboard'

function App() {
  return (
   <BrowserRouter>
     <AuthProvider>
        <Routes>
            <Route element={<PublicRoute/>}>
              <Route path='/' element={<LoginUser/>}/>
            </Route>
            <Route element={<ProtectedRoute/>}>
              <Route path="/dashboard" element={<Dashboard/>}/>
            </Route>
            <Route path='*' element={<Navigate to="/" replace/>}/>
        </Routes>
     </AuthProvider>
   </BrowserRouter>
  )
}

export default App
