import React from 'react';
import User from '../../../../data/account/user';
import Board from '../../../../data/board/board';
import UserBoards from './user boards/UserBoards';
import SideBar from './side bar/SideBar';
import * as styles from './Home.styles'
import UserController from '../../controllers/UserController';
import { createContext } from 'react';

const dummyUser = new User("Ivovski");
const userController = new UserController(dummyUser);
export const UserControllerContext = createContext<UserController>(userController);

const Home: React.FC = function() 
{
    return(
        <UserControllerContext.Provider value={userController}>

            <styles.AccountContainer>
                <SideBar/>
                <UserBoards/>
            </styles.AccountContainer>

        </UserControllerContext.Provider>
    );
}

export default Home;