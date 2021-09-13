import styled from "styled-components";

const BoardBackground = styled.div<{bgImgUrl?: string}>`
    width: 100%;
    height: 100%;
    background-image: url( '${(props) => props.bgImgUrl}' );
    background-position: 50%;
    background-size: cover;

    display: flex;
    flex-direction: column;
`

export { BoardBackground };