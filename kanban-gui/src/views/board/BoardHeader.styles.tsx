import styled from "styled-components";
import Palette from "../../common/colorpalette";

const opacity = 0.25;
const opacityHover = 0.35;
const activeHover = 0.45;

const HeaderWrapper = styled.div`
    min-height: 40px;
    margin: 8px 10px 3px 10px;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: start;
    justify-content: space-between;

    @media (max-width: 900px) {
        align-items: flex-start;
    }

    @media (max-width: 650px) {
        min-height: 100px;
    }
`

const HeaderButton = styled.button`
    border: 0;
    padding: 0;
    border-radius: 4px;
    min-width: 35px;
    width: 35px;
    height: 35px;
    background-color: rgba(255, 255, 255, ${opacity});

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    color: ${Palette.text};

    & svg {
        width: 100%;
        height: 100%;
        padding: 7px;
    }

    &:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, ${opacityHover});
    }
`

const OptionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 8px;
    row-gap: 8px;
`

const HeaderTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: center;

    max-width: 400px;
    border-radius: 4px;
    color: ${Palette.text};
    padding: 4px 8px;
    column-gap: 10px;

    user-select: none;

    background-color: rgba(255, 255, 255, ${opacity});

    &:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, ${opacityHover});
    }

    &:active {
        cursor: pointer;
        background-color: rgba(255, 255, 255, ${activeHover});
    }
`

const BoardName = styled.input`
    border-radius: 4px;
    background-color: rgba(255, 255, 255, ${opacity});
    margin: 0;
    border: 0;
    color: ${Palette.text};
    font-weight: bold;
    font-size: 1.1em;
    padding: 4px 10px;

    &:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, ${opacityHover});
    }

    &:focus {
        background-color: ${Palette.text};
        color: ${Palette.background};
    }
`

export { HeaderWrapper, HeaderTitleWrapper, OptionsContainer, HeaderButton, BoardName }