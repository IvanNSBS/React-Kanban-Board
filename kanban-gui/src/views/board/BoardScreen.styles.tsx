import styled from "styled-components";

const BoardBackground = styled.div<{bgImgUrl?: string}>`
    width: 100%;
    height: 100%;
    background-image: url( '${(props) => props.bgImgUrl}' );
    background-position: 50%;
    background-size: cover;

    display: flex;
    flex-direction: column;
    overflow-y: hidden;
`

const BoardsAreaWrapper = styled.div`
    width: 100%; 
    height: 100%; 
    padding-bottom: 20px;
    overflow: hidden;
`

const CardsContainer = styled.div`
    width: 100%; 
    height: 100%;
    padding: 8px 4px;
    display: inline-flex;
    overflow-x: auto;
`

export { BoardBackground, BoardsAreaWrapper, CardsContainer };