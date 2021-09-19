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

    const listSize = selectedBoardController.selectedBoard?.cardsCollection[props.index].cards.length;
    const allCards = selectedBoardController.selectedBoard
                     ?.cardsCollection[props.index].cards.map((card, idx) => {
        return <Card key={idx} isLast={idx===listSize} title={card.title}></Card>
    })

    return(
        <styles.ListWrapper>
            <styles.ListContent>
                
                <CardListTitle name={props.name} 
                               index={props.index}
                               changeName={val => selectedBoardController.changeListTitle(props.index, val)}>
                </CardListTitle>

                <styles.CardsContainer>
                    {allCards}
                    {
                        isCreating && 
                        <CreationCard index={props.index} onFinishCreate={() => setIsCreating(false)}/>
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