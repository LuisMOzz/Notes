import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

function Links () {
    return (
        <React.Fragment>
            <Link to="/" className="navbar-brand">
                Notes Application
            </Link>
            <Collapse>
                <List>
                    <Item>
                        <Link to="notes/list" className="nav-link">
                            List Notes
                        </Link>
                    </Item>
                    <Item>
                        <Link to="notes/create" className="nav-link">
                            Create Note
                        </Link>
                    </Item>
                </List>
            </Collapse>
        </React.Fragment>
    )
}

export default Links
