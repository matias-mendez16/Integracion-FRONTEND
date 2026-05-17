import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import { AuthProvider } from "./context/AuthContext";
import { PublicRoute } from "./routes/PublicRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

