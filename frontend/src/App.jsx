import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landingpage from './pages/Landingpage.jsx'
import UserProvider from '../context/UserContext.jsx'

const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={<Landingpage />} /> {/* ✅ Capitalized usage */}
      </Routes>
    </UserProvider>
  )
}

export default App
