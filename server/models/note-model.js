const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, maxLength: 200 },
        body: { type: String, required: true },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Note', NoteSchema)
