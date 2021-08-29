import styled from "styled-components";

interface FlexProperties{
    justify?: string;
    alignContent?: string;
    alignItems?: string;
    direction?: string;
    width?: string;
    height?: string;
    padding?: string;
    margin?: string;
}

const FlexDiv = styled.div<FlexProperties>`
    display: flex;
    flex-direction: ${(props) => props.direction };
    justify-content: ${(props) => props.justify };
    align-content: ${(props) => props.alignContent };
    width: ${(props) => props.width };
    height: ${(props) => props.height };
    margin: ${(props) => props.margin };
    padding: ${(props) => props.padding };
`  

export default FlexDiv;