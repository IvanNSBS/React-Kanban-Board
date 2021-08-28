import Card from "../cards/card";

export default class CardsList {
    private _name: string = "";
    private _cards: Card[] = []; 

    constructor(){
        this._name = "";
        this._cards = [];
    }
}