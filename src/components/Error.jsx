import React from 'react'
import styled from 'styled-components'

import { useGlobaleContext } from '../context'

const Error = () => {

    const {error} = useGlobaleContext()

    console.log(error);

    return (
        <Wrapper>
            <h3>{error.msg}</h3>
        </Wrapper>
    )
}

export default Error


const Wrapper = styled.section`
    text-align: center;
    h3{
        font-size: 22px;
        color: #e63946;
    }
`