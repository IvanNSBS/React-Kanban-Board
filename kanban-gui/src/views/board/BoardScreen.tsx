import React, {useContext, useEffect, useState} from "react";
import Board from "../../../../data/board/board";
import * as styles from './BoardScreen.styles';
import SelectedBoardContext from "../../contexts/SelectedBoard";
import { eventsHandlers } from "../../controllers/EventManager";
import { BoardEvents } from "../../controllers/SelectedBoardController";
import CardList from "./CardList";
import BoardHeader from "./BoardHeader";

const BoardScreen: React.FC = function() 
{
    const [board, setBoard] = useState<Board | null>(null);
    const selectedBoardController = useContext(SelectedBoardContext);
    const [bgImgUrl, setBgImgUrl] = useState<string | undefined>(undefined);

    useEffect(() => {
        const updateSelected = function(){
            const board = selectedBoardController.selectedBoard;
            setBoard(board);
            setBgImgUrl(board?.backgroundImgUrl);
        }
        eventsHandlers.addSubscriber(BoardEvents.board_selected, updateSelected);
        setBgImgUrl(selectedBoardController.selectedBoard?.backgroundImgUrl);
        
        return(
            eventsHandlers.removeSubscriber(BoardEvents.board_selected, updateSelected)
        )

    }, [])


    return(
        <styles.BoardBackground bgImgUrl={bgImgUrl} style={{overflowY: 'hidden'}}>
            {
                board !== null &&
                <BoardHeader board={board}/>
            }
            <div style={{width: '100%', height: '100%', paddingBottom: '20px', overflow: 'hidden'}}>
                <div className="Mark"style={{height: '100%', padding: '8px 4px'}}>
                    <CardList name="To Do"></CardList>
                    <CardList name="Doing"></CardList>
                    <CardList name="Done"></CardList>
                    <CardList name="Backlog"></CardList>
                </div>
            </div>
        </styles.BoardBackground>
    )
} 

export default BoardScreen;