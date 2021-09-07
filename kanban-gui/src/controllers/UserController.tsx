import BoardsFolder from "../../../data/account/boardsFolder";
import Board from "../../../data/board/board";
import User from "../../../data/account/user";

import axios from 'axios';

import { eventsHandlers } from './EventManager';

function folderComparer(a: BoardsFolder, b: BoardsFolder) {
    if(a.name > b.name)
        return 1;
    if(a.name < b.name)
        return -1;

    return 0;
}

export const FolderEvents = {
    foldersChanged: 'folders_changed',
    starredBoardsChanged: 'starred_boards_changed'
}

export default class UserController {
    private _user: User;


    constructor(user: User){
        this._user = user;

        axios.get('http://localhost:8000/').then(res => {
            const user = JSON.parse(JSON.stringify(res.data)) as User;
            this._user = res.data;
            eventsHandlers.invoke(FolderEvents.foldersChanged);
            eventsHandlers.invoke(FolderEvents.starredBoardsChanged);
        });
    }   
    

    public createFolder(name: string, iconUrl?:string): BoardsFolder[] {
        if(name === "" || this._user.folders.filter(f => f.name === name).length > 0)
            return this._user.folders;
        
        this._user.folders = this._user.folders.concat( new BoardsFolder(name, iconUrl) ).sort(folderComparer);

        eventsHandlers.invoke(FolderEvents.foldersChanged);
        return this._user.folders;
    }

    public addBoardToFolder(folderIdx: number, name: string, bgImgUrl?:string): Board[] | null{
        if(folderIdx < 0 || folderIdx >= this._user.folders.length)
            return null;
            
        const folderName = this._user.folders[folderIdx].name;
        this._user.folders[folderIdx].boards.push( new Board(name, folderName, bgImgUrl) );

        this._user.folders = [...this._user.folders];
        eventsHandlers.invoke(FolderEvents.foldersChanged);

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

        eventsHandlers.invoke(FolderEvents.starredBoardsChanged);
        return this._user.starredBoards;
    }

    public getFolders(): BoardsFolder[] {
        return this._user.folders;
    }

    public getStarredBoards(): Board[] {
        return this._user.starredBoards;
    }
}
