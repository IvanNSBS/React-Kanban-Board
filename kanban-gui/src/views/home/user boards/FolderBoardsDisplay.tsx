import React from 'react';
import Board from '../../../../../data/board/board';
import BoardCard, { CreateBoardBtn } from './BoardCard';
import * as styles from './FolderBoardsDisplay.styles'

interface FolderData{
    boards: Board[];
    icon: JSX.Element;
    showFolderName?: boolean;
    onClickCreate?: Function;
}

const FolderBoardsDisplay: React.FC<FolderData> = function(props){
    const boardItems = props.boards.map((board, idx) => {
        let link = "/";
        const showFolderName = props.showFolderName === undefined ? false : props.showFolderName;
        const key = `${board.name}_${idx}`
        return (
            <BoardCard key={key} board={board} boardLink={link} showFolderName={showFolderName}/>
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
                    props.onClickCreate !== undefined &&
                    <CreateBoardBtn key="create" click={props.onClickCreate}/>
                }
            </styles.ListContainer>
        </div>
    )
}

export default FolderBoardsDisplay;