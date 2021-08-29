import React from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineStar } from 'react-icons/ai'
import * as styles from './BoardCard.styles';


const BoardView: React.FC<styles.BoardData> = function(props) {
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

export default BoardView;