import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { NavBar } from '../components'
import { Notes, NotesList, NotesInsert, NotesUpdate } from '../pages'

import 'bootswatch/dist/lux/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/notes/list" element={<NotesList />} />
            <Route path="/notes/create" element={<NotesInsert />} />
            <Route path="/notes/update/:id" element={<NotesUpdate />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
