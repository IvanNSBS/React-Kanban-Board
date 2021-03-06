import CardsList from "./cardList";

export default class Board {
    public name: string;
    public foldername: string;
    public backgroundImgUrl: string | undefined;
    public cardsCollection: CardsList[];

    constructor(name: string, folderName:string, backgroundImg?:string){
        this.name = name;
        this.cardsCollection = [];
        this.foldername = folderName;
        this.backgroundImgUrl = backgroundImg;
    }

    // public get foldername() { return this._foldername; }
    // public get name() { return this._name; }
    // public get cardsCollection() { return this._cardsCollection; }
    // public get backgroundImgUrl() { return this._backgroundImgUrl; }

    // public set backgroundImgUrl(value: string | undefined) { this._backgroundImgUrl = value; }

}