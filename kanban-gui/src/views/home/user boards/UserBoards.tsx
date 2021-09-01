
import React, { useState, useContext, useEffect } from "react";
import { AiOutlineStar } from 'react-icons/ai'
import * as styles from './UserBoards.styles'
import FolderBoardsDisplay from './FolderBoardsDisplay'

import { UserControllerContext } from '../Home';
import BoardsFolder from '../../../../../data/account/boardsFolder';

const UserBoards: React.FC = function() 
{
    const userController = useContext(UserControllerContext);
    const [folders, setFolders] = useState<BoardsFolder[]>(userController.getFolders());

    useEffect(() => {
        userController.subscribeToFoldersChanged(setFolders);

        return (
            userController.removeSubscribeFromFoldersChanged(setFolders)
        );
    }, []);

    const foldersDisplay = folders.map((folder, idx) => {
        return (
            // TODO: Add icon to folder data
            <FolderBoardsDisplay key={idx} boards={folder.boards} 
                                 icon={<AiOutlineStar/>} index={idx}>
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
                <FolderBoardsDisplay boards={userController.getStarredBoards()} icon={<AiOutlineStar/>} 
                                     showFolderName={true} index={-1}>
                    Quadros com Estrela
                </FolderBoardsDisplay>
            }
            {display}
        </styles.UserBoardsContainer>
    )
}

export default UserBoards;
