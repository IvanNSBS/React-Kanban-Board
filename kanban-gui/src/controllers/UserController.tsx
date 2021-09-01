import BoardsFolder from "../../../data/account/boardsFolder";
import Board from "../../../data/board/board";
import User from "../../../data/account/user";

interface FolderEventFunc {
    (folders: BoardsFolder[]): void;
}

interface StarredEventFunc {
    (folders: Board[]): void;
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
    private _starredEventsSubscribers: StarredEventFunc[]; 

    constructor(user: User){
        this._user = user;
        this._folderEventsSubscribers = [];
        this._starredEventsSubscribers = [];
    }   

    public subscribeToFoldersChanged(func: FolderEventFunc) {
        this._folderEventsSubscribers.push(func);
    }

    public removeSubscribeFromFoldersChanged(func: FolderEventFunc) {
        this._folderEventsSubscribers = this._folderEventsSubscribers.filter(f => f !== func);
    }

    public subscribeToStarredChanged(func: StarredEventFunc) {
        this._starredEventsSubscribers.push(func);
    }

    public removeSubscribeFromStarredChanged(func: StarredEventFunc) {
        this._starredEventsSubscribers = this._starredEventsSubscribers.filter(f => f !== func);
    }
    // end events

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

    public isBoardStarred(board: Board): boolean {
        return this._user.starredBoards.filter(a => a === board).length > 0;
    }

    public toggleStarredBoard(board: Board): Board[] {
        if(!this.isBoardStarred(board)) {
            this._user.starredBoards = this._user.starredBoards.concat( board );
        }
        else{
            this._user.starredBoards = this._user.starredBoards.filter(a => a !== board);
        }

        this._starredEventsSubscribers.forEach(x => x(this._user.starredBoards));
        return this._user.starredBoards;
    }

    public getFolders(): BoardsFolder[] {
        return this._user.folders;
    }

    public getStarredBoards(): Board[] {
        return this._user.starredBoards;
    }
}
