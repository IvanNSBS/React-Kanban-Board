import styled from "styled-components";
import Palette from "../../../common/colorpalette";

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
    background-color: #151616e8;
    position: fixed;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
    border: 0px;
    border-radius: 5px;

    color: ${Palette.text};
    background-color: #34495e; 
    transition: 0.2s ease-out;
    
    &:hover{
        filter: brightness(0.85);
    }

    &:active{
        filter: brightness(0.7);

    }
`

const AbsoluteDiv = styled.div`
    width: 450px;
`

const Input = styled.input`
    width: 70%;
    height: 35px;
    font-size: 18px;
    margin-bottom: 10px;

    border: 0px;
    border-radius: 6px;
    color: ${Palette.text};
    background-color: transparent;
    
    padding-left: 5px;

    &:hover{
        background-color: #0000006f;
    }

    &:focus{
        outline: none;
        background-color: #000000ab;
        border: 0px;
    }
`

const Create = styled(Button)`
    height: 35px;
    margin-top: 7px;
`

const Close = styled.button`
`

export { AbsoluteDiv, ModalBackground, Create, Input, Close }