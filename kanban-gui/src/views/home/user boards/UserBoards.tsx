
import React, { useState, useContext, useEffect } from "react";
import { AiOutlineStar } from 'react-icons/ai'
import * as styles from './UserBoards.styles'
import FolderBoardsDisplay from './FolderBoardsDisplay'
import CreateBoardModal from './CreateBoardModal';

import { UserControllerContext } from '../Home';
import BoardsFolder from '../../../../../data/account/boardsFolder';

const UserBoards: React.FC = function() 
{
    const userController = useContext(UserControllerContext);
    const [folders, setFolders] = useState<BoardsFolder[]>(userController.getFolders());
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [selectedFolderIdx, setSelectedFolderIdx] = useState<number>(-1);

    useEffect(() => {
        userController.subscribeToFoldersChanged(setFolders);

        return (
            userController.removeSubscribeFromFoldersChanged(setFolders)
        );
    }, []);

    const foldersDisplay = folders.map((folder, idx) => {
        let index = idx;
        return (
            // TODO: Add icon to folder data
            <FolderBoardsDisplay key={idx} boards={folder.boards} icon={<AiOutlineStar/>} onClickCreate={() => { setSelectedFolderIdx(index); setModalOpen(true); }}>
                {folder.name} 
            </FolderBoardsDisplay>
        )
    })

    const display = folders.length === 0 ?  <div style={{textAlign:'center', color: 'white', fontSize: '2em'}}>
                                                Comece criando uma pasta para seus quadros
                                            </div> : foldersDisplay;

    return(
        <styles.UserBoardsContainer>
            <CreateBoardModal setActive={setModalOpen} isOpen={modalOpen} index={selectedFolderIdx}
                              folders={userController.getFolders()} createBoard={ (idx, name) => userController.addBoardToFolder(idx, name)}/>
            { 
                userController.getStarredBoards().length > 0 &&
                <FolderBoardsDisplay boards={userController.getStarredBoards()} icon={<AiOutlineStar/>} showFolderName={true}>
                    Quadros com Estrela
                </FolderBoardsDisplay>
            }
            {display}
        </styles.UserBoardsContainer>
    )
}

export default UserBoards;
