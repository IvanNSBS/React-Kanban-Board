import styled from "styled-components";
import Palette from "../../common/colorpalette";

const ListCard = styled.div<{isLast?: boolean}>`
    background-color: ${Palette.cardBg};
    border-radius: 3px;
    box-shadow: 0 1px 0 #091e4240;
    cursor: pointer;
    display: block;
    margin-bottom: ${props => props.isLast ? '0px' : '8px' };;
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

const ContentWrapper = styled.div`
    padding: 6px 8px 2px;
    overflow: hidden;
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

export { ListCard, ContentWrapper, LabelWrapper, CardText }