import React, { useContext } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import * as styles from './BoardCard.styles';
import Board from '../../../../../data/board/board';
import { UserControllerContext } from '../Home';

export interface BoardData{
    board: Board;
    showFolderName:boolean;
}

const BoardCard: React.FC<BoardData> = function(props) {
    const boardName = props.showFolderName ? props.board.foldername : "";
    const userController = useContext(UserControllerContext);

    const onClickFavorite = function(e: React.MouseEvent) {
        e.stopPropagation();
        e.preventDefault();

        userController.toggleStarredBoard(props.board);
    }

    return(
        <styles.ListItem isFavorited={userController.isBoardStarred(props.board)}>
            <styles.TitleContainer>
                <styles.LabelFont weight="bold" size="18px">{props.board.name}</styles.LabelFont>

                <styles.FavoriteButton>
                    <BsThreeDotsVertical/>
                </styles.FavoriteButton>

            </styles.TitleContainer>
            <styles.BottomContainer>
                <styles.LabelFont weight="normal" size="15px">{boardName}</styles.LabelFont>

                <styles.FavoriteButton onClick={onClickFavorite }>
                    <AiOutlineStar/>
                </styles.FavoriteButton>

            </styles.BottomContainer>
        </styles.ListItem>
    );
}

const CreateBoardBtn: React.FC<{click?: Function}> = function(props) {
    return(
        <styles.CreateBoard isFavorited={false} onClick={() => { if(props.click !== undefined) props.click()} }>
            Criar novo quadro
        </styles.CreateBoard>
    );
}

export default BoardCard;
export { CreateBoardBtn }