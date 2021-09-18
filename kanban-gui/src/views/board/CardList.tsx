import React, { useContext, useEffect, useState } from "react";
import * as styles from './CardList.styles';
import { BsThreeDots } from 'react-icons/bs'
import Card from './Card';
import { LocalizerContext } from "../../contexts/Localizer";
import CreationCard from "./CreationCard";
import { eventsHandlers } from "../../controllers/EventManager";


interface CardListData {
    name: string;
}

const CardList: React.FC<CardListData> = function(props) 
{
    const localizer = useContext(LocalizerContext);
    const [isCreating, setIsCreating] = useState<boolean>(false);

    useEffect(() => {
        const disableCreating = () => setIsCreating(false);

        eventsHandlers.addSubscriber('bg_click_board_screen', disableCreating);

        return(
            eventsHandlers.removeSubscriber('bg_click_board_screen', disableCreating)
        )
    }, [])

    return(
        <styles.ListWrapper>
            <styles.ListContent>
                
                <styles.ListHeader>
                    <input value={props.name}></input>
                    <button><BsThreeDots/></button>
                </styles.ListHeader>

                <styles.CardsContainer>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card isLast={!isCreating}></Card>
                    {
                        isCreating && 
                        <CreationCard/>
                    }
                </styles.CardsContainer>
                {
                    !isCreating && 
                    <styles.CreateCard onClick={e => { e.stopPropagation(); setIsCreating(true); }}>
                        <b>+</b> {localizer.getTextById(localizer.texts.btn_add_new_card)}
                    </styles.CreateCard>
                }

            </styles.ListContent>
        </styles.ListWrapper>
    )
}

export default CardList;