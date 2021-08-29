import Account from '../../../../../data/account/account'
import React, { useState } from "react";
import { AiOutlineStar } from 'react-icons/ai'
import * as styles from './AccountBoards.styles'
import Folder from './folder/Folder'
import CreateBoardModal from './createBoardModal/CreateBoardModal';
import BoardsFolder from '../../../../../data/account/boardsFolder';


const AccountBoards: React.FC<{account: Account}> = function(props) {
    const [folder, setFolders] = useState<BoardsFolder[]>(props.account.folders)

    const folders = props.account.folders.map((folder, idx) => {
        return (
            // TODO: Add icon to folder data
            <Folder boards={folder.boards} title={folder.name} icon={<AiOutlineStar/>} />
        )
    })

    return(
        <styles.AccountBoardContainer>
            <Folder boards={props.account.starredBoards} title="Quadros com Estrela" icon={<AiOutlineStar/>}></Folder>
            {folders}
            <CreateBoardModal isOpen={true} folders={props.account.folders}/>
        </styles.AccountBoardContainer>
    )
}

export default AccountBoards;
