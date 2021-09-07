import User from '../../../data/account/user';
import express, { Router } from 'express';
import BoardsFolder from '../../../data/account/boardsFolder';
import Board from '../../../data/board/board';

export default class HomeRouteController {
    private _user: User;
    private _route: Router;

    constructor(user: User) {
        this._user = user;
        this._route = express.Router();
        this.setupRoutes();

    }

    public get route() { return this._route; }


    private setupRoutes()
    {
        let that = this;
        this._route.get('/folders', function (req: express.Request, res: express.Response) {
            console.log(JSON.stringify(that._user.folders));
            res.send( JSON.stringify(that._user.folders) );
        })

        this._route.get('/favorites', function (req: express.Request, res: express.Response) {
            console.log(JSON.stringify(that._user.starredBoards));
            res.send( JSON.stringify(that._user.starredBoards) );
        })

        this._route.post('/folders', function(req: express.Request, res: express.Response) {
            const folder = <BoardsFolder>req.body;
            if(folder.name === undefined || folder.name === ""){
                res.status(406).send('Invalid Folder');
            }

            that._user.folders = that._user.folders.concat(folder);
            res.status(200).send(`Folder with name ${folder.name} created`)
        })

        this._route.post('/favorites', function(req: express.Request, res: express.Response) {
            const favorites = <Board[]>req.body;
            if(favorites === undefined)
                res.status(406).send('Invalid Folder');

            that._user.starredBoards = favorites;
            res.status(200).send(`Updated Starred Boards`)
        })

        this._route.post('/boards', function(req: express.Request, res: express.Response) {
            const folderIdx: number = req.body.folderIdx;
            const folderName: string = req.body.folderName;
            const name: string = req.body.name;
            const bgImgUrl: string | undefined = req.body.bgImgUrl;

            if( folderIdx < 0 || folderIdx >= that._user.folders.length || 
                name === "" || name === undefined || folderName === "" || folderName === undefined)
            {
                res.status(406).send('Invalid parameters for boards');
            }
            else{
                that._user.folders[folderIdx].boards.push(new Board(name, folderName, bgImgUrl));
                res.status(200).send(`Board created for folder ${folderName} Created`);
            }
        })
    }
}
