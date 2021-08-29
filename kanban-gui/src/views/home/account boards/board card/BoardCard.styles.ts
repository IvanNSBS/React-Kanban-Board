import styled from 'styled-components';
import Palette from '../../../../common/colorpalette';

const ListItem = styled.li`
    background-color: ${Palette.boardCard};
    border-radius: 7px;
    width: 21%;
    min-width: 140px;
    height: 112px;
    margin: 0 2% 2% 0;
    padding: 8px;
    user-select: none;
    
    color: ${Palette.text};
    transition: 0.2s ease-out;

    display: flex;
    flex-direction: column;
    flex-grow: 0;
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

const CreateBoard = styled(ListItem)`
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
`

const BottomContainer = styled.div`
    display: flex;
    align-items: space-between;
    justify-content: space-between;
    color: ${Palette.secondaryText};
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

export { FavoriteButton, BottomContainer, ListItem, LabelFont, CreateBoard }