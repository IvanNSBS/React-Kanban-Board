import React, { useContext, useRef, useState } from "react";
import FolderIcon from "../home/FolderIcon";
import { MdSettings } from 'react-icons/md'
import { AiOutlineStar } from 'react-icons/ai';
import { FaProjectDiagram, FaTags } from 'react-icons/fa';
import { HeaderTitleWrapper, HeaderButton, HeaderWrapper, OptionsContainer, BoardName } from "./BoardHeader.styles";
import Board from "../../../../data/board/board";
import { LocalizerContext } from "../../contexts/Localizer";
import SelectedBoardContext from "../../contexts/SelectedBoard";
import { UserControllerContext } from "../../contexts/UserController";

interface HeaderData {
    board: Board;
}

const BoardHeader: React.FC<HeaderData> = function(props) 
{
    const nameInput = useRef<HTMLInputElement>(null);
    const [name, setName] = useState<string>(props.board.name);
    const [finalName, setFinalName] = useState<string>(props.board.name);

    const localizer = useContext(LocalizerContext)
    const boardController = useContext(SelectedBoardContext);
    const userController = useContext(UserControllerContext);
    const folderIconUrl = userController.getFolders().find(f => f.name == props.board.foldername)?.iconUrl;

    function onSubmitNewName() {
        nameInput.current?.blur();

        if(boardController.selectedBoard !== null){
            boardController.setBoardName(finalName);
            setName(finalName);
        }
        else {
            setFinalName(name);
        }
    }

    return(
        <HeaderWrapper>

            <OptionsContainer>
                <form onSubmit={e => { e.preventDefault(); onSubmitNewName(); }} style={{display: 'flex'}}>
                    <BoardName 
                        value={finalName}
                        ref={nameInput}
                        onChange={e => setFinalName(e.target.value)}
                        onBlur={onSubmitNewName}>
                    </BoardName>
                </form>

                <HeaderButton>
                    <AiOutlineStar/> 
                </HeaderButton>

                <HeaderTitleWrapper>
                    <FolderIcon name="Test" iconUrl={folderIconUrl}/>
                    {props.board.foldername}
                </HeaderTitleWrapper>
                <HeaderTitleWrapper>
                    <FaTags/>
                    {localizer.getTextById(localizer.texts.txt_tags_epics)}
                </HeaderTitleWrapper>
                <HeaderTitleWrapper>
                    <FaProjectDiagram/>
                    {localizer.getTextById(localizer.texts.txt_uml_diagram)}
                </HeaderTitleWrapper>
            </OptionsContainer>

            <HeaderButton>
                <MdSettings/>
            </HeaderButton>

        </HeaderWrapper>
    );
}

export default BoardHeader;