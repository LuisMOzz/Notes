const express = require('express')

const noteCtrl = require('../controllers/note-ctrl')

const router = express.Router()

router.post('/notes', noteCtrl.createNote)
router.put('/notes/:id', noteCtrl.updateNote)
router.delete('/notes/:id', noteCtrl.deleteNote)
router.get('/notes/:id', noteCtrl.getNoteById)
router.get('/notes', noteCtrl.getNotes)

module.exports = router
