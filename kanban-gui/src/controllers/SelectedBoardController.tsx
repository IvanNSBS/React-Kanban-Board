import Board from "../../../data/board/board";
import User from "../../../data/account/user";
import { eventsHandlers } from "./EventManager";
import UrlManager from "./UrlManager";
import axios from 'axios';
import CardsList from "../../../data/board/cardList";
import Card from "../../../data/cards/card";

export const BoardEvents = {
    board_selected: 'board_selected'
}

export default class SelectedBoardController
{
    private _selectedBoard: Board | null;

    constructor(board: Board | null){
        this._selectedBoard = board;
        
        // axios.get(UrlManager.home).then(res => {
        //     const user = JSON.parse(JSON.stringify(res.data)) as User;
        //     this._selectedBoard = user.folders[0].boards[0];

        //     eventsHandlers.invoke(BoardEvents.board_selected);
        // }).catch(e => alert(e));
    }   

    public get selectedBoard() { return this._selectedBoard; }
    public set selectedBoard(value: Board | null) { 
        this._selectedBoard = value; 
        eventsHandlers.invoke(BoardEvents.board_selected);
    }

    public setBoardName(newName: string) {
        if(this.selectedBoard !== null)
            this.selectedBoard.name = newName;
    }

    public addList(title: string) 
    {
        if(this.selectedBoard === null || title === "")
            return;

        const newCardList = new CardsList(title);
        this.selectedBoard.cardsCollection = this.selectedBoard.cardsCollection.concat( newCardList );
    }

    public changeListTitle(listIdx: number, newTitle: string){
        if(this.selectedBoard === null)
            return;

        if(listIdx < 0 || listIdx >= this.selectedBoard.cardsCollection.length)
            return;
        
        this.selectedBoard.cardsCollection[listIdx].name = newTitle;
    }

    public addCardToList(cardListidx: number, cardTitle: string) {
        if(this.selectedBoard === null){
            console.log('selected board is null')
            return;
        }

        if(cardListidx < 0 || cardListidx >= this.selectedBoard.cardsCollection.length){
            console.log('invalid index')
            return;
        }

        const newCard = new Card(cardTitle);
        this.selectedBoard.cardsCollection[cardListidx].cards = this.selectedBoard.cardsCollection[cardListidx].cards.concat(newCard);
    }

    public moveCard(currentListIdx: number, newListIdx: number, newPosIdx: number) {

    }
}
