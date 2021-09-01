import styled from "styled-components";
import Palette from "../../common/colorpalette";

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

export { HeaderContainer, LanguagesContainer }