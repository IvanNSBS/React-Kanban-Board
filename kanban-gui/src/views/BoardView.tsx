import styled from 'styled-components';
import React from 'react';
import Board from '../../../data/board/board';
import { useHistory } from 'react-router-dom';

interface BoardData{
    listId: string;
    board: Board;
    boardLink: string;
}

const ListItem = styled.li`
    background-color: red;
    border-radius: 3px;
    min-width: 160px;
    width: 23%;
    height: 112px;
    margin: 0 2% 2% 0;
    padding: 8px;
    user-select: none;
    
    color: whitesmoke;
    transition: 0.2s ease-out;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover{
    transition: 0.2s ease-out;
        opacity: 0.5;
    }

    &:active{
        transition: 0.2s ease-out;
        opacity: 0.3;
    }
`

const BottomContainer = styled.div`
    display: flex;
    align-items: space-between;
    justify-content: space-between;
    color: #d1d1d1;
`

const FavoriteButton = styled.button`
    border: 0px;
    border-radius: 0px;
    background-color: green;
    width: 20px;
`

const LabelFont = styled.label<{weight: string, size: string}>`
    font-weight: ${(props) => props.weight};
    font-size: ${(props) => props.size};
`

const BoardView: React.FC<BoardData> = function(props) {
    const history = useHistory();

    return(
        <ListItem key={props.listId} onClick={() => history.push(props.boardLink)}>
            <LabelFont weight="bold" size="18px">{props.board.name}</LabelFont>
            <BottomContainer>
                <LabelFont weight="normal" size="15px">{props.board.workspace}</LabelFont>
                <FavoriteButton></FavoriteButton>
            </BottomContainer>
        </ListItem>
    );
}

export default BoardView;