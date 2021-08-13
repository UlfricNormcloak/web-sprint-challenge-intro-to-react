// Write your Character component here
import React from 'react'
//import styled from 'styled-components'

// const StyledCharacter = styled.p`
//     color: ${(pr) => pr.theme.secondaryColor};
//     `

function Character(props) {

    const { data } = props;

    return (
        <div>
          <p>{ data }</p>
        </div>
    )

}

export default Character
