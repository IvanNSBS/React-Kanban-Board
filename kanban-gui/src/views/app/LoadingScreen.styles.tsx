import styled from "styled-components";
import Palette from "../../common/colorpalette";
import { VscLoading } from 'react-icons/vsc'

const Screen = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${Palette.background};
    
    display: flex;
    align-items: center;
    justify-content: center;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    column-gap: 15px;
`

const Icon = styled(VscLoading)`
    width: 1em;
    height: 1em;


    animation: loading 4s linear infinite;
    @keyframes loading {
        to { transform: rotate(360deg); }
    }
`

const Text = styled.span`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1em;
`

export { Screen, TextWrapper, Icon, Text }