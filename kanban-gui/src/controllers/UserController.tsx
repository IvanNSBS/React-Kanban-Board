import BoardsFolder from "../../../data/account/boardsFolder";
import Board from "../../../data/board/board";
import User from "../../../data/account/user";

export default class UserController{
    private _user: User;
    
    constructor(user: User){
        this._user = user;
    }   

    public createFolder(name: string): BoardsFolder[] {
        this._user.folders = this._user.folders.concat( new BoardsFolder(name) );
        return this._user.folders;
    }

    public getFolders(): BoardsFolder[] {
        return this._user.folders;
    }

    public getStarredBoards(): Board[] {
        return this._user.starredBoards;
    }
}
