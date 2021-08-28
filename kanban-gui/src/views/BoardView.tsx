import styled from 'styled-components';
import React from 'react';
import Board from '../../../data/board/board';
import { useHistory } from 'react-router-dom';
import { AiOutlineStar } from 'react-icons/ai'

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

        & svg { fill: yellow }
    }

    &:active{
        transition: 0.2s ease-out;
        opacity: 0.3;
    }

    & svg {
        transition: 0.2s ease-out;
        width: 100%;
        height: 100%;
        fill: transparent

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
    background-color: transparent;
    width: 20px;
    height: 20px;
    padding: 0;

    
    &:hover svg {
        transition: 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
        transform: scale(1.3);
    }
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
                <FavoriteButton>
                    <AiOutlineStar/>
                </FavoriteButton>
            </BottomContainer>
        </ListItem>
    );
}

export default BoardView;