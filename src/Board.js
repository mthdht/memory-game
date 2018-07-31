import React, { Component } from 'react';
import Card from "./Card";

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: this.generateCards(),
            pairs: [],
            currentPair: []
        };
    }

    generateCards() {
        const cards = [];

        this.props.colors.forEach((color, index) => {
            cards.push({face: color, status: 'hidden', id: index});
        });

        return cards;
    };

    getStatus(index) {
        const {currentPair, pairs,cards} = this.state;

        if (currentPair.includes(cards[index]) || pairs.includes(cards[index])) {
            return "visible";
        } else return "hidden"
    }

    handleCardClick = (index) => {
        const {cards, currentPair} = this.state;

        if (currentPair.length === 2) {
            return;
        }

        if (currentPair.length === 0) {
            this.setState({
                currentPair: [cards[index]]
            });
            return;
        }

        if (currentPair.length === 1) {
            this.handlePairAttempt(index);
        }

    };

    handlePairAttempt(index) {
        const {cards, currentPair, pairs} = this.state;
        currentPair.push(cards[index]);
        this.setState({currentPair});

        if (currentPair[0].face === currentPair[1].face && currentPair[0].id !== currentPair[1].id) {
            this.setState({
                pairs: [...pairs, ...currentPair],
                currentPair: []
            });
        } else {
            setTimeout(() => this.setState({cards, currentPair: []}), 1000);
        }
    }

    render() {
        const cards = [];
        this.state.cards.forEach((card) => {
            cards.push(<Card face={card.face} status={this.getStatus(card.id)} index={card.id} key={card.id} handleCardClick={this.handleCardClick}/>);
        });

        return (
            <div className={"board w3-row"}>
                {cards}
            </div>
        )
    }
}

export default Board;