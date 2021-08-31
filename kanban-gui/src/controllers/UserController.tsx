import BoardsFolder from "../../../data/account/boardsFolder";
import Board from "../../../data/board/board";
import User from "../../../data/account/user";

interface FolderEventFunc {
    (folders: BoardsFolder[]): void;
}

export default class UserController{
    private _user: User;
    private _folderEventsSubscribers: FolderEventFunc[]; 

    constructor(user: User){
        this._user = user;
        this._folderEventsSubscribers = [];
    }   

    public subscribeToFoldersChanged(func: FolderEventFunc) {
        this._folderEventsSubscribers.push(func);
    }

    public removeSubscribeFromFoldersChanged(func: FolderEventFunc) {
        this._folderEventsSubscribers.filter(f => f !== func);
    }

    public createFolder(name: string): BoardsFolder[] {
        this._user.folders = this._user.folders.concat( new BoardsFolder(name) );
        this._folderEventsSubscribers.forEach(x => x(this._user.folders));

        return this._user.folders;
    }

    public getFolders(): BoardsFolder[] {
        return this._user.folders;
    }

    public getStarredBoards(): Board[] {
        return this._user.starredBoards;
    }
}
