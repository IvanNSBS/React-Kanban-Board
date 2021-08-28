import styled from 'styled-components';
import React from 'react';
import { useState } from 'react';

import Account from '../../../data/account/account';
import Board from '../../../data/board/board';

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
    padding-left: 20%;
    padding-right: 20%;

    & ul {
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;

        & li {
            background-color: red;
            border-radius: 3px;
            width: 23%;
            height: 112px;
            color: whitesmoke;
            margin: 0 2% 2% 0;
            padding: 0px;
        }
    }
`

const HomeView: React.FC = function() 
{
    const boardItems = dummyaccount.boards.map((board, idx) => {
        console.log("Board name: " + board.name);
        return (
            <li key={board.name+"_"+idx}> 
                {board.name} 
            </li>
        )
    })

    return(
        <AccountContainer>
            <ul>
                {boardItems}
            </ul>
        </AccountContainer>
    );
}

export default HomeView;