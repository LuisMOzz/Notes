import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../api'

const Wrapper = styled.div`
    padding: 5px 40px
`

const Heading = styled.h4.attrs({
    className: 'h4',
})``

function NotesList () {
    const [notesCount, setNotesCount] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getData() {
            const data = await api.getAllNotes()
            setNotesCount(data.data.data.length)
            setIsLoading(false)
        }
        getData()
    }, [isLoading])

    return (
        <Wrapper>
            <Heading> MERN Note Aplication </Heading>
            <h5>Statistics</h5>
            <p>Notes count: {notesCount}</p>
        </Wrapper>
    )
}

export default NotesList
