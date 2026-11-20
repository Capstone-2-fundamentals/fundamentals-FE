import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ExpenseList from './pages/ExpenseList'
import { Route, Routes } from 'react-router'
import CreateExpense from './pages/CreateExpense'

function App() {
  


  return (
    <div>
      <Routes>
        <Route path="/" element={<ExpenseList/>} />
        <Route path="/create" element={<CreateExpense />} />
      
      </Routes>

    </div>
  
    
     
)}

export default App
