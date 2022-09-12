import axios from 'axios'

const api = axios.create({
    baseURL: 'http://127.0.0.1:3000/api',
})

export const insertNote = payload => api.post(`/notes`, payload)
export const getAllNotes = () => api.get(`/notes`)
export const updateNoteById = (id, payload) => api.put(`notes/${id}`, payload)
export const deleteNoteById = id => api.delete(`notes/${id}`)
export const getNoteById = id => api.get(`notes/${id}`)

const apis = {
    insertNote,
    getAllNotes,
    updateNoteById,
    deleteNoteById,
    getNoteById,
}

export default apis
