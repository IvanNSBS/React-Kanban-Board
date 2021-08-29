import React from 'react';
import Account from '../../../../data/account/account';
import Board from '../../../../data/board/board';
import AccountBoards from './account boards/AccountBoards';
import SideBar from './side bar/SideBar';
import * as styles from './Home.styles'

const dummyaccount = new Account("Ivovski");

const x = 10;
for(let i = 0; i < x; i++)
    dummyaccount.addBoard(new Board("Example Board_"+i.toString()));


const Home: React.FC = function() 
{
    return(
        <styles.AccountContainer>
            <SideBar>

            </SideBar>
            <AccountBoards account={dummyaccount}/>
        </styles.AccountContainer>
    );
}

export default Home;