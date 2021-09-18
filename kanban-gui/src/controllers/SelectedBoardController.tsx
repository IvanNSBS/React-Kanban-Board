import Board from "../../../data/board/board";
import { eventsHandlers } from "./EventManager";
import UrlManager from "./UrlManager";
import axios, { AxiosError } from 'axios';
import CardsList from "../../../data/board/cardList";
import Card from "../../../data/cards/card";

export const BoardEvents = {
    board_selected: 'board_selected'
}

export default class SelectedBoardController
{
    private _selectedBoard: Board;

    constructor(board: Board) {
        this._selectedBoard = board;
    }   

    public get selectedBoard() { return this._selectedBoard; }
    public set selectedBoard(value: Board) { 
        this._selectedBoard = value; 
        eventsHandlers.invoke(BoardEvents.board_selected);
    }

    public addList(title: string) 
    {
        if(this.selectedBoard === null || title === "")
            return;

        const newCardList = new CardsList(title);
        this.selectedBoard.cardsCollection = this.selectedBoard.cardsCollection.concat( newCardList );

        const params = {
            folderName: this.selectedBoard.foldername,
            boardName: this.selectedBoard.name,
            listName: title
        }
        axios.post(UrlManager.postBoardList, params).then(res => {
        })
        .catch(e => {
            alert(e);
        })
    }

    public addCardToList(cardListidx: number, cardTitle: string) 
    {
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

        console.log("Card Title: " + newCard.title)

        const params = {
            folderName: this.selectedBoard.foldername,
            boardName: this.selectedBoard.name,
            listIndex: cardListidx,
            cardTitle: cardTitle
        }
        axios.post(UrlManager.postBoardCard, params).then(res => {
        })
        .catch(e => {
            alert(e);
        })
    }

    public changeListTitle(listIdx: number, newTitle: string) 
    {
        if(listIdx < 0 || listIdx >= this.selectedBoard.cardsCollection.length)
            return;
        
        if(this.selectedBoard.cardsCollection[listIdx].name === newTitle)
            return;

        this.selectedBoard.cardsCollection[listIdx].name = newTitle;
        const params = { 
            folderName: this.selectedBoard.foldername,
            boardName: this.selectedBoard.name,
            listIdx: listIdx,
            newName: newTitle
        }
        axios.put(UrlManager.putBoardCardTitle, params).catch((e:AxiosError) => alert(e.response?.data));
    }

    public setBoardName(newName: string) 
    {
        if(this.selectedBoard.name === newName)
            return;

        const params = {
            folderName: this.selectedBoard.foldername,
            prevName: this.selectedBoard.name,
            newName: newName
        }
        
        this.selectedBoard.name = newName;
        axios.put(UrlManager.putBoardTitle, params).catch((e:AxiosError) => alert(e.response?.data));
    }

    public moveCard(currentListIdx: number, newListIdx: number, newPosIdx: number) {

    }
}
