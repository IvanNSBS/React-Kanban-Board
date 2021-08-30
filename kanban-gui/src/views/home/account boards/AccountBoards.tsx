import Account from '../../../../../data/account/account'
import React, { useState, useEffect } from "react";
import { AiOutlineStar } from 'react-icons/ai'
import * as styles from './AccountBoards.styles'
import Folder from './folder/FolderBoardsDisplay'
import CreateBoardModal from './createBoardModal/CreateBoardModal';
import BoardsFolder from '../../../../../data/account/boardsFolder';


const AccountBoards: React.FC<{account: Account}> = function(props) {
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

export default AccountBoards;
