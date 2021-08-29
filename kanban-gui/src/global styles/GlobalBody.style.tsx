import { createGlobalStyle } from 'styled-components';

interface BodyProps{
    bgCol: string;
}

const BackgroundStyle = createGlobalStyle<BodyProps>`
    font-family: Arial, Helvetica, sans-serif;
    
    body {
        background-color: ${(props) => props.bgCol};
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
`

export default BackgroundStyle;