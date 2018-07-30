import React, { Component } from 'react';
import Card from "./Card";

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: this.generateCards()
        };
    }

    generateCards() {
        const cards = [];
        this.props.colors.forEach((color, index) => {
            cards.push(<Card face={color} status={'hidden'} key={index}/>)
        });

        return cards;
    };

    render() {
        return (
            <div className={"board w3-row"}>
                {this.state.cards}
            </div>
        )
    }
}

export default Board;