import React from 'react';
import Board from '../../../../../data/board/board';
import BoardView, { CreateBoardBtn } from './BoardCard';
import * as styles from './FolderBoardsDisplay.styles'

interface FolderData{
    boards: Board[];
    title: string;
    icon: JSX.Element;
    onClickCreate?: Function;
}

const FolderBoardsDisplay: React.FC<FolderData> = function(props){
    const boardItems = props.boards.map((board, idx) => {
        board.workspace = board.name + "_" + idx;
        let link = "/";
        return (
            <BoardView listId={board.name+"_"+idx} board={board} boardLink={link}/>
        )
    })

    return(
        <div>
            <styles.FolderTitleContainer>
                {props.icon}
                <p>{props.title}</p>
            </styles.FolderTitleContainer>
            <styles.ListContainer>
                {boardItems}
                { 
                    props.onClickCreate !== undefined &&
                    <CreateBoardBtn listId="create" click={props.onClickCreate}/>
                }
            </styles.ListContainer>
        </div>
    )
}

export default FolderBoardsDisplay;