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
export { HeaderContainer }