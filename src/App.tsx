import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login } from "./components/Login"
import { ProtectedLeyout } from "./components/ProtectedLeyout"
import { AuthProvider } from "./context/AuthProvider"

function App() {


  return (
   
  <AuthProvider>

    <Router>
    <Routes>
        <Route path="/" element={<h2>Bem Vindo ao React com typescript e context Api</h2>}> 
       
        </Route>
      </Routes>

      <Routes>
        <Route path="/profile" element={<ProtectedLeyout><h2>filo</h2></ProtectedLeyout>}> 
       
        </Route>
      </Routes>

      <Routes>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </Router>
  </AuthProvider>
  )
}

export default App
