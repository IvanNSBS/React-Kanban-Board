
import React, { useState, useContext } from "react";
import { AiOutlineStar } from 'react-icons/ai'
import * as styles from './AccountBoards.styles'
import FolderBoardsDisplay from './FolderBoardsDisplay'
import CreateBoardModal from './CreateBoardModal';

import User from '../../../../../data/account/user'
import BoardsFolder from '../../../../../data/account/boardsFolder';

import { UserControllerContext } from '../Home';

const UserBoards: React.FC = function() {

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const userController = useContext(UserControllerContext);

    const folders = userController.getFolders().map((folder, idx) => {
        return (
            // TODO: Add icon to folder data
            <FolderBoardsDisplay boards={folder.boards} icon={<AiOutlineStar/>} onClickCreate={() => setModalOpen(true)}>
                {folder.name} 
            </FolderBoardsDisplay>
        )
    })

    return(
        <styles.AccountBoardContainer>
            <CreateBoardModal setActive={setModalOpen} isOpen={modalOpen} folders={userController.getFolders()}/>
            { userController.getStarredBoards().length > 0 &&
                <FolderBoardsDisplay boards={userController.getStarredBoards()} icon={<AiOutlineStar/>}>
                    Quadros com Estrela
                </FolderBoardsDisplay>
            }
            {
                folders.length == 0 &&
                <>Comece criando uma pasta para seus quadros</>
            }
            {folders}
        </styles.AccountBoardContainer>
    )
}

export default UserBoards;
