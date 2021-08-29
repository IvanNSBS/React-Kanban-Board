import React from 'react';
import Account from '../../../../data/account/account';
import Board from '../../../../data/board/board';
import BoardView from '../board card/BoardCard';
import SideBar from '../side bar/SideBar';
import * as styles from './Home.styles'

const dummyaccount = new Account("Ivovski");
const dummyBoard = new Board("Example Board");

const x = 10;
for(let i = 0; i < x; i++)
    dummyaccount.addBoard(dummyBoard);


const Home: React.FC = function() 
{
    const boardItems = dummyaccount.boards.map((board, idx) => {
        console.log("Board name: " + board.name);
        board.workspace = board.name + "_" + idx;
        let link = "/";
        return (
            <BoardView listId={board.name+"_"+idx} board={board} boardLink={link}/>
        )
    })

    return(
        <styles.AccountContainer>
            <SideBar>

            </SideBar>
            <ul>
                {boardItems}
            </ul>
        </styles.AccountContainer>
    );
}

export default Home;