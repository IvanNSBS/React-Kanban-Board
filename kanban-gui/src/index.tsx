import React, { useState } from 'react'
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
import Board from '../../data/board/board';
import LoadingScreen from './LoadingScreen';
import User from '../../data/account/user';

const homePath = "/";
const boardViewPath = "/board/:folderName/:boardName";

const AppLoader: React.FC = function() {
    const [user, setUser] = useState<User | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    function onLoadComplete(user: User | undefined) {
        setUser(user);
        setIsLoading(false);
    }

    if(isLoading){
        return <LoadingScreen onLoadComplete = { onLoadComplete }/>
    }
    else if(user === undefined)
        return <span>Couldn't fetch user data</span>
        
    return <AppRouter></AppRouter>
}

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

ReactDOM.render(
    <AppLoader />,
    document.getElementById('app-root'),
)
