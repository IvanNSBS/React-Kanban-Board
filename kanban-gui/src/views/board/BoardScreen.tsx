import React, {useContext, useEffect, useState} from "react";
import { useParams } from "react-router";
import Board from "../../../../data/board/board";
import * as styles from './BoardScreen.styles';
import SelectedBoardContext from "../../contexts/SelectedBoard";
import { eventsHandlers } from "../../controllers/EventManager";
import { BoardEvents } from "../../controllers/SelectedBoardController";
import CardList from "./CardList";
import BoardHeader from "./BoardHeader";
import CreateList from "./CreateList";
import { UserControllerContext } from "../home/Home";

interface UrlParams {
    folderName: string;
    boardName: string;
}

const BoardScreen: React.FC = function() 
{
    const { folderName, boardName } = useParams<UrlParams>();
    const [board, setBoard] = useState<Board | null>(null);
    const [isCreatingFolder, setIsCreatingFolder] = useState<boolean>(false);
    const userController = useContext(UserControllerContext);
    const selectedBoardController = useContext(SelectedBoardContext);
    
    function onClickBackground() {
        setIsCreatingFolder(false);
        eventsHandlers.invoke("bg_click_board_screen");
    }

    function validateParamsAndSetBoard() 
    {
        const folder = userController.getFolders().find(f => f.name == folderName);
        if(folder === undefined){
            console.log("Invalid folder name param")
            return;
        }
        const foundBoard = folder.boards.find(b => b.name === boardName);
        if(foundBoard === undefined){
            console.log("Invalid board name param")
            return;
        }

        setBoard(foundBoard);
        selectedBoardController.selectedBoard = foundBoard;
    }

    useEffect(() => {
        validateParamsAndSetBoard();
        const updateSelected = function(){
            const board = selectedBoardController.selectedBoard;
            setBoard(board);
        }
        eventsHandlers.addSubscriber(BoardEvents.board_selected, updateSelected);
        return(
            eventsHandlers.removeSubscriber(BoardEvents.board_selected, updateSelected)
        )
    }, [])


    const cardsLists = selectedBoardController.selectedBoard?.cardsCollection.map((card, idx) => {
        return(<CardList key={idx} name={card.name} index={idx}/>)
    })

    if(board === null)
        return <>Invalid URL</>

    return(
        <styles.BoardBackground 
            bgImgUrl={board?.backgroundImgUrl} 
            onClick={onClickBackground}>

            <BoardHeader board={board}/>
            
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