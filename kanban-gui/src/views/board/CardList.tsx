import React from "react";
import * as styles from './CardList.styles';

interface CardListData {
    name: string;
}

const CardList: React.FC<CardListData> = function(props){
    return(
        <styles.ListWrapper>
            <styles.ListContainer>
                <div>
                    {props.name}
                </div>
            </styles.ListContainer>
        </styles.ListWrapper>
    )
}

export default CardList;