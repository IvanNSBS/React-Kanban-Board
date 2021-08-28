import styled from 'styled-components';
import React from 'react';
import { useState } from 'react';

import Account from '../../../data/account/account';
import Board from '../../../data/board/board';

const dummyaccount = new Account("Ivovski");
const dummyBoard = new Board("Example Board");

dummyaccount.addBoard(dummyBoard);
dummyaccount.addBoard(dummyBoard);
dummyaccount.addBoard(dummyBoard);
dummyaccount.addBoard(dummyBoard);

const AccountContainer = styled.div`
    background-color: #2b2b29;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
`

const BoardItem = styled.li`
    background-color: red;
    border-radius: 3px;
    width: 250px;
    height: 120px;
    color: whitesmoke;
    margin: 0 2% 2% 0;
    padding: 0px;
`
const BoardContainer = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
`

const HomeView: React.FC = function() 
{
    const boardItems = dummyaccount.boards.map((board, idx) => {
        console.log("Board name: " + board.name);
        return (
            <BoardItem key={board.name+"_"+idx}> 
                {board.name} 
            </BoardItem>
        )
    })

    return(
        <AccountContainer>
            <BoardContainer>
                {boardItems}
            </BoardContainer>
        </AccountContainer>
    );
}

export default HomeView;