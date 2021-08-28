import React from "react";
import styled from "styled-components";
import LinkButton from "./LinkButton";

const HeaderContainer = styled.div`
    height: 40px;
    background-color: #305365;
    color: whitesmoke;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Header: React.FC = function() {
    return(
        <HeaderContainer>
            <div>
                <LinkButton to="/" inner="Home"/>
                <LinkButton to="/quadros" inner="Quadros"/>
            </div>
            Kanban Board
            <button>Criar</button>
        </HeaderContainer>
    );
}

export default Header;