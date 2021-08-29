import styled from "styled-components";

const ModalBackground = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    z-index: 10;
    margin: 0;
    padding: 0;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    background-color: #1b1e20c9;
    position: fixed;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`

const AbsoluteDiv = styled.div`
    background-color: magenta;
    width: 350px;
    height: 200px;
`

export { AbsoluteDiv, ModalBackground }