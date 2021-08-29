import Account from '../../../../../data/account/account'
import React from "react";
import { AiOutlineStar } from 'react-icons/ai'
import * as styles from './AccountBoard.styles'
import Folder from './folder/Folder'

const AccountBoards: React.FC<{account: Account}> = function(props) {
    return(
        <styles.AccountBoardContainer>
            <Folder boards={props.account.boards} title="Quadros com Estrela" icon={<AiOutlineStar/>}></Folder>
            <Folder boards={props.account.boards} title="Quadros com Estrela" icon={<AiOutlineStar/>}></Folder>
        </styles.AccountBoardContainer>
    )
}

export default AccountBoards;
