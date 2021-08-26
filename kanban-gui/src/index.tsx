import React from 'react'
import ReactDOM from 'react-dom'
import Card from '../../data/cards/card'
import styled from 'styled-components'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

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

const RouteExample: React.FC = function(){
    return(
        <div>
            Route Example!
            <Link to={aboutPath}>About</Link>
        </div>
    );
}

const AppRouter: React.FC = function() {
    return(
        <React.StrictMode>
            <BrowserRouter>
                <Switch>
                    <Route path={homePath} component={RouteExample} exact/>
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
