const Note = require('../models/note-model')

createNote = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            sucess: false,
            error: 'Content can not be empty!',
        })
    }

    const note = Note(body)
    
    note.save()
        .then(() => {
            return res.status(201).json({
                sucess: true,
                id: note._id,
                message: 'Note created',
            })
        })
        .catch(() => {
            return res.status(400).json({ 
                sucess: false, 
                error: 'Note not created',
            })
        })
}

updateNote = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            sucess: false,
            error: 'Content can not be empty!',
        })
    }

    Note.findByIdAndUpdate(
        req.params.id,
        body,
        (err, note) => {
            if (err) {
                return res.status(404).json({
                    sucess: false,
                    error: "Note not found",
                })
            }

            return res.status(201).json({
                sucess: true,
                data: note,
                message: 'Note Updated',
            })
        }

    )
}

deleteNote = (req, res) => {
    Note.findByIdAndDelete(req.params.id, (err, note) => {
        if (err) {
            return res.status(400).json({
                sucess: false,
                error: err,
            })
        }
        
        if (!note) {
            return res.status(404).json({
                sucess: false,
                error: 'Note not found',
            })
        }

        return res.status(200).json({ 
            sucess: true,
            message: 'Note eliminated',
        })
    })
}

getNoteById = (req, res) => {
    Note.findById(req.params.id, (err, note) => {
        if (err) {
            return res.status(400).json({ sucess: false, error: err })
        }

        if (!note) {
            return res.status(404).json({
                sucess: false,
                error: 'Note not found'
            })
        }

        return res.status(200).json({ sucess: true, data: note })
    })
}

getNotes = (req, res) => {
    Note.find({}, (err, notes) => {
        if (err) {
            return res.status(400).json({ sucess: false, error: err })
        }
        return res.status(200).json({ sucess: true, data: notes })
    })
}

module.exports = {
    createNote,
    updateNote,
    deleteNote,
    getNoteById,
    getNotes,
}
