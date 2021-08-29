import styled, {css} from 'styled-components';
import FlexDiv from "../../../common/styles/FlexDiv";
import LinkButton from '../../../common/components/link button/LinkButton';
import Palette from '../../../common/colorpalette';

const WorkspaceContainer = styled.div`
    width: 300px;
    margin: 0 40px 0 40px;
    padding: 10px;
    position: sticky;
    display: flex;
    flex-direction: column;
`

const Font = css`
    color: ${Palette.text};
    font-size: 16px;
    text-align: left;
    font-weight: bold;
    text-decoration: none;
`

const AllBoards = styled(LinkButton)`
    ${Font};
    background-color: transparent;
    transition: 0.1s ease-out;
    padding: 9px;

    &:hover {
        transition: 0.1s ease-out;
        background-color: rgba(0,0,0, 0.18);
        cursor: pointer;
    }
`

const FolderTitle = styled(FlexDiv)`
    ${Font}
    flex-direction: row;
    align-content: flex-start;
    align-items: center;
    margin:0 0 5px 0;
    width: 100%;
    padding: 9px;
    transition: 0.1s ease-out;
    border-radius: 5px;
    user-select: none;

    & label {
        text-align: center;
    }

    & label:hover{
        cursor: pointer;
    }

    &:hover {
        transition: 0.1s ease-out;
        background-color: rgba(0,0,0, 0.18);
        cursor: pointer;
    }
`

const FolderOption = styled.button`
    color: ${Palette.text};
    background-color: transparent;
    border: 0px;
    border-radius: 5px;
    transition: 0.1s ease-out;
    height: 30px;
    user-select: none;

    display: flex;
    align-items: center;
    padding-left: 15%;
    justify-content: left;

    &:hover {
        transition: 0.1s ease-out;
        background-color: rgba(0,0,0, 0.18);
        cursor: pointer;
    }

    & svg {
        width: 19px;
        height: 19px;
        margin-right: 8px;
        padding: 0;
    }

    & label {
        margin-left: 8px;
        cursor: pointer;
    }
`

const CreateFolder = styled(FlexDiv)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    ${Font}
    font-size: 20px;
    height: 35px;
    margin: 0;
    padding: 0px 9px 0px 9px;
    user-select: none;

    & label {
        color: ${Palette.disabledText};
    }

    & label:hover{
        cursor: text;
    }

    & button {
        border: 0;
        border-radius: 6px;
        background-color: transparent;
        width: 30px;
        height: 30px;
        color: ${Palette.disabledText};
        font-size: 1em;
        transition: 0.1s ease-out;
    }

    & button:hover {
        background-color: rgba(0,0,0, 0.15);
        cursor: pointer;
    }
`

export { WorkspaceContainer, AllBoards, FolderTitle, CreateFolder, FolderOption }