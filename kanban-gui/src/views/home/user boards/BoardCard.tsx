import React from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineStar } from 'react-icons/ai'
import * as styles from './BoardCard.styles';
import Board from '../../../../../data/board/board';

export interface BoardData{
    listId: string;
    board: Board;
    showFolderName:boolean;
    boardLink: string;
}

const BoardCard: React.FC<BoardData> = function(props) {
    const history = useHistory();

    const boardName = props.showFolderName ? props.board.foldername : "";

    return(
        <styles.ListItem key={props.listId} onClick={() => history.push(props.boardLink)}>
            <styles.LabelFont weight="bold" size="18px">{props.board.name}</styles.LabelFont>
            <styles.BottomContainer>
                <styles.LabelFont weight="normal" size="15px">{boardName}</styles.LabelFont>
                <styles.FavoriteButton>
                    <AiOutlineStar/>
                </styles.FavoriteButton>
            </styles.BottomContainer>
        </styles.ListItem>
    );
}

const CreateBoardBtn: React.FC<{listId: string, click?: Function}> = function(props) {
    return(
        <styles.CreateBoard key={props.listId} onClick={() => { if(props.click !== undefined) props.click()} }>
            Criar novo quadro
        </styles.CreateBoard>
    );
}

export default BoardCard;
export { CreateBoardBtn }