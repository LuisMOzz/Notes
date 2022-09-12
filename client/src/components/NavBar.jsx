import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Links from './Links'

const Nav = styled.div.attrs({
    className: 'navbar navbar-expand-md navbar-dark bg-dark',
})`
    margin-bottom: 20px;
`

function NavBar () {
    return (
        <Nav>
            <Logo />
            <Links />
        </Nav>
    )
}

export default NavBar
