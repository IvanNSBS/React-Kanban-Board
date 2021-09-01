import styled from "styled-components";
import Palette from "../../../common/colorpalette";

const Background = styled.div`
    color: ${Palette.text};
    background-color: rgba(0,0,0, 0.1); 
    transition: 0.2s ease-out;
    border-radius: 8px;
    padding: 5px;
`

const Input = styled.input`
    width: 100%;
    box-sizing: border-box;
    height: 35px;
    font-size: 16px;
    margin-bottom: 5px;

    border: 0px;
    border-radius: 6px;
    color: ${Palette.text};
    background-color: rgba(0,0,0, 0.15);
    
    padding-left: 10px;
    padding-right: 10px;

    &:hover{
        background-color: rgba(0,0,0, 0.20);
    }

    &:focus{
        outline: none;
        background-color: rgba(0,0,0, 0.30);
        border: 0px;
    }
`

const Create = styled.button`
    border: 0px;
    border-radius: 5px;
    height: 35px;
    width: 60px;
    font-size: 1.05em;

    color: ${Palette.text};
    background-color: ${Palette.header}; 
    transition: 0.2s ease-out;

    &:disabled {
        filter: brightness(0.3);
    }

    &:hover:enabled{
        filter: brightness(0.85);
        cursor: pointer;
    }

    &:active:enabled{
        filter: brightness(0.7);
    }
`

const Close = styled.button`
    height: 35px;
    width: 35px;
    color: ${Palette.disabledText};
    background-color: transparent;
    border: 0;

    &:hover{
        color: ${Palette.text};
        cursor: pointer;
    }
`

export { Background, Create, Input, Close }