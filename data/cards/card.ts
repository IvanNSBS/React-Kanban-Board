import Tag from './tag';
import Checklist from './checklist';

export default class Card {
    private _name: string;
    private _description: string;
    private _associatedTags: Tag[];
    private _checklists: Checklist[];

    constructor(name: string){
        this._name = name;
        this._description = "";
        this._associatedTags = [];
        this._checklists = [];
    }

    public get name() { return this._name; }
}