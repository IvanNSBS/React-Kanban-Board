import React from "react";
import * as styles from './CardList.styles';
import { BsThreeDots } from 'react-icons/bs'

interface CardListData {
    name: string;
}

const CardList: React.FC<CardListData> = function(props){
    return(
        <styles.ListWrapper>
            <styles.ListContent>
                <styles.ListHeader>
                    <input value={props.name}></input>
                    <button><BsThreeDots/></button>
                </styles.ListHeader>
                <styles.CreateCard>
                    <b>+</b> Adicionar um cartão
                </styles.CreateCard>
            </styles.ListContent>
        </styles.ListWrapper>
    )
}

export default CardList;