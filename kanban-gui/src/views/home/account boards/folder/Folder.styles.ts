import styled from "styled-components"

const FolderTitleContainer = styled.span<{iconSpacing?: string}>`
    font-weight: bold;
    font-size: 20px;
    color: whitesmoke;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    & p { 
        padding-left: ${(props) => props.iconSpacing === undefined ? "15px" : props.iconSpacing };
        margin: 0;
    }
`

const ListContainer = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    width: 100%;
`

export { FolderTitleContainer, ListContainer }