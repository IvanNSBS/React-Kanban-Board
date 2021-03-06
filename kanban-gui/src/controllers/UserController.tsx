import BoardsFolder from "../../../data/account/boardsFolder";
import Board from "../../../data/board/board";
import User from "../../../data/account/user";
import UrlManager from "./UrlManager";
import { eventsHandlers } from './EventManager';
import axios, { AxiosError } from 'axios';
import user_action_statuses from '../../../data/request_statuses/user_statuses';
import user_actions_status from "../../../data/request_statuses/user_statuses";

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
    }   
    

    public createFolder(name: string, iconUrl?:string): number 
    {
        if(name.length === 0)
            return user_action_statuses.bad_request;

        if(this._user.folders.filter(f => f.name.toLowerCase() === name.toLowerCase()).length > 0)
            return user_action_statuses.already_exists;

        this._user.folders = this._user.folders.concat( new BoardsFolder(name, iconUrl) );
        eventsHandlers.invoke(FolderEvents.foldersChanged);

        axios.post(UrlManager.folders, {name, iconUrl}).catch(function(e: AxiosError) {
            alert(`Couldn't send data to server.\nStatus: ${e.request.status}\nError: ${e}`);
        })

        return user_action_statuses.success;
    }

    public addBoardToFolder(folderIdx: number, name: string, bgImgUrl?:string): number
    {
        if(folderIdx < 0 || folderIdx >= this._user.folders.length)
            return user_action_statuses.bad_request;
        
        if(this._user.folders[folderIdx].boards.filter(b => b.name.toLowerCase() === name.toLowerCase()).length > 0)
            return user_action_statuses.already_exists;

        const folderName = this._user.folders[folderIdx].name;
        this._user.folders[folderIdx].boards.push( new Board(name, folderName, bgImgUrl) );
        this._user.folders = [...this._user.folders];
        eventsHandlers.invoke(FolderEvents.foldersChanged);

        axios.post(UrlManager.boards, {folderIdx, name, bgImgUrl}).catch(function(e: AxiosError){
            alert(`Couldn't send data to server.\nStatus: ${e.request.status}\nError: ${e}`);
        })

        return user_actions_status.success;
    }

    public isBoardStarred(board: Board): boolean {
        return this._user.starredBoards.filter(a => a.name === board.name && a.foldername === board.foldername).length > 0;
    }

    public toggleStarredBoard(board: Board): Board[] {
        // TODO: This validation shouldn't be done here.
        if(!this.isBoardStarred(board)) {
            this._user.starredBoards = this._user.starredBoards.concat( board );
        }
        else{
            this._user.starredBoards = this._user.starredBoards.filter(a => a.name !== board.name);
        }

        axios.post(UrlManager.starredBoards, this._user.starredBoards).then(() => {
            eventsHandlers.invoke(FolderEvents.starredBoardsChanged);
        })
        return this._user.starredBoards;
    }

    public getFolders(): BoardsFolder[] {
        return this._user.folders;
    }

    public getStarredBoards(): Board[] {
        return this._user.starredBoards;
    }

    public updateFolderName(prevName: string, newName: string, newIconUrl?: string)
    {
        const folderIdx = this.getFolders().findIndex(f => f.name === prevName);
        if(folderIdx === -1)
            return;
        
        const newFolder = JSON.parse(JSON.stringify(this.getFolders()[folderIdx])) as BoardsFolder;
        newFolder.name = newName;
        newFolder.iconUrl = newIconUrl;

        this._user.folders = Object.assign([...this._user.folders], {
            [folderIdx]: newFolder
        });

        eventsHandlers.invoke(FolderEvents.foldersChanged);

        const params = {
            prevFolderName: prevName,
            newFolderName: newName,
            newFolderIconUrl: newIconUrl,
        }

        axios.put(UrlManager.boards, params).catch((e: AxiosError) => {
            alert(e.request.data);
        })
    }

    public deleteFolder(folderName: string) 
    {
        const folder = this.getFolders().find(f => f.name === folderName);
        if(folder === undefined)
            return;

        const starredBoards = folder.boards.filter( b => this.isBoardStarred(b) ); 
        const hasStarredBoard = starredBoards.length > 0;
        this._user.folders = this._user.folders.filter(f => f.name !== folderName);
        
        eventsHandlers.invoke(FolderEvents.foldersChanged);
        if(hasStarredBoard) {
            this._user.starredBoards = this._user.starredBoards.
                filter( b => starredBoards
                    .find(st => st.name === b.name && st.foldername === b.foldername) === undefined )
            eventsHandlers.invoke(FolderEvents.starredBoardsChanged);
        }

        axios.delete(UrlManager.folders+`/${folderName}`).catch((e: AxiosError) => {
            alert(e.response?.data);
        });
    }

    public deleteBoard(boardToDelete: Board) 
    {
        const folderName = boardToDelete.foldername;
        const boardName = boardToDelete.name;

        const folder = this.getFolders().find(f => f.name === folderName);
        if(folder === undefined)
            return;

        const board = folder.boards.find(b => b.name === boardName);
        if(board === undefined)
            return;

        const idx = folder.boards.findIndex(b => b.name === boardName);
        this._user.folders[idx].boards = this._user.folders[idx].boards.filter( b => b.name !== board.name);
        eventsHandlers.invoke(FolderEvents.foldersChanged);
        
        if(this.isBoardStarred(board))
        {
            this._user.starredBoards = this._user.starredBoards
                .filter(st => st.name !== board.name &&  st.foldername !== board.foldername);
            eventsHandlers.invoke(FolderEvents.starredBoardsChanged);
        }

        axios.delete(UrlManager.boards+`/${boardName}/${folderName}`).catch((e: AxiosError) => {
            alert(e.response?.data);
        });
    }
}
