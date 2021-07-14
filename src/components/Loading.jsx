import React from 'react'
import styled from 'styled-components'

const Loading = () => {
    return (
        <Wrapper>
            <h2>Loading ...</h2>
        </Wrapper>
    )
}


export default Loading

const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`