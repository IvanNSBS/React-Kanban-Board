import Board from "../board/board";

export default class Account {
    private _username: string;
    private _boards: Board[]
    private _starredBoards: Board[]
    private _workspace: string;

    constructor(username: string){
        this._username = username;
        this._boards = [];
        this._starredBoards = []
        this._workspace = "";
    }

    public get username():string { return this._username; }
    public get boards():Board[] { return this._boards; }

    public addBoard(board: Board) { this._boards.push(board);}
}