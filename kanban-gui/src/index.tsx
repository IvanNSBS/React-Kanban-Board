import React from 'react'
import ReactDOM from 'react-dom'

import Card from '../../data/cards/card'

const card:Card = new Card("Example Card Name")

ReactDOM.render(
    <h1>
        Hello React22!
        <h2>
            Card Name: {card.name}
        </h2>
    </h1>,
    document.getElementById('app-root'),
)
