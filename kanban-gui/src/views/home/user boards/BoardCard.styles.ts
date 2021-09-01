import styled from 'styled-components';
import Palette from '../../../common/colorpalette';

const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    justify-content: space-between;

    width: 21%;
    min-width: 140px;
    height: 112px;

    color: ${Palette.text};
    
    border-radius: 7px;
    margin: 0 2% 2% 0;
    padding: 8px;
    
    user-select: none;
    transition: 0.2s ease-out;

    color: ${Palette.text};
    background-color: ${Palette.boardCard};
    /* background-image: url('https://nemenomicon.files.wordpress.com/2017/05/dark-souls.jpg');
    background-repeat: no-repeat;
    background-position: right right;
    background-size: cover; */

    & svg {
        fill: transparent;
    }

    &:hover {
        transition: 0.2s ease-out;
        background-color: ${Palette.boardCardHover};

        & svg{
            fill: ${Palette.text};
        }
    }

    &:active:not(:focus-within) {
        transition: 0.2s ease-out;
        background-color: ${Palette.boardCardActive};
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

    & svg {
        transition: 0.2s ease-out;
        width: 100%;
        height: 100%;
    }

    &:hover svg {
        transition: 0.1s cubic-bezier(0.34, 1.56, 0.64, 1);
        transform: scale(1.25);
        fill: yellow;
    }

    &:active svg {
        transform: scale(1.3);
        fill: #adb300;
    }
`

const LabelFont = styled.label<{weight: string, size: string}>`
    font-weight: ${(props) => props.weight};
    font-size: ${(props) => props.size};
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;

    & svg {
        width: 20px;
        height: 20px;
    }
`

export { FavoriteButton, BottomContainer, ListItem, LabelFont, CreateBoard, TitleContainer }