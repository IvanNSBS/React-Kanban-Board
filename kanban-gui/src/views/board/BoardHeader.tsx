import React from "react";
import FolderIcon from "../home/FolderIcon";
import { MdSettings } from 'react-icons/md'
import { AiOutlineStar } from 'react-icons/ai';
import { FaProjectDiagram, FaTags } from 'react-icons/fa';
import { FolderDataWrapper, HeaderButton, HeaderWrapper, OptionsContainer, FolderName } from "./BoardHeader.styles";
import Board from "../../../../data/board/board";

interface HeaderData {
    board: Board;
}

const BoardHeader: React.FC<HeaderData> = function(props){
    return(
        <HeaderWrapper>

            <OptionsContainer>
                <FolderName value={props.board.name}></FolderName>

                <HeaderButton>
                    <AiOutlineStar/> 
                </HeaderButton>

                <FolderDataWrapper>
                    <FolderIcon name="Test"/>
                    {props.board.foldername}
                </FolderDataWrapper>
                <FolderDataWrapper>
                    <FaTags/>
                    Epics Tags
                </FolderDataWrapper>
                <FolderDataWrapper>
                    <FaProjectDiagram/>
                    UML Diagram
                </FolderDataWrapper>
            </OptionsContainer>

            <HeaderButton>
                <MdSettings/>
            </HeaderButton>

        </HeaderWrapper>
    );
}

export default BoardHeader;