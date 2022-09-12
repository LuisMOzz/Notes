import React from 'react'
import styled from 'styled-components'

import logo from '../logo.svg'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

function Logo() {
    return (
        <Wrapper>
            <img src={logo} width="50" height="50" alt="logo" />
        </Wrapper>
    )
}

export default Logo
