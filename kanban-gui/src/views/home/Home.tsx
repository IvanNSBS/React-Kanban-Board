import React from 'react';
import UserBoards from './user boards/UserBoards';
import SideBar from './side bar/SideBar';
import * as styles from './Home.styles'

const Home: React.FC = function() 
{
    return(
            <styles.AccountContainer>
                <SideBar/>
                <UserBoards/>
            </styles.AccountContainer>
    );
}

export default Home;