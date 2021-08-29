import Account from '../../../../../data/account/account'
import BoardView from '../board card/BoardCard';
import React from "react";
import * as styles from './AccountBoard.styles'

const AccountBoards: React.FC<{account: Account}> = function(props) {

    const boardItems = props.account.boards.map((board, idx) => {
        console.log("Board name: " + board.name);
        board.workspace = board.name + "_" + idx;
        let link = "/";
        return (
            <BoardView listId={board.name+"_"+idx} board={board} boardLink={link}/>
        )
    })

    return(
        <styles.ListContainer>
            {boardItems}
        </styles.ListContainer>
    )
}

export default AccountBoards;
