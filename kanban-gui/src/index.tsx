import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './views/home/Home';
import BackgroundStyle from './global styles/GlobalBody.style'
import Header from './views/header/Header'
import Palette from './common/colorpalette'
import { LocalizerContext, localizer} from './contexts/Localizer'

const homePath = "/";

const AppRouter: React.FC = function() {
    return(
        <React.StrictMode>
            <LocalizerContext.Provider value={localizer}>
                <BackgroundStyle bgCol={Palette.background}/>
                <BrowserRouter>
                <Header/>
                    <Switch>
                        <Route path={homePath} component={Home} exact/>
                    </Switch>
                </BrowserRouter>
            </LocalizerContext.Provider> 
        </React.StrictMode>
    )
}

ReactDOM.render(
    <AppRouter />,
    document.getElementById('app-root'),
)
