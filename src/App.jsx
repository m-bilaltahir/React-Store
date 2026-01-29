import { useState } from 'react'
// import './App.css'
import Login from "./components/Login.jsx"
import Signup from './components/Signup.jsx'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
    <Outlet/> 
    </>
  )
}

export default App
