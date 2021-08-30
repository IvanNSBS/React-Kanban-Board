import React from 'react';
import User from '../../../../data/account/user';
import Board from '../../../../data/board/board';
import UserBoards from './account boards/AccountBoards';
import SideBar from './side bar/SideBar';
import * as styles from './Home.styles'

const dummyaccount = new User("Ivovski");
dummyaccount.createNewFolder("Geeko's Productions");
dummyaccount.createNewFolder("Bethesda Softworks");
dummyaccount.createNewFolder("CD Project Red");

const x = 4;
for(let i = 0; i < x; i++){
    dummyaccount.addStarredBoard(new Board("Starred Board_"+i.toString()));
}

for(let i = 0; i < x; i++){
    dummyaccount.folders[0].addBoard(new Board("Folder Board_"+i.toString()))
}

for(let i = 0; i < x; i++){
    dummyaccount.folders[1].addBoard(new Board("Bethesda Board_"+i.toString()))
}


const Home: React.FC = function() 
{
    return(
        <styles.AccountContainer>
            <SideBar account={dummyaccount}/>
            <UserBoards account={dummyaccount}/>
        </styles.AccountContainer>
    );
}

export default Home;