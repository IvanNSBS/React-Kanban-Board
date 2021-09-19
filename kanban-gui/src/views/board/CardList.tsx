import React, { useContext, useEffect, useState } from "react";
import * as styles from './CardList.styles';
import { LocalizerContext } from "../../contexts/Localizer";
import { eventsHandlers } from "../../controllers/EventManager";
import { BoardEvents } from "../../controllers/SelectedBoardController";
import Card from './Card';
import CreationCard from "./CreationCard";
import CardListTitle from "./CardListTitle";
import CardsList from "../../../../data/board/cardList";
import SelectedBoardContext from "../../contexts/SelectedBoard";

interface CardListData {
    index: number;
    cardList: CardsList;
}

const CardList: React.FC<CardListData> = function(props) 
{
    const localizer = useContext(LocalizerContext);
    const boardController = useContext(SelectedBoardContext);
    const [isCreating, setIsCreating] = useState<boolean>(false);
    const [cardList, setCardList] = useState(props.cardList.cards);

    useEffect(() => {
        const disableCreating = () => setIsCreating(false);
        const updateCardList = () => setCardList(boardController.selectedBoard.cardsCollection[props.index].cards)
        eventsHandlers.addSubscriber('bg_click_board_screen', disableCreating);
        eventsHandlers.addSubscriber(BoardEvents.card_list_elements_changed, updateCardList);

        return () => {
            eventsHandlers.removeSubscriber('bg_click_board_screen', disableCreating)
            eventsHandlers.removeSubscriber(BoardEvents.card_list_elements_changed, updateCardList)
        }
    }, [])

    const listSize = cardList.length;
    const allCards = cardList.map((card, idx) => {
        return (
            <Card key={idx} 
                  isLast={idx===listSize-1 && !isCreating} 
                  title={card.title} 
                  delete={() => boardController.deleteCard(props.index, idx)}>
            </Card>
        )
    })

    return(
        <styles.ListWrapper>
            <styles.ListContent>
                
                <CardListTitle name={props.cardList.name} 
                               index={props.index}>
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