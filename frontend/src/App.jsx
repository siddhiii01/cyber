import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ScamDetector } from './ScamDector'
import CyberSafeDashboard from './CyberSafeDashboard'
import { Routes, Route } from "react-router-dom";


function App() {
  

  return (
    <>
       <Routes>
      
      <Route path="/analyze" element={<ScamDetector />} />
      <Route path="/dashboard" element={<CyberSafeDashboard />} />
    </Routes>
    </>
  )
}

export default App
