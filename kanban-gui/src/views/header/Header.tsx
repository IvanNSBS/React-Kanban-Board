import React, { useContext } from "react";
import { BiHomeAlt } from 'react-icons/bi'
import FlexDiv from "../../common/styles/FlexDiv";
import { LocalizerContext } from "../../contexts/Localizer";
import * as styles from './Header.styles'

const Header: React.FC = function() 
{
    const localizer = useContext(LocalizerContext);

    return(
        <styles.HeaderContainer>
            <FlexDiv direction='row'>
                <styles.HeaderButton to="/">
                    <BiHomeAlt/>
                </styles.HeaderButton>
            </FlexDiv>
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