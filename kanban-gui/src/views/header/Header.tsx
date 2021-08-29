import React from "react";
import LinkButton from "../../common/components/link button/LinkButton";
import * as styles from './Header.styles'

const Header: React.FC = function() {
    return(
        <styles.HeaderContainer>
            <div>
                <LinkButton to="/" inner="Home"/>
                <LinkButton to="/quadros" inner="Quadros"/>
            </div>
            Kanban Board
            <button>Criar</button>
        </styles.HeaderContainer>
    );
}

export default Header;