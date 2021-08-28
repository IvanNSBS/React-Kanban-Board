import styled from 'styled-components';
import React from 'react';
import Board from '../../../data/board/board';


interface BoardData{
    listId: string;
    board: Board;
}

const ListItem = styled.li`
    background-color: red;
    border-radius: 3px;
    min-width: 130px;
    max-width: 23%;
    height: 112px;
    color: whitesmoke;
    margin: 0 2% 2% 0;
    padding: 0px;
`

const BoardView: React.FC<BoardData> = function(props) {
    return(
        <ListItem key={props.listId}>
            {props.board.name}
            <span>{props.board.workspace}</span>
        </ListItem>
    );
}

export default BoardView;