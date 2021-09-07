import User from '../../../data/account/user';
import express, { Router } from 'express';
import BoardsFolder from '../../../data/account/boardsFolder';
import { userInfo } from 'os';

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

        this._route.put('/folders', function(req: express.Request, res: express.Response) {
            const folder = <BoardsFolder>req.body;
            if(folder.name === undefined || folder.name === ""){
                res.status(406).send('Invalid Folder');
            }

            that._user.folders = that._user.folders.concat(folder);
            res.status(200).send(`Folder with name ${folder.name} created`)
        })
    }
}
