import styled from "styled-components";

const ModalBackground = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    z-index: 10;
    margin: 0;
    padding: 0;
    background-color: #2a2c2e;
    display: flex;
    position: fixed;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    overflow: hidden;
`

const AbsoluteDiv = styled.div`
    background-color: magenta;
    width: 350px;
    height: 200px;
`

export { AbsoluteDiv, ModalBackground }