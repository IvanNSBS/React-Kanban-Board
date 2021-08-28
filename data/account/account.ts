import Board from "../board/board";

export default class Account {
    private _userName;
    private _boards: Board[]
    private _boardsWithStar: Board[]
    private _workspace: string;

    constructor(username: string){
        this._userName = username;
    }

    public get username() { return this.username; }
}