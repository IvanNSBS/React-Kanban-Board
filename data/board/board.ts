import CardsList from "./cardList";

export default class Board {
    private _name: string;
    private _workspace: string;
    private _cardsCollection: CardsList[];

    constructor(name: string, workspace:string = ""){
        this._name = name;
        this._cardsCollection = [];
        this._workspace = workspace;
    }

    public get workspace() { return this._workspace; }
    public get name() { return this._name; }
    public get cardsCollection() { return this._cardsCollection; }

    public set workspace(value: string) { this._workspace = value; }
}