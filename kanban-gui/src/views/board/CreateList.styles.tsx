import styled from "styled-components";
import Palette from "../../common/colorpalette";

const ContentWrapper = styled.div`
    width: 272px;
    min-width: 272px;
    background-color: #ffffff3d;
    height: auto;
    border-radius: 4px;
    color: ${Palette.text};
`

const ListNameInput = styled.input`
    
`

const AddListBtn = styled.button`
`

const CancelButton = styled.button`
    background-color: ${Palette.boardCard};
`

export { ContentWrapper, AddListBtn, CancelButton, ListNameInput }