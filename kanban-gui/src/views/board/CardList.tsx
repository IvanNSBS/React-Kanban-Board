import React, { useContext } from "react";
import * as styles from './CardList.styles';
import { BsThreeDots } from 'react-icons/bs'
import Card from './Card';
import { LocalizerContext } from "../../contexts/Localizer";

interface CardListData {
    name: string;
}

const CardList: React.FC<CardListData> = function(props) {

    const localizer = useContext(LocalizerContext);

    return(
        <styles.ListWrapper>
            <styles.ListContent>
                
                <styles.ListHeader>
                    <input value={props.name}></input>
                    <button><BsThreeDots/></button>
                </styles.ListHeader>

                <div style={{margin:'4px 6px', padding:'4px', overflowY: 'auto'}}>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>

                <styles.CreateCard>
                    <b>+</b> {localizer.getTextById(localizer.texts.btn_add_new_card)}
                </styles.CreateCard>
            </styles.ListContent>
        </styles.ListWrapper>
    )
}

export default CardList;