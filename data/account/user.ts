import Board from "../board/board";
import BoardsFolder from './boardsFolder';

export default class User {
    public username: string;
    public folders: BoardsFolder[];
    public starredBoards: Board[]

    constructor(username: string){
        this.username = username;
        this.starredBoards = [];
        this.folders = [];
    }

    // public get username():string { return this._username; }
    // public get starredBoards():Board[] { return this._starredBoards; }
    // public get folders():BoardsFolder[] { return this._folders; }

    // public set username(value: string) { this._username = value; }
    // public set folders(value: BoardsFolder[]) { this._folders = value; }
    // public set starredBoards(value: Board[]) { this._starredBoards = value; }
}