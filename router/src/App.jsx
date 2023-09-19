import { useState } from 'react'
import About from './about'
import './App.css'
import { Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/About">Abouts</Link>

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
    </Routes>
    </>
  )
}

function Home(){
  return(
    <h1>Home</h1>
  )
}

export default App
