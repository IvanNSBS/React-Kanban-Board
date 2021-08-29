import React from 'react';
import Board from '../../../../../../data/board/board';
import BoardView from '../board card/BoardCard';
import * as styles from './Folder.styles'

interface FolderData{
    boards: Board[];
    title: string;
    icon: JSX.Element;
    iconSpacing?:string;
}

const Folder: React.FC<FolderData> = function(props){
    const boardItems = props.boards.map((board, idx) => {
        board.workspace = board.name + "_" + idx;
        let link = "/";
        return (
            <BoardView listId={board.name+"_"+idx} board={board} boardLink={link}/>
        )
    })

    return(
        <div>
            <styles.FolderTitleContainer iconSpacing={props.iconSpacing}>
                {props.icon}
                <p>{props.title}</p>
            </styles.FolderTitleContainer>
            <styles.ListContainer>
                {boardItems}
            </styles.ListContainer>
        </div>
    )
}

export default Folder;