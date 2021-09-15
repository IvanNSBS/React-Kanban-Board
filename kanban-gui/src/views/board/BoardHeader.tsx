import React, { useContext } from "react";
import FolderIcon from "../home/FolderIcon";
import { MdSettings } from 'react-icons/md'
import { AiOutlineStar } from 'react-icons/ai';
import { FaProjectDiagram, FaTags } from 'react-icons/fa';
import { HeaderTitleWrapper, HeaderButton, HeaderWrapper, OptionsContainer, FolderName } from "./BoardHeader.styles";
import Board from "../../../../data/board/board";
import { LocalizerContext } from "../../contexts/Localizer";

interface HeaderData {
    board: Board;
}

const BoardHeader: React.FC<HeaderData> = function(props) 
{

    const localizer = useContext(LocalizerContext)

    return(
        <HeaderWrapper>

            <OptionsContainer>
                <FolderName value={props.board.name}></FolderName>

                <HeaderButton>
                    <AiOutlineStar/> 
                </HeaderButton>

                <HeaderTitleWrapper>
                    <FolderIcon name="Test"/>
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