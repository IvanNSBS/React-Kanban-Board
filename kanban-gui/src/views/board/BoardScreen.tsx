import React, {useContext, useEffect, useState} from "react";
import Board from "../../../../data/board/board";
import * as styles from './BoardScreen.styles';
import SelectedBoardContext from "../../contexts/SelectedBoard";
import { eventsHandlers } from "../../controllers/EventManager";
import { BoardEvents } from "../../controllers/SelectedBoardController";
import CardList from "./CardList";
import BoardHeader from "./BoardHeader";
import CreateList from "./CreateList";

const BoardScreen: React.FC = function() 
{
    const [board, setBoard] = useState<Board | null>(null);
    const selectedBoardController = useContext(SelectedBoardContext);

    useEffect(() => {
        const updateSelected = function(){
            const board = selectedBoardController.selectedBoard;
            setBoard(board);
        }
        
        eventsHandlers.addSubscriber(BoardEvents.board_selected, updateSelected);
        setBoard(selectedBoardController.selectedBoard);
        
        return(
            eventsHandlers.removeSubscriber(BoardEvents.board_selected, updateSelected)
        )

    }, [])


    return(
        <styles.BoardBackground bgImgUrl={board?.backgroundImgUrl} style={{overflowY: 'hidden'}}>
            {
                board !== null &&
                <BoardHeader board={board}/>
            }
            <div style={{width: '100%', height: '100%', paddingBottom: '20px', overflow: 'hidden'}}>
                <div className="Mark"style={{width: '100%', height: '100%', padding: '8px 4px', display:'inline-flex', overflowX:'auto'}}>
                    <CardList name="To Do"></CardList>
                    <CardList name="Doing"></CardList>
                    <CardList name="Done"></CardList>
                    <CardList name="Backlog"></CardList>
                    <CreateList/>
                </div>
            </div>
        </styles.BoardBackground>
    )
} 

export default BoardScreen;