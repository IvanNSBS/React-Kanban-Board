import {createContext} from "react";
import { Languages, Texts, getLocalizedText } from "../common/localization";

class Localizer{
    private _currentLanguage: string;

    constructor(){
        this._currentLanguage = Languages.ptBr;
    }

    public useEnUs() { this._currentLanguage = Languages.enUs; }
    public usePtBr() { this._currentLanguage = Languages.ptBr; }
    public get texts() { return Texts; }

    public getTextById(textId: string):string {
        return getLocalizedText(this._currentLanguage, textId);
    }
}

const localizer = new Localizer();
const LocalizerContext = createContext(localizer);

export { LocalizerContext, localizer};