import styled from "styled-components";
import Palette from "../../common/colorpalette";
import { VscLoading } from 'react-icons/vsc'

const size = '2em';

const Screen = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${Palette.background};
    
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
`

const TextWrapper = styled.div`
    display: inline-flex;
    flex-direction: row;
    column-gap: 20px;

    width: 100%;
    align-content: flex-start;
    justify-content: center;
`

const Icon = styled(VscLoading)`
    width : ${size};
    height: ${size};
    fill: ${Palette.text};

    animation: loading 4s linear infinite;
    @keyframes loading {
        to { transform: rotate(360deg); }
    }
`

const Text = styled.span`
    user-select: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: ${size};
    color: ${Palette.text};
`

export { Screen, TextWrapper, Icon, Text }