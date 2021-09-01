
import React, { useState, useContext, useEffect } from "react";
import { AiOutlineStar } from 'react-icons/ai'
import * as styles from './UserBoards.styles'
import FolderBoardsDisplay from './FolderBoardsDisplay'

import { UserControllerContext } from '../Home';
import Board from '../../../../../data/board/board';
import BoardsFolder from '../../../../../data/account/boardsFolder';

const UserBoards: React.FC = function() 
{
    const userController = useContext(UserControllerContext);
    const [folders, setFolders] = useState<BoardsFolder[]>(userController.getFolders());
    const [starredBoards, setStarredBoards] = useState<Board[]>(userController.getStarredBoards());

    useEffect(() => {
        userController.subscribeToFoldersChanged(setFolders);
        userController.subscribeToStarredChanged(setStarredBoards);

        return function unsubscribe() {
            userController.removeSubscribeFromFoldersChanged(setFolders);
            userController.removeSubscribeFromStarredChanged(setStarredBoards);
        }
    }, []);

    const foldersDisplay = folders.map((folder, idx) => {
        // TODO: This is commong with FolderSideBar. Make it common
        const firstChar = folder.name.length > 0 ? folder.name.at(0)?.toUpperCase() : "";
        const folderImg =   <div style={{
                                 backgroundImage:'linear-gradient(336deg, #ab05a5, #2ad5e9)', 
                                 height: "25px", width: "25px", 
                                 display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                                {firstChar}
                            </div>
        return (
            // TODO: Load icon from actual url
            // TODO: Add icon to folder data
            <FolderBoardsDisplay key={idx} boards={folder.boards} 
                                 icon={folderImg} index={idx}>
                {folder.name} 
            </FolderBoardsDisplay>
        )
    })

    const display = folders.length === 0 ?  <div style={{textAlign:'center', color: 'white', fontSize: '2em'}}>
                                                Comece criando uma pasta para seus quadros
                                            </div> : foldersDisplay;

    return(
        <styles.UserBoardsContainer>
            { 
                userController.getStarredBoards().length > 0 &&
                <FolderBoardsDisplay boards={starredBoards} icon={<AiOutlineStar/>} 
                                     showFolderName={true} index={-1}>
                    Quadros com Estrela
                </FolderBoardsDisplay>
            }
            {display}
        </styles.UserBoardsContainer>
    )
}

export default UserBoards;
