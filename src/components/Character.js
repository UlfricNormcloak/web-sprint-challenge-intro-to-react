// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledCharacter = styled.div`
    color: ${(pr) => pr.theme.secondaryColor};
    padding: 20px;
    font-size: 48px;
    `

function Character(props) {

    const { name } = props;

    return (
        <StyledCharacter>
            <div>{ name }</div>
        </StyledCharacter>
    )

}

export default Character
