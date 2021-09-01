import BoardsFolder from "../../../data/account/boardsFolder";
import Board from "../../../data/board/board";
import User from "../../../data/account/user";

interface FolderEventFunc {
    (folders: BoardsFolder[]): void;
}

function folderComparer(a: BoardsFolder, b: BoardsFolder) {
    if(a.name > b.name)
        return 1;
    if(a.name < b.name)
        return -1;

    return 0;
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
        this._user.folders = this._user.folders.concat( new BoardsFolder(name, iconUrl) ).sort(folderComparer);

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

    public addStarredBoard(board: Board): Board[] {
        this._user.starredBoards = this._user.starredBoards.concat( board );
        return this._user.starredBoards;
    }

    public getFolders(): BoardsFolder[] {
        return this._user.folders;
    }

    public getStarredBoards(): Board[] {
        return this._user.starredBoards;
    }
}
