import React, { Component } from 'react';
import Card from './Card';

class Board extends Component {

    render() {
        const cards = [];
        this.props.cards.forEach((card, index) => {
            cards.push(<Card face={card.face} status={card.status} key={index} />);
        });
        return (
            <div className={"board w3-row"}>
                {cards}
            </div>
        )
    }
}

export default Board;