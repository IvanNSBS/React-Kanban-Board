import React from 'react'
import ReactDOM from 'react-dom'
import Card from '../../data/cards/card'
import styled from 'styled-components'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './views/home/Home';
import BackgroundStyle from './global styles/GlobalBody.style'
import Header from './views/header/Header'
import Palette from './common/colorpalette'

const homePath = "/";
const aboutPath = "/about";

const card:Card = new Card("Example Card")
const RedHeader = styled.h2`
    background-color: red;
    color: whitesmoke;
`

const CardName: React.FC<{text:string}> = (props) => {
    return(
        <div>
            <RedHeader>Card Name: {props.text}</RedHeader>  
            <Link to={homePath}>Home</Link>
        </div>
    );
}

const AppRouter: React.FC = function() {
    return(
        <React.StrictMode>
            <BackgroundStyle bgCol={Palette.background}/>
            <BrowserRouter>
            <Header/>
                <Switch>
                    <Route path={homePath} component={Home} exact/>
                    <Route path={aboutPath} render={() => <CardName text="Sining clevers"/>} exact/>
                </Switch>
            </BrowserRouter>
        </React.StrictMode>
    )
}

ReactDOM.render(
    <AppRouter />,
    document.getElementById('app-root'),
)
