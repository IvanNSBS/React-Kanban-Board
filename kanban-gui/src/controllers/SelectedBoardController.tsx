import Board from "../../../data/board/board";
import User from "../../../data/account/user";
import { eventsHandlers } from "./EventManager";
import UrlManager from "./UrlManager";
import axios from 'axios';
import CardsList from "../../../data/board/cardList";

export const BoardEvents = {
    board_selected: 'board_selected'
}

export default class SelectedBoardController
{
    private _selectedBoard: Board | null;

    constructor(board: Board | null){
        this._selectedBoard = board;
        
        axios.get(UrlManager.home).then(res => {
            const user = JSON.parse(JSON.stringify(res.data)) as User;
            this._selectedBoard = user.folders[0].boards[0];

            eventsHandlers.invoke(BoardEvents.board_selected);
        }).catch(e => alert(e));
    }   

    public get selectedBoard() { return this._selectedBoard; }
    public set selectedBoard(value: Board | null) { 
        this._selectedBoard = value; 
        eventsHandlers.invoke(BoardEvents.board_selected);
    }

    public setFolderName(newName: string) {

    }

    public addList(title: string) 
    {
        if(this.selectedBoard === null || title === "")
            return;

        const newCardList = new CardsList(title);
        this.selectedBoard.cardsCollection = this.selectedBoard.cardsCollection.concat( newCardList );
    }

    public addCardToList(listIdx: number, cardTitle: string){
        
    }

    public moveCard(currentListIdx: number, newListIdx: number, newPosIdx: number) {

    }
}
