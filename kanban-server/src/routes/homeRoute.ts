import express, { Router } from 'express';
import Board from '../../../data/board/board';
import userManager from '../userManager';
import user_actions_status from '../../../data/request_statuses/user_statuses';

const homeRoute = Router();

homeRoute.get('/', function (req: express.Request, res: express.Response) {
    res.send(JSON.stringify(userManager.user))
});

homeRoute.get('/folders', function (req: express.Request, res: express.Response) {
    if(userManager.user.folders.length == 0)
        res.status(204).send('No folders created')
    else
        res.status(200).send( JSON.stringify(userManager.user.folders) );
})

homeRoute.get('/favorites', function (req: express.Request, res: express.Response) {
    if(userManager.user.starredBoards.length == 0)
        res.status(204).send('No favorite boards')
    else
        res.status(200).send( JSON.stringify(userManager.user.starredBoards) );
})

homeRoute.post('/folders', function(req: express.Request, res: express.Response) {
    const folderName = req.body.name;
    const iconUrl = req.body.iconUrl;

    const status = userManager.createFolder(folderName, iconUrl);
    if(status === user_actions_status.bad_request)
        res.status(406).send('Invalid Folder');
    else if(status === user_actions_status.already_exists)
        res.status(409).send('Folder already exists')
    else
        res.status(200).send(`Folder with name ${folderName} created`)
})

homeRoute.post('/favorites', function(req: express.Request, res: express.Response) {
    const favorites = <Board[]>req.body;
    if(favorites === undefined)
        res.status(406).send('Invalid Folder');

    userManager.user.starredBoards = favorites;
    res.status(200).send(`Updated Starred Boards`)
})

homeRoute.post('/boards', function(req: express.Request, res: express.Response) {
    const folderIdx: number = req.body.folderIdx;
    const name: string = req.body.name;
    const bgImgUrl: string | undefined = req.body.bgImgUrl;

    const status = userManager.createBoardOnFolder(folderIdx, name, bgImgUrl);
    if(status === user_actions_status.bad_request)
        res.status(406).send('Invalid parameters for boards');
    else if(status === user_actions_status.already_exists)
        res.status(409).send('Board already exists');
    else
        res.status(200).send(`Board with name ${name} created`);
})

export default homeRoute;