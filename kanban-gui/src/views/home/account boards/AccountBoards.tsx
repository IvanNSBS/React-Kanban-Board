import Account from '../../../../../data/account/account'
import React from "react";
import { AiOutlineStar } from 'react-icons/ai'
import * as styles from './AccountBoards.styles'
import Folder from './folder/Folder'

const AccountBoards: React.FC<{account: Account}> = function(props) {
    return(
        <styles.AccountBoardContainer>
            <Folder boards={props.account.starredBoards} title="Quadros com Estrela" icon={<AiOutlineStar/>}></Folder>
            <Folder boards={props.account.folders[0].boards} title={props.account.folders[0].name} icon={<AiOutlineStar/>}></Folder>
        </styles.AccountBoardContainer>
    )
}

export default AccountBoards;
