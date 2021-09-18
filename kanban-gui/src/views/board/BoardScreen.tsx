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
    const [isCreatingFolder, setIsCreatingFolder] = useState<boolean>(false);
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


    const cardsLists = selectedBoardController.selectedBoard?.cardsCollection.map((card, idx) => {
        return(<CardList name={card.name}/>)
    })

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
                    {cardsLists}
                    <CreateList 
                                isActive={isCreatingFolder} 
                                setIsActive={val => setIsCreatingFolder(val)}
                                createList={val => selectedBoardController.addList(val)}>
                    </CreateList>
                </styles.CardsContainer>
            </styles.BoardsAreaWrapper>
        </styles.BoardBackground>
    )
} 

export default BoardScreen;