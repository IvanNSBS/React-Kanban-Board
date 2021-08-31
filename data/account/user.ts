import Board from "../board/board";
import BoardsFolder from './boardsFolder';

export default class User {
    private _username: string;
    private _folders: BoardsFolder[];
    private _starredBoards: Board[]

    constructor(username: string){
        this._username = username;
        this._starredBoards = [];
        this._folders = [];
    }

    public get username():string { return this._username; }
    public get starredBoards():Board[] { return this._starredBoards; }
    public get folders():BoardsFolder[] { return this._folders; }

    public set username(value: string) { this._username = value; }
    public set folders(value: BoardsFolder[]) { this._folders = value; }
    public set starredBoards(value: Board[]) { this._starredBoards = value; }
}