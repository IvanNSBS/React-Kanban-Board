import CardsList from "./cardList";

export default class Board {
    private _name: string;
    private _foldername: string;
    private _cardsCollection: CardsList[];

    constructor(name: string, folderName:string){
        this._name = name;
        this._cardsCollection = [];
        this._foldername = folderName;
    }

    public get foldername() { return this._foldername; }
    public get name() { return this._name; }
    public get cardsCollection() { return this._cardsCollection; }
}