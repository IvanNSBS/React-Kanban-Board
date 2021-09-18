import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './views/home/Home';
import Header from './views/header/Header'
import Palette from './common/colorpalette'
import BoardScreen from './views/board/BoardScreen';
import BackgroundStyle from './global styles/GlobalBody.style'
import { LocalizerContext, localizer} from './contexts/Localizer'
import SelectedBoardContext from './contexts/SelectedBoard';
import SelectedBoardController from './controllers/SelectedBoardController';

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
                    
                    <SelectedBoardContext.Provider value={ new SelectedBoardController(null) }>
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

ReactDOM.render(
    <AppRouter />,
    document.getElementById('app-root'),
)
