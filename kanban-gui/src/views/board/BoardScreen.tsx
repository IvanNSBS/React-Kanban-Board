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
    const [isCreatingFolder, setIsCreatingFolder] = useState<boolean>(false);
    const [board, setBoard] = useState<Board | null>(null);
    const selectedBoardController = useContext(SelectedBoardContext);
    
    function onClickBackground(){
        setIsCreatingFolder(false);
        eventsHandlers.invoke("bg_click_board_screen");
    }

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
        <styles.BoardBackground 
            bgImgUrl={board?.backgroundImgUrl} 
            onClick={onClickBackground}
        >
            {
                board !== null &&
                <BoardHeader board={board}/>
            }
            <styles.BoardsAreaWrapper>
                <styles.CardsContainer>
                    <CardList name="To Do"></CardList>
                    <CardList name="Doing"></CardList>
                    <CardList name="Done"></CardList>
                    <CardList name="Backlog"></CardList>
                    <CreateList isActive={isCreatingFolder} setIsActive={val => setIsCreatingFolder(val)}/>
                </styles.CardsContainer>
            </styles.BoardsAreaWrapper>
        </styles.BoardBackground>
    )
} 

export default BoardScreen;