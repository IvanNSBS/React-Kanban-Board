import React from 'react'
import ReactDOM from 'react-dom'
import Card from '../../data/cards/card'
import styled from 'styled-components'


const card:Card = new Card("Example Card Name")
const RedHeader = styled.h2`
    background-color: red;
    color: whitesmoke;
`

const CardName: React.FC<{text:string}> = (props) => {
    return(
      <h2>Card Name: {props.text}</h2>  
    );
}


ReactDOM.render(
    <h1>
        <CardName text={card.name}></CardName>
    </h1>,
    document.getElementById('app-root'),
)
