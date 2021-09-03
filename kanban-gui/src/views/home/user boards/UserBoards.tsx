import React, { useState, useContext, useEffect } from "react";
import { AiOutlineStar } from 'react-icons/ai'
import * as styles from './UserBoards.styles'
import FolderBoardsDisplay from './FolderBoardsDisplay'

import { UserControllerContext } from '../Home';
import Board from '../../../../../data/board/board';
import BoardsFolder from '../../../../../data/account/boardsFolder';
import { LocalizerContext } from "../../../contexts/Localizer";
import FolderIcon from "../FolderIcon";
import { eventsHandlers } from "../../../controllers/EventManager";
import { FolderEvents } from "../../../controllers/UserController";

const UserBoards: React.FC = function() 
{
    const userController = useContext(UserControllerContext);
    const localizer = useContext(LocalizerContext);
    const [folders, setFolders] = useState<BoardsFolder[]>(userController.getFolders());
    const [starredBoards, setStarredBoards] = useState<Board[]>(userController.getStarredBoards());

    useEffect(() => {
        const updateFolders = function() {
            setFolders(userController.getFolders());
        }
        const updateStarredBoards = function() {
            setStarredBoards(userController.getStarredBoards());
        }

        eventsHandlers.addSubscriber(FolderEvents.foldersChanged, updateFolders);
        eventsHandlers.addSubscriber(FolderEvents.starredBoardsChanged, updateStarredBoards);

        return function unsubscribe() {
            eventsHandlers.removeSubscriber(FolderEvents.foldersChanged, updateFolders);
            eventsHandlers.removeSubscriber(FolderEvents.starredBoardsChanged, updateStarredBoards);
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
