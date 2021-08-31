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

    public createFolder(name: string, iconUrl?:string): BoardsFolder[] {
        this._user.folders = this._user.folders.concat( new BoardsFolder(name, iconUrl) );
        this._folderEventsSubscribers.forEach(x => x(this._user.folders));

        return this._user.folders;
    }

    public addBoardToFolder(folderIdx: number, name: string): Board[] | null{
        if(folderIdx < 0 || folderIdx >= this._user.folders.length)
            return null;
            
        const folderName = this._user.folders[folderIdx].name;
        this._user.folders[folderIdx].boards.push( new Board(name, folderName) );

        this._user.folders = [...this._user.folders];
        this._folderEventsSubscribers.forEach(x => x(this._user.folders));

        return this._user.folders[folderIdx].boards;
    }

    public getFolders(): BoardsFolder[] {
        return this._user.folders;
    }

    public getStarredBoards(): Board[] {
        return this._user.starredBoards;
    }
}
