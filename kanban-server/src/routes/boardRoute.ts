import express, { Router } from 'express';
import Board from '../../../data/board/board';
import CardsList from '../../../data/board/cardList';
import Card from '../../../data/cards/card';
import dataManager from '../dataManager';

const boardRoute = Router();

function validateFolderAndBoard(folderName: string, boardName: string): [boolean, string] {
    const folder = dataManager.user.folders.find(f => f.name === folderName);
    if(folder === undefined) {
        return [false, "Folder Doesn't Exist"];
    }

    let board = folder.boards.find(b => b.name === boardName);
    if(board === undefined){
        return [false, "Board Doesn't Exist"];
    }

    return [true, "Folder is Valid"];
}

function findBoard(folderName: string, boardName: string): Board | undefined {
    return dataManager.user.folders.find(f => f.name === folderName)?.boards.find(b => b.name === boardName); 
}

function validateBoard(folderName: string, boardName: string, res: express.Response): Board | undefined {
    const folder = dataManager.user.folders.find(f => f.name === folderName);
    if(folder === undefined) {
        res.status(406).send("Folder Doesn't Exist");
        return undefined;
    }

    let board = folder.boards.find(b => b.name === boardName);
    if(board === undefined){
        res.status(406).send("Board Doesn't Exist");
        return undefined;
    }

    return board;
}

function validateList(board: Board, index: number, res: express.Response) : CardsList | undefined {
    if(index < 0 || index >= board.cardsCollection.length){
        res.status(406).send("Invalid Card List Index");
        return undefined;
    }

    return board.cardsCollection[index];
}

boardRoute.get('/:name/:boardName', function (req: express.Request, res: express.Response) {
    const folderName = req.params.name;
    const boardName = req.params.boardName;

    const folder = dataManager.user.folders.find(f => f.name === folderName);
    let board = undefined;
    if(folder !== undefined)
        board = folder.boards.find(b => b.name === boardName);

    res.send(`folderName: ${folderName} | boardName: ${boardName} | data: ${JSON.stringify(board)}`)
});

boardRoute.post('/list', function (req: express.Request, res: express.Response) {
    const folderName = req.body.folderName;
    const boardName = req.body.boardName;
    const listName = req.body.listName;

    const [isValid, message] = validateFolderAndBoard(folderName, boardName);
    if(!isValid){
        res.status(406).send(message)
        return;
    }
    
    const board = findBoard(folderName, boardName);
    board?.cardsCollection.push( new CardsList(listName) );
    res.status(200).send("List Created");
});

boardRoute.post('/list/card', function (req: express.Request, res: express.Response) {
    const folderName = req.body.folderName;
    const boardName = req.body.boardName;
    const listIndex = req.body.listIndex;
    const cardTitle = req.body.cardTitle;
    
    const [isValid, message] = validateFolderAndBoard(folderName, boardName);
    if(!isValid) {
        res.status(406).send(message)
        return;
    }

    const board = findBoard(folderName, boardName);
    if(board === undefined) {
        res.status(406).send(message)
        return; 
    }

    if(listIndex < 0 || listIndex >= board?.cardsCollection.length) {
        res.status(406).send("Invalid list index")
        return;
    }

    board?.cardsCollection[listIndex].cards.push( new Card(cardTitle) );
    res.status(200).send("Card Created");
});

boardRoute.put('/name', function (req: express.Request, res: express.Response) {
    const folderName = req.body.folderName;
    const prevName = req.body.prevName;
    const newName = req.body.newName;
    
    const [isValid, message] = validateFolderAndBoard(folderName, prevName);
    if(!isValid) {
        res.status(406).send(message)
        return;
    }

    const board = findBoard(folderName, prevName);
    if(board === undefined) {
        res.status(406).send(message)
        return; 
    }

    board.name = newName;
    res.status(200).send(`Board <${prevName}> at folder <${folderName}> changed name to <${newName}>`)
});

boardRoute.put('/list/name', function (req: express.Request, res: express.Response) {
    const folderName = req.body.folderName;
    const boardName = req.body.boardName;
    const listIdx = req.body.listIdx;
    const newName = req.body.newName;

    const [isValid, message] = validateFolderAndBoard(folderName, boardName);
    if(!isValid) {
        res.status(406).send(message)
        return;
    }

    const board = findBoard(folderName, boardName);
    // This should never happen!!
    if(board === undefined) {
        res.status(406).send(message)
        return; 
    }

    board.cardsCollection[listIdx].name = newName;
    res.status(200).send(`Changed list idx <${listIdx}> name to <${newName}>`)
});

boardRoute.put('/list/card/name', function (req: express.Request, res: express.Response) {
    
});

boardRoute.delete('/list/:listData', function (req: express.Request, res: express.Response) {
    const listData = JSON.parse(req.params.listData);
    const folderName = listData.folderName;
    const boardName = listData.boardName;
    const listIndex = listData.listIndex;

    const board = validateBoard(folderName, boardName, res);
    if(board === undefined)
        return;

    const cardsCollection = validateList(board, listIndex, res);
    if(cardsCollection === undefined)
        return;

    board.cardsCollection.splice(listIndex, 1);
    res.status(200).send(`Deleted card with index <${listIndex}> on board <{${boardName}}> at folder <${folderName}>`);
});


boardRoute.delete('/list/card/:cardData', function (req: express.Request, res: express.Response) {
    const cardData = JSON.parse(req.params.listData);
    const folderName = cardData.folderName;
    const boardName  = cardData.boardName;
    const listIndex  = cardData.listIndex;
    const cardIndex  = cardData.listIndex;

    const board = validateBoard(folderName, boardName, res);
    if(board === undefined)
        return;

    const cardsCollection = validateList(board, listIndex, res);
    if(cardsCollection === undefined)
        return;
    
    if(cardIndex < 0 || cardIndex >= cardsCollection.cards.length){
        res.status(406).send("Invalid Card Index");
        return;
    }

    cardsCollection.cards.splice(cardIndex, 1);
    res.status(200).send(`Deleted card with index <${listIndex}> on board <{${boardName}}> at folder <${folderName}>`);
});


export default boardRoute;