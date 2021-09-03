
import React, { useState, useContext, useEffect } from "react";
import { AiOutlineStar } from 'react-icons/ai'
import * as styles from './UserBoards.styles'
import FolderBoardsDisplay from './FolderBoardsDisplay'

import { UserControllerContext } from '../Home';
import Board from '../../../../../data/board/board';
import BoardsFolder from '../../../../../data/account/boardsFolder';
import { LocalizerContext } from "../../../contexts/Localizer";
import FolderIcon from "../FolderIcon";

const UserBoards: React.FC = function() 
{
    const userController = useContext(UserControllerContext);
    const localizer = useContext(LocalizerContext);
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
        return (
            <FolderBoardsDisplay key={idx} boards={folder.boards} 
                                 icon={<FolderIcon name={folder.name} iconUrl={folder.iconUrl}/>} 
                                 index={idx}>
                {folder.name} 
            </FolderBoardsDisplay>
        )
    })

    const display = folders.length === 0 ?  <div style={{textAlign:'center', color: 'white', fontSize: '2em'}}>
                                                {localizer.getTextById(localizer.texts.txt_no_boards_or_folders_created)}
                                            </div> : foldersDisplay;

    return(
        <styles.UserBoardsContainer>
            { 
                userController.getStarredBoards().length > 0 &&
                <FolderBoardsDisplay boards={starredBoards} icon={<AiOutlineStar/>} 
                                     showFolderName={true} index={-1}>
                    {localizer.getTextById(localizer.texts.txt_favorite_boards_title)}
                </FolderBoardsDisplay>
            }
            {display}
        </styles.UserBoardsContainer>
    )
}

export default UserBoards;
