import styled from "styled-components";
import Palette from "../../common/colorpalette";
import LinkButton from "../../common/components/link button/LinkButton";

const opacity = 0.25;
const opacityHover = 0.35;
const activeHover = 0.45;

const HeaderContainer = styled.div`
    height: 40px;
    background-color: ${Palette.header};
    color: whitesmoke;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LanguagesContainer = styled.div`
    margin-right: 20px;

    & button {
        border: 0;
        padding: 0;

        background-color: transparent;
        width: 40px;
        height: 40px;
        margin-left: 10px;
    }

    & img {
        width: 100%;
        height: 100%;

        &:hover {
            filter: brightness(0.8);
            cursor: pointer;
        }

        &:active{
            filter: brightness(0.65);
        }
    }
`

const HeaderButton = styled(LinkButton)`
    color: ${Palette.text};
    width: 40px;
    height: 100%;
    
    display: flex;
    flex-direction: row;
    
    align-items: center;
    align-content: center;
    justify-content: center;
    
    margin: 4px 4px 4px 8px;
    margin-left: 8px;
    background-color: rgba(255, 255, 255, ${opacity});

    &:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, ${opacityHover});
    }

    &:active {
        cursor: pointer;
        background-color: rgba(255, 255, 255, ${activeHover});
    }

    & svg {
        width: 100%;
        height: 100%;

        padding: 4px;
    }
`

export { HeaderContainer, LanguagesContainer, HeaderButton }