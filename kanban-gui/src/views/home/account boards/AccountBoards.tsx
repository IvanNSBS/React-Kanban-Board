import User from '../../../../../data/account/user'
import React, { useState } from "react";
import { AiOutlineStar } from 'react-icons/ai'
import * as styles from './AccountBoards.styles'
import FolderBoardsDisplay from './FolderBoardsDisplay'
import CreateBoardModal from './CreateBoardModal';
import BoardsFolder from '../../../../../data/account/boardsFolder';


const UserBoards: React.FC<{account: User}> = function(props) {
    const [folder, setFolders] = useState<BoardsFolder[]>(props.account.folders)
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const folders = props.account.folders.map((folder, idx) => {
        return (
            // TODO: Add icon to folder data
            <FolderBoardsDisplay boards={folder.boards} title={folder.name} 
                    icon={<AiOutlineStar/>} onClickCreate={() => setModalOpen(true)}/>
        )
    })

    return(
        <styles.AccountBoardContainer>
            <FolderBoardsDisplay boards={props.account.starredBoards} 
                    title="Quadros com Estrela" icon={<AiOutlineStar/>}>
            </FolderBoardsDisplay>
            {folders}
            <CreateBoardModal setActive={setModalOpen} isOpen={modalOpen} folders={props.account.folders}/>
        </styles.AccountBoardContainer>
    )
}

export default UserBoards;
