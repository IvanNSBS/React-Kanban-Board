import FlexDiv from "../../../common/styles/FlexDiv";
import { Font } from './SideBar.styles';
import styled from "styled-components";
import Palette from "../../../common/colorpalette";

const hoverPct:number = 0.15;
const activePct:number = 0.3;

const FolderTitle = styled(FlexDiv)`
    ${Font}
    flex-direction: row;
    align-content: flex-start;
    align-items: center;
    margin:0 0 5px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 9px;
    transition: 0.1s ease-out;
    border-radius: 5px;
    user-select: none;

    & label {
        text-align: center;
    }

    & label:hover{
        cursor: pointer;
    }

    &:hover {
        transition: 0.1s ease-out;
        background-color: rgba(0,0,0, ${hoverPct});
        cursor: pointer;
    }

    &:active {
        transition: 0.1s ease-out;
        background-color: rgba(0,0,0, ${activePct});
        cursor: pointer;
    }
`

const FolderOption = styled.button`
    color: ${Palette.text};
    background-color: transparent;
    border: 0px;
    border-radius: 5px;
    transition: 0.1s ease-out;
    height: 30px;
    user-select: none;

    display: flex;
    align-items: center;
    padding-left: 15%;
    justify-content: left;

    &:hover {
        transition: 0.1s ease-out;
        background-color: rgba(0,0,0, ${hoverPct});
        cursor: pointer;
    }

    &:active {
        transition: 0.1s ease-out;
        background-color: rgba(0,0,0, ${activePct});
        cursor: pointer;
    }

    & svg {
        width: 19px;
        height: 19px;
        margin-right: 8px;
        padding: 0;
    }

    & label {
        margin-left: 8px;
        cursor: pointer;
    }
`

export { FolderOption, FolderTitle }

