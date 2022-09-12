import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
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

const DeleteButton = styled.button.attrs({
    className: 'btn btn-danger float-end',
})`
    margin: 15px;
`

const CancelButton = styled.a.attrs({
    className: 'btn btn-secondary',
})`
    margin: 15px;
`

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />
}

function NotesUpdate (props) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const id = props.params.id
    const navigate = useNavigate()

    const updateRequest = async () => {
        const payload = { title: title, body: body }
        await api.updateNoteById(id, payload)
            .then(res => {
                window.alert('Note updated successfully')
            })
            .catch(err => {
                window.alert('Note not updated')
            })
    }
 
    const deleteRequest = async () => {
        await api.deleteNoteById(id)
            .then(res => {
                window.alert('Note deleted successfully')
                navigate('/notes/list')
            })
            .catch(err => {
                window.alert('Note not deleted')
            })
    }

    useEffect(() => {
        async function getData() {
            const data = await api.getNoteById(id)
            setTitle(data.data.data.title)
            setBody(data.data.data.body)
            setIsLoading(false)
        }
        getData()
    }, [id, isLoading])

    return (
        <Wrapper>
            <Title>Update Note</Title>
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
            <Button onClick={updateRequest}>Update Note</Button>
            <CancelButton href={'/notes/list'}>Cancel</CancelButton>
            <DeleteButton onClick={deleteRequest}>Delete</DeleteButton>
        </Wrapper>
    )
}

export default withParams(NotesUpdate)
