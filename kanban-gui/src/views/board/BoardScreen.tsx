import React, {useContext, useEffect, useState} from "react";
import Board from "../../../../data/board/board";
import * as styles from './BoardScreen.styles';
import SelectedBoardContext from "../../contexts/SelectedBoard";
import { eventsHandlers } from "../../controllers/EventManager";
import { BoardEvents } from "../../controllers/SelectedBoardController";

const BoardScreen: React.FC = function() 
{
    const [board, setBoard] = useState<Board | null>();
    const selectedBoardController = useContext(SelectedBoardContext);
    const [bgImgUrl, setBgImgUrl] = useState<string | undefined>(undefined);

    useEffect(() => {
        const updateSelected = function(){
            const board = selectedBoardController.selectedBoard;
            setBoard(board);
            setBgImgUrl(board?.backgroundImgUrl);
        }
        eventsHandlers.addSubscriber(BoardEvents.board_selected, updateSelected);
        return(
            eventsHandlers.removeSubscriber(BoardEvents.board_selected, updateSelected)
        )

    }, [])

    return(
        <styles.BoardBackground bgImgUrl={bgImgUrl}>
            <>{JSON.stringify(selectedBoardController.selectedBoard)}</>
        </styles.BoardBackground>
    )
} 

export default BoardScreen;