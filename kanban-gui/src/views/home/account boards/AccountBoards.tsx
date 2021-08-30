import User from '../../../../../data/account/user'
import React, { useState, useEffect } from "react";
import { AiOutlineStar } from 'react-icons/ai'
import * as styles from './AccountBoards.styles'
import Folder from './FolderBoardsDisplay'
import CreateBoardModal from './CreateBoardModal';
import BoardsFolder from '../../../../../data/account/boardsFolder';


const UserBoards: React.FC<{account: User}> = function(props) {
    const [folder, setFolders] = useState<BoardsFolder[]>(props.account.folders)
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const folders = props.account.folders.map((folder, idx) => {
        return (
            // TODO: Add icon to folder data
            <Folder boards={folder.boards} title={folder.name} icon={<AiOutlineStar/>} />
        )
    })

    useEffect(() => {
        console.log(`is open? ${modalOpen}`)
    }, [modalOpen])

    return(
        <styles.AccountBoardContainer>
            <Folder boards={props.account.starredBoards} title="Quadros com Estrela" icon={<AiOutlineStar/>} onClickCreate={() => setModalOpen(true)}></Folder>
            {folders}
            <CreateBoardModal setActive={setModalOpen} isOpen={modalOpen} folders={props.account.folders}/>
        </styles.AccountBoardContainer>
    )
}

export default UserBoards;
