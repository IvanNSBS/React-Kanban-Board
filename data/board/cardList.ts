import Card from "../cards/card";

export default class CardsList {
    public name: string = "";
    public cards: Card[] = []; 

    constructor(name: string){
        this.name = name;
        this.cards = [];
    }
}