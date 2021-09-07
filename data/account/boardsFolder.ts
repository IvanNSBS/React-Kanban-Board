import Board from "../board/board";

export default class BoardsFolder{
    public name: string;
    public iconUrl: string | undefined;
    public boards: Board[];

    constructor(name: string, iconLink?:string) {
        this.name = name;
        this.boards = [];
        this.iconUrl = iconLink;
    }

    // public get iconUrl():string | undefined { return this._iconUrl; }
    // public get name():string { return this._name; }
    // public get boards():Board[] { return this._boards; }
    
    // public set name(value: string) { this._name = value;}
    // public set boards(value: Board[]) {this._boards = value;}
    // public set iconUrl(value: string | undefined) { this._iconUrl = value; }
}