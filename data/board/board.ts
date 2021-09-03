import CardsList from "./cardList";

export default class Board {
    private _name: string;
    private _foldername: string;
    private _backgroundImgUrl: string | undefined;
    private _cardsCollection: CardsList[];

    constructor(name: string, folderName:string, backgroundImg?:string){
        this._name = name;
        this._cardsCollection = [];
        this._foldername = folderName;
        this._backgroundImgUrl = backgroundImg;
    }

    public get foldername() { return this._foldername; }
    public get name() { return this._name; }
    public get cardsCollection() { return this._cardsCollection; }
    public get backgroundImgUrl() { return this._backgroundImgUrl; }

    public set backgroundImgUrl(value: string | undefined) { this._backgroundImgUrl = value; }

}