import React, { useContext } from "react";
import LinkButton from "../../common/components/link button/LinkButton";
import { LocalizerContext } from "../../contexts/Localizer";
import { Languages } from "../../common/localization";
import * as styles from './Header.styles'

const Header: React.FC = function() 
{
    const localizer = useContext(LocalizerContext);

    return(
        <styles.HeaderContainer>
            <div>
                <LinkButton to="/">Home</LinkButton>
                <LinkButton to="/quadros">Quadros</LinkButton>
            </div>
            Kanban Board
            <div>
                <button onClick={() => localizer.usePtBr()}>Criar</button>
                <button onClick={() => localizer.useEnUs()}>Criar</button>
            </div>
        </styles.HeaderContainer>
    );
}

export default Header;