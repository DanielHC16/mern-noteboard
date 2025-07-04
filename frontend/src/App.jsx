import React from 'react'
import { Route, Routes } from 'react-router'

// Importing Pages
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'

// Importing Components
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div data-theme="night">
      <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/create" element={<CreatePage/>} />
      <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App