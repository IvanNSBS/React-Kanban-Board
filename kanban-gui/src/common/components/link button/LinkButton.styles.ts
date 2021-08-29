import styled from "styled-components"

const StyledButton = styled.button`
    text-decoration: none;
    height: 40px;
    background-color: #ff00003b;
    border: 0px;
    border-radius: 5px;
    color: black;

    &:hover{
        background-color: #ff00007b
    }

    &:active{
        background-color: #ff0000c8
    }
`

export { StyledButton }