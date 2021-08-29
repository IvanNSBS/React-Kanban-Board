import styled from "styled-components";

interface FlexProperties{
    justify: string;
    align: string;
}

const FlexDiv = styled.div<FlexProperties>`
    display: flex;
    justify-content: ${(props) => props.justify };
    align-items: ${(props) => props.align };
`  

export default FlexDiv;