import React, { useState, useContext } from 'react';
import BoardCard, { CreateBoardBtn } from './BoardCard';
import CreateBoardModal from './CreateBoardModal';
import * as styles from './FolderBoardsDisplay.styles'

import { UserControllerContext } from '../Home';
import Board from '../../../../../data/board/board';

interface FolderData{
    boards: Board[];
    index: number;
    icon: JSX.Element;
    showFolderName?: boolean;
}

const FolderBoardsDisplay: React.FC<FolderData> = function(props)
{
    const boardsRef = props.boards;
    const canCreateBoard = props.index >= 0;
    const [creatingBoard, setCreatingBoard] = useState<boolean>(false);
    const userController = useContext(UserControllerContext);

    const boardItems = boardsRef.map((board, idx) => {
        const showFolderName = props.showFolderName === undefined ? false : props.showFolderName;
        return (
            <BoardCard key={idx} board={board} showFolderName={showFolderName}/>
        )
    })

    return(
        <div>
            <styles.FolderTitleContainer>
                {props.icon}
                <p>{props.children}</p>
            </styles.FolderTitleContainer>
            <styles.ListContainer>
                {boardItems}
                { 
                    canCreateBoard &&
                    <CreateBoardBtn key="create" click={() => setCreatingBoard(true)}/>
                }
            </styles.ListContainer>
            {
                creatingBoard && 
                <CreateBoardModal setActive={setCreatingBoard} isOpen={creatingBoard} index={props.index}
                                  createBoard={ (idx, name) => userController.addBoardToFolder(idx, name)}/>
            }
        </div>
    )
}

export default FolderBoardsDisplay;