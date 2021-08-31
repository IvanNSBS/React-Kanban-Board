import Board from "../board/board";

export default class BoardsFolder{
    private _name: string;
    private _boards: Board[];

    constructor(name: string) {
        this._name = name;
        this._boards = [];
    }

    public get name():string { return this._name; }
    public get boards():Board[] { return this._boards; }
    
    public set name(value: string) { this._name = value;}
    public set boards(value: Board[]) {this.boards = value;}
}