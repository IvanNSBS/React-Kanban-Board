import styled, {css} from 'styled-components';
import LinkButton from '../../../common/components/link button/LinkButton';
import Palette from '../../../common/colorpalette';
import FlexDiv from '../../../common/styles/FlexDiv';

const hoverPct:number = 0.15;
const activePct:number = 0.3;

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
        background-color: rgba(0,0,0, ${hoverPct});
        cursor: pointer;
    }
    
    &:active {
        transition: 0.1s ease-out;
        background-color: rgba(0,0,0, ${activePct});
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
        transition: 0.1s ease-out;
        background-color: rgba(0,0,0, ${hoverPct});
        cursor: pointer;
    }

    & button:active {
        background-color: rgba(0,0,0, ${activePct});
        cursor: pointer;
    }
`


export { WorkspaceContainer, AllBoards, CreateFolder, Font }