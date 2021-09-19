import styled, { css } from "styled-components";
import Palette from "../../common/colorpalette";

const Card = css`
    background-color: ${Palette.cardBg};
    border-radius: 3px;
    box-shadow: 0 1px 0 #091e4240;
    cursor: pointer;
    display: block;
    max-width: 300px;
    min-height: 20px;
    position: relative;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;

    &:hover{
        background-color: ${Palette.cardHoverBg}
    }

    &:active {
        background-color: ${Palette.cardClickBg}
    }
`

const ListCard = styled.div<{isLast?: boolean}>`
    ${Card};
    display: flex;
    flex-direction: column;
    margin-bottom: ${props => props.isLast ? '0px' : '8px' };
`

const CardCreator = styled.textarea`
    resize: none;
    outline: none;
    user-select: none;
    overflow: hidden;
    
    border: 0px;
    margin: 2px;
    padding: 8px;
    min-height: 40px;

    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    font-family: Arial, Helvetica, sans-serif;
`


const ContentWrapper = styled.div`
    padding: 6px 8px 2px;
    overflow: hidden;

    & button svg {
        color: transparent;
        transition: 0.1s ease-out;
    }

    &:hover button svg {
        color: ${Palette.cardTextCol};
        transition: 0.1s ease-out;
    }
`

const LabelWrapper = styled.div`
    height: 20px;
    overflow: auto;
    cursor: pointer;
    white-space: normal;
    user-select: none;

    & span {
        height: 16px;
        line-height: 16px;
        max-width: 198px;
        padding: 0 8px;
        border-radius: 5px;
        background-color: #279ba3;
        color: ${Palette.text};
        float: left;
        font-size: 12px;
        font-weight: 700;
        
        &:hover {
            filter: brightness(0.8);
        }
    }
`

const CardText = styled.span`
    word-wrap: break-word;
    clear: both;
    color: ${Palette.cardTextCol};
    display: block;
    margin: 0 0 4px;
    overflow: hidden;
    text-decoration: none;
    cursor: pointer;

    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    user-select: none;
`

const EditButton = styled.button`
    position: absolute;
    width: 25px;
    height: 25px;
    z-index: 5;
    background-color: transparent;
    border-radius: 3px;

    border: 0;
    margin: 0;
    opacity: 0.7;

    top: 3px;
    right: 3px;

    cursor: pointer;

    &:hover {
        opacity: 0.85;
        filter: brightness(0.9);
        background-color: ${Palette.cardListBg};
        transition: 0.1s ease-out;
    }

    &:active {
        opacity: 1;
        filter: brightness(0.8);
        transition: 0.1s ease-out;
        background-color: ${Palette.cardListBg};
    }

    & svg {
        margin: 0;
        border: 0;
    }
`

export { ListCard, CardCreator, ContentWrapper, LabelWrapper, CardText, EditButton }