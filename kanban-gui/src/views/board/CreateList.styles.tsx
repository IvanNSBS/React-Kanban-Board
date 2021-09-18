import styled from "styled-components";
import Palette from "../../common/colorpalette";

const opacity = 0.25;
const opacityHover = 0.35;
const opacityActive = 0.45;

const ContentWrapper = styled.div`
    width: 272px;
    min-width: 272px;
    height: auto;
    color: ${Palette.text};
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
`

const InactiveText = styled.span`
    border-radius: 4px;
    padding: 4px 8px;
    user-select: none;
    cursor: pointer;
    background-color: rgba(255, 255, 255, ${opacity});
    width: 100%;
    height: 35px;

    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: flex-start;

    & svg {
        padding: 0;
        margin: 0;
        margin-right: 5px;
        width: 20px;
        height: 20px;
    }

    &:hover {
        background-color: rgba(255, 255, 255, ${opacityHover});
    }

    &:active {
        background-color: rgba(255, 255, 255, ${opacityActive});
    }
`

const ActiveContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background-color: ${Palette.cardListBg};
    padding: 4px;

    display: flex;
    flex-direction: column;
    row-gap: 4px;
`

const ListNameInput = styled.textarea`
    border: 2px solid ${Palette.boardCard};
    border-radius: 4px;
    height: 30px;
    padding: 4px 8px;

    resize: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;

    &::placeholder {
        color: gray;
    }

    &:focus {
        outline: none;
    }
`

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    align-content: center;
    justify-content: flex-start;
`

const AddListBtn = styled.button`
    border: 0;
    margin: 0;
    border-radius: 4px;
    color: ${Palette.text};
    background-color: ${Palette.boardCard};
    cursor: pointer;

    padding: 8px;
    font-family: Arial, Helvetica, sans-serif;
    min-width: 60px;
    height: 30px;

    &:hover {
        background-color: ${Palette.boardCardHover}
    }

    &:active {
        background-color: ${Palette.boardCardActive}
    }
`

const CancelButton = styled.button`
    border: 0;
    margin: 0;
    margin-left: 5px;
    fill: #333333;
    background-color: transparent;
    transition: 0.1s;

    width: 25px;
    height: 25px;

    display: flex;
    flex-direction: row;

    align-items: center;
    align-content: center;
    justify-content: center;

    & svg {
        width: 100%;
        height: 100%;
    }

    &:hover {
        transition: 0.1s;
        cursor: pointer;
        fill: black;
        transform: scale(1.1);
    }
`

export { ContentWrapper, AddListBtn, CancelButton, ListNameInput, InactiveText, ActiveContentWrapper, ButtonsContainer }