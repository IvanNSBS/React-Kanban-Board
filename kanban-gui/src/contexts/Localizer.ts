import {createContext} from "react";
import { Languages, Texts, getLocalizedText } from "../common/localization";

class Localizer{
    private _currentLanguage: string;

    constructor(){
        const language = <string | null>localStorage.getItem('lang');
        if(language !== null)
            this._currentLanguage = language;
        else
            this._currentLanguage = Languages.enUs;
    }

    public useEnUs() { 
        localStorage.setItem('lang', Languages.enUs);
        document.location.reload();
    }
    public usePtBr() { 
        localStorage.setItem('lang', Languages.ptBr);
        document.location.reload();
    }
    public get texts() { return Texts; }

    public getTextById(textId: string):string {
        return getLocalizedText(this._currentLanguage, textId);
    }
}

const localizer = new Localizer();
const LocalizerContext = createContext(localizer);

export { LocalizerContext, localizer, Texts as texts};