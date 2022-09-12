import React, { useState } from 'react'
import styled from 'styled-components'

import api from '../api'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const TextArea = styled.textarea.attrs({
    className: 'form-control',
})`
    margin: 5px;
`
const Button = styled.button.attrs({
    className: 'btn btn-primary',
})`
    margin: 15px;
`

const CancelButton = styled.a.attrs({
    className: 'btn btn-secundary',
})`
    margin: 15px;
`

function NotesInsert () {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const insertRequest = async () => {
        const payload = { title: title, body: body }
        await api.insertNote(payload)
            .then(res => {
                window.alert('Note inserted successfully')
                setTitle('')
                setBody('')
            })
            .catch(err => {
                window.alert('Note not inserted')
            })
    }

    return (
        <Wrapper>
            <Title>Create Note</Title>
            <Label>Title:</Label>
            <InputText
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <Label>Body: </Label>
            <TextArea
                type="text"
                value={body}
                rows="10"
                onChange={e => setBody(e.target.value)} 
            />
            <Button onClick={insertRequest}>Add Note</Button>
            <CancelButton href={'/notes/list'}>Cancel</CancelButton>
        </Wrapper>
    )
}

export default NotesInsert
