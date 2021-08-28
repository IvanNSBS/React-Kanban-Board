import React from 'react'
import ReactDOM from 'react-dom'
import Card from '../../data/cards/card'
import styled from 'styled-components'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import HomeView from './views/HomeView';
import BackgroundStyle from './styles/GlobalBody.style'

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
            <BackgroundStyle bgCol="#2b2b29"/>
            <BrowserRouter>
                <Switch>
                    <Route path={homePath} component={HomeView} exact/>
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
