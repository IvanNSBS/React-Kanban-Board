import React, { useContext, useEffect, useState } from "react";
import * as styles from './CardList.styles';
import { LocalizerContext } from "../../contexts/Localizer";
import { eventsHandlers } from "../../controllers/EventManager";
import Card from './Card';
import CreationCard from "./CreationCard";
import CardListTitle from "./CardListTitle";
import SelectedBoardContext from "../../contexts/SelectedBoard";

interface CardListData {
    index: number;
    name: string;
}

const CardList: React.FC<CardListData> = function(props) 
{
    const selectedBoardController = useContext(SelectedBoardContext);
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
                
                <CardListTitle name={props.name} 
                               changeName={val => selectedBoardController.changeListTitle(props.index, val)}>
                </CardListTitle>

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