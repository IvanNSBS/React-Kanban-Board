import React, {useContext, useEffect, useState} from "react";
import { useParams } from "react-router";
import { eventsHandlers } from "../../controllers/EventManager";
import { UserControllerContext } from "../../contexts/UserController";

import SelectedBoardController from "../../controllers/SelectedBoardController";
import Board from "../../../../data/board/board";
import SelectedBoardContext from "../../contexts/SelectedBoard";
import CardList from "./CardList";
import BoardHeader from "./BoardHeader";
import CreateList from "./CreateList";
import * as styles from './BoardScreen.styles';

interface UrlParams {
    folderName: string;
    boardName: string;
}

const BoardScreen: React.FC = function() 
{
    const { folderName, boardName } = useParams<UrlParams>();
    const [boardController, setBoardController] = useState<SelectedBoardController | null>(null);
    const [isCreatingFolder, setIsCreatingFolder] = useState<boolean>(false);
    const userController = useContext(UserControllerContext);
    
    useEffect(() => {
        validateParamsAndSetBoard();
    }, [])

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

        setBoardController(new SelectedBoardController(foundBoard));
    }
    
    if(boardController === null)
        return <>Invalid URL</>

    const cardsLists = boardController.selectedBoard.cardsCollection.map((card, idx) => {
        return(<CardList key={card.name+{idx}} cardList={card} index={idx}/>)
    })

    return(
        <SelectedBoardContext.Provider value={ boardController }>
            <styles.BoardBackground 
                bgImgUrl={boardController.selectedBoard?.backgroundImgUrl} 
                onClick={onClickBackground}>
                
                <BoardHeader board={boardController.selectedBoard}/>
                <styles.BoardsAreaWrapper>
                    <styles.CardsContainer>
                        {cardsLists}
                        <CreateList 
                                    isActive={isCreatingFolder} 
                                    setIsActive={val => setIsCreatingFolder(val)}>
                        </CreateList>
                    </styles.CardsContainer>
                </styles.BoardsAreaWrapper>
            </styles.BoardBackground>
        </SelectedBoardContext.Provider>
    )
} 

export default BoardScreen;