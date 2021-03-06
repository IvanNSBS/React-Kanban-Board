import Tag from './tag';
import Checklist from './checklist';

export default class Card {
    public title: string;
    public description: string;
    public associatedTags: Tag[];
    public checklists: Checklist[];

    constructor(name: string){
        this.title = name;
        this.description = "";
        this.associatedTags = [];
        this.checklists = [];
    }
}