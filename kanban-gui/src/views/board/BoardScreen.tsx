import React, {useContext, useEffect, useState} from "react";
import { useParams } from "react-router";
import { eventsHandlers } from "../../controllers/EventManager";
import { UserControllerContext } from "../home/Home";

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
        console.log("Folder Name: " + folderName);
        console.log("Folders: " + JSON.stringify(userController.getFolders()));
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
    }, [])
    
    if(board === null)
        return <>Invalid URL</>
    
    const cardsLists = board.cardsCollection.map((card, idx) => {
        return(<CardList key={idx} name={card.name} index={idx}/>)
    })

    return(
        <SelectedBoardContext.Provider value={ new SelectedBoardController(board) }>
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
        </SelectedBoardContext.Provider>
    )
} 

export default BoardScreen;