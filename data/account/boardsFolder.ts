import Board from "../board/board";

export default class BoardsFolder{
    private _name: string;
    private _iconLink: string | undefined;
    private _boards: Board[];

    constructor(name: string, iconLink?:string) {
        this._name = name;
        this._boards = [];
        this._iconLink = iconLink;
    }

    public get iconLink():string | undefined { return this._iconLink; }
    public get name():string { return this._name; }
    public get boards():Board[] { return this._boards; }
    
    public set name(value: string) { this._name = value;}
    public set boards(value: Board[]) {this.boards = value;}
}