import styled from 'styled-components';
import React from 'react';
import Account from '../../../data/account/account';
import Board from '../../../data/board/board';
import BoardView from './BoardView';
import SideView from './SideView';

const dummyaccount = new Account("Ivovski");
const dummyBoard = new Board("Example Board");

const x = 10;
for(let i = 0; i < x; i++)
    dummyaccount.addBoard(dummyBoard);

const AccountContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 0;
    padding-top: 50px;
    padding-left: 7.5%;
    padding-right: 15%;

    & ul {
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        width: 70%;
    }
`


const HomeView: React.FC = function() 
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
        <AccountContainer>
            <SideView>

            </SideView>
            <ul>
                {boardItems}
            </ul>
        </AccountContainer>
    );
}

export default HomeView;