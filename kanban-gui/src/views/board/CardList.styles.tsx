import styled from "styled-components";

const ListWrapper = styled.div`
    background-color: cyan;
    height: 100%;
    display: inline-block;
    box-sizing: border-box;
    vertical-align: top;
    margin: 0 5px;
    flex-direction: column;
    width: 272px;
`

const ListContainer = styled.div`
    background-color: #ebecf0;
    border-radius: 3px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    position: relative;
    white-space: normal;
`

const ListHeader = styled.div`
`

export { ListWrapper, ListContainer }