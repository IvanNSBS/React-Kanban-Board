import React from "react";
import { LocalizerContext, localizer } from "../../contexts/Localizer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Palette from "../../common/colorpalette";
import BackgroundStyle from "../../global styles/GlobalBody.style";
import SelectedBoardContext from "../../contexts/SelectedBoard";
import SelectedBoardController from "../../controllers/SelectedBoardController";
import Header from "../header/Header";
import Home from "../home/Home";
import BoardScreen from "../board/BoardScreen";

import Board from "../../../../data/board/board";

const homePath = "/";
const boardViewPath = "/board/:folderName/:boardName";

const AppRouter: React.FC = function() 
{
    return(
        <React.StrictMode>
            <LocalizerContext.Provider value={localizer}>
                <BackgroundStyle bgCol={Palette.background}/>
                <BrowserRouter>
                    <Header/>
                    
                    <SelectedBoardContext.Provider value={ new SelectedBoardController(new Board('', '')) }>
                        <Switch>
                            <Route path={homePath} component={Home} exact/>
                            <Route path={boardViewPath} component={BoardScreen}/>
                        </Switch>
                    </SelectedBoardContext.Provider>
                </BrowserRouter>
            </LocalizerContext.Provider> 
        </React.StrictMode>
    )
}

export default AppRouter;