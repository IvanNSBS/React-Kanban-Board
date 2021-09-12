import styled from "styled-components";
import Palette from "../../common/colorpalette";

const opacity = 0.3;
const opacityHover = 0.5;

const HeaderWrapper = styled.div`
    height: 40px;
    margin: 3px 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: space-between;
`

const HeaderButton = styled.button`
    border: 0;
    padding: 0;
    border-radius: 4px;
    width: 35px;
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
    column-gap: 8px;
`

const FolderDataWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: center;

    background-color: #ffffff3d;
    max-width: 400px;
    border-radius: 4px;
    color: ${Palette.text};
    padding: 4px 8px;
    column-gap: 10px;
`

const FolderName = styled.input`
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
`


export { HeaderWrapper, FolderDataWrapper, OptionsContainer, HeaderButton, FolderName }