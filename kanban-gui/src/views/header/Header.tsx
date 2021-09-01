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
            <styles.LanguagesContainer>
                <button onClick={() => localizer.usePtBr()}>
                    <img src={require('../../../public/brazil.png').default}></img>
                </button>
                <button onClick={() => localizer.useEnUs()}>
                    <img src={require('../../../public/united-states.png').default}></img>
                </button>
            </styles.LanguagesContainer>
        </styles.HeaderContainer>
    );
}

export default Header;