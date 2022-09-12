import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../api'

const Wrapper = styled.div`
    padding: 5px 40px
`

const List = styled.div.attrs({
    className: 'list-group',
})``

const Item = styled.a.attrs({
    className: 'list-group-item list-group-item-action',
})``

const Heading = styled.h4.attrs({
    className: 'list-group-item-heading',
})``

const Text = styled.p.attrs({
    className: 'list-group-item-text',
})``

function Note (props) {
    return (
        <Item 
        key={props._id}
        href={`/notes/update/${props._id}`}>
            <Heading>{ props.title }</Heading>
            <Text>{ props.body }</Text>
            <small>{ props.updatedAt.slice(0, 10) }</small>
        </Item>
    )
}

function NotesList () {
    const [notes, setNotes] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getData() {
            const data = await api.getAllNotes().catch(
                err => console.log(err)
            )
            setNotes(data.data.data)
            setIsLoading(false)
        }
        getData()
    }, [isLoading])

    return (
        <Wrapper>
            { !isLoading && 
                <List> 
                    {notes.map((note) => Note(note))}
                </List>
            }
        </Wrapper>
    )
}

export default NotesList
