import styled from "styled-components";
import Palette from "../../../common/colorpalette";
import * as creator from "./FolderCreator.styles";

const FromWrapper = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    border-radius: 8px;
    background-color: #0000001d;
    margin-bottom: 15px;
    padding: 8px;
`

const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    align-content: flex-start;
`

const StringInputs = styled(creator.Input)`
`

const ButtonsWrapper = styled.div`
    margin-top: 5px;
    display: flex;
    flex-direction: row;

    justify-content: space-between;
`

const EditBtn = styled(creator.Create)`
`

const CancelBtn = styled(creator.Close)`
    margin: 0;
    padding: 0;
`

const DeleteBtn = styled(creator.Create)`
    background-color: ${Palette.deleteBtn};
`

export { FromWrapper, InputsWrapper, StringInputs, ButtonsWrapper, EditBtn, DeleteBtn, CancelBtn }