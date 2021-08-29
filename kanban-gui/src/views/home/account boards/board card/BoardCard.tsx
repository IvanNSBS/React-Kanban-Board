import React from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineStar } from 'react-icons/ai'
import * as styles from './BoardCard.styles';
import Board from '../../../../../../data/board/board';

export interface BoardData{
    listId: string;
    board: Board;
    boardLink: string;
}

const BoardView: React.FC<BoardData> = function(props) {
    const history = useHistory();

    return(
        <styles.ListItem key={props.listId} onClick={() => history.push(props.boardLink)}>
            <styles.LabelFont weight="bold" size="18px">{props.board.name}</styles.LabelFont>
            <styles.BottomContainer>
                <styles.LabelFont weight="normal" size="15px">{props.board.workspace}</styles.LabelFont>
                <styles.FavoriteButton>
                    <AiOutlineStar/>
                </styles.FavoriteButton>
            </styles.BottomContainer>
        </styles.ListItem>
    );
}

const CreateBoardBtn: React.FC<{listId: string}> = function(props) {
    return(
        <styles.ListItem key={props.listId}>
            Criar novo quadro
        </styles.ListItem>
    );
}

export default BoardView;
export { CreateBoardBtn }