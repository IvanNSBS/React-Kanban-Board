import User from '../../../data/account/user';
import express, { Router } from 'express';

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
    }
}
