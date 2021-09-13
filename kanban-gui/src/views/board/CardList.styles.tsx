import styled from "styled-components";
import Palette from "../../common/colorpalette";

const ListWrapper = styled.div`
    background-color: #00ffff13;
    height: 100%;
    display: inline-block;
    box-sizing: border-box;
    vertical-align: top;
    margin: 0 5px;
    flex-direction: column;
    width: 272px;
    min-width: 272px;
`

const ListContent = styled.div`
    background-color: #ebecf0;
    border-radius: 3px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    white-space: normal;
`

const ListHeader = styled.div`
    min-height: 26px;
    height: 32px;
    padding: 5px 8px;

    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    column-gap: 10px;

    & input {
        color: ${Palette.background};
        font-weight: bold;
        background-color: transparent;
        border: 0;
        margin: 10px 0px 0px 0px;
        padding: 4px 8px;
        width: 100%;
        border-radius: 4px;
        font-size: 14px;

        height: 28px;
        min-height: 20px;
        max-height: 256px;
        overflow: hidden;
        overflow-wrap: break-word;
        box-shadow: none;
        font-weight: 600;

        &:focus {
            border: 1px solid ${Palette.background};
            background-color: white;
        }
    }

    & button {
        border: 0;
        margin: 0;
        padding: 0;
        opacity: 0.8;
        min-width: 32px;
        min-height: 32px;
        border-radius: 4px;
        background-color: transparent;

        display: flex;
        align-items: center;
        align-content: center;
        justify-content:center;

        &:hover {
            cursor: pointer;
            opacity: 1;
            background-color: #00000018;
        }
    }
`

const CreateCard = styled.button`
    height: 30px;

    border:0;
    margin: 0;
    opacity: 0.6;
    border-radius: 4px;
    background-color: transparent;

    margin: 6px 6px;
    padding: 0px 12px;
    text-align: left;
    font-size: 14px;

    &:hover {
        cursor: pointer;
        opacity: 1;
        background-color: #00000018;
    }
`

export { ListWrapper, ListContent, ListHeader, CreateCard }