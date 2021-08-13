// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledCharacters = styled.div`
    color: ${(pr) => pr.theme.secondaryColor};
    `

function Characters(props) {
    return (
        <StyledCharacters>
          <p>{props.characters}</p>
        </StyledCharacters>
    )

}

export default Characters
