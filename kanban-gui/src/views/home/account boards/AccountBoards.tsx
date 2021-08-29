import Account from '../../../../../data/account/account'
import React from "react";
import { AiOutlineStar } from 'react-icons/ai'
import * as styles from './AccountBoards.styles'
import Folder from './folder/Folder'

const AccountBoards: React.FC<{account: Account}> = function(props) {
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
        </styles.AccountBoardContainer>
    )
}

export default AccountBoards;
