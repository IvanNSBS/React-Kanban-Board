import CardsList from "./cardList";

export default class Board {
    private _name: string = "";
    private _cardsCollection: CardsList[] = [];

    constructor(name: string){
        this._name = name;
        this._cardsCollection = [];
    }

    public get name() { return this._name; }
    public get cardsCollection() { return this._cardsCollection; }
}