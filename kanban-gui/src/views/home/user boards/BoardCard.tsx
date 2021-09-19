import React, { useContext } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';
import * as styles from './BoardCard.styles';
import Board from '../../../../../data/board/board';
import { UserControllerContext } from '../../../contexts/UserController';
import { LocalizerContext } from '../../../contexts/Localizer';
import { useHistory } from 'react-router-dom';
import SelectedBoardContext from '../../../contexts/SelectedBoard';
import Palette from '../../../common/colorpalette';

export interface BoardData{
    board: Board;
    showFolderName:boolean;
}

const BoardCard: React.FC<BoardData> = function(props) {
    const boardName = props.showFolderName ? props.board.foldername : "";
    const userController = useContext(UserControllerContext);
    const selectedBoard = useContext(SelectedBoardContext);
    const history = useHistory();

    const onClickFavorite = function(e: React.MouseEvent) {
        e.stopPropagation();
        e.preventDefault();

        userController.toggleStarredBoard(props.board);
    }

    const onClickBoard = function() {
        history.push(`/board/${props.board.foldername}/${props.board.name}`);
    }

    const onClickDelete = function(e: React.MouseEvent) {
        e.preventDefault();
        e.stopPropagation(); 
        userController.deleteBoard(props.board);
    }

    return(
        <styles.ListItem isFavorited={userController.isBoardStarred(props.board)} 
                         onClick={onClickBoard} style={{backgroundImage: `url('${props.board.backgroundImgUrl}')`, backgroundSize:'cover'}}>
            <styles.TitleContainer>
                <styles.LabelFont weight="bold" size="18px">{props.board.name}</styles.LabelFont>

                <styles.BoardCardBtn onClick={onClickDelete} fillColor={Palette.text} dfColor={'white'}>
                    <MdDeleteForever/>
                </styles.BoardCardBtn>

            </styles.TitleContainer>
            <styles.BottomContainer>
                <styles.LabelFont weight="normal" size="15px">{boardName}</styles.LabelFont>

                <styles.BoardCardBtn onClick={onClickFavorite} fillColor={'yellow'}>
                    <AiOutlineStar/>
                </styles.BoardCardBtn>

            </styles.BottomContainer>
        </styles.ListItem>
    );
}

const CreateBoardBtn: React.FC<{click?: Function}> = function(props) 
{
    const localizer = useContext(LocalizerContext);
    
    return(
        <styles.CreateBoard isFavorited={false} onClick={() => { if(props.click !== undefined) props.click()} }>
            {localizer.getTextById(localizer.texts.txt_create_new_board)}
        </styles.CreateBoard>
    );
}

export default BoardCard;
export { CreateBoardBtn }