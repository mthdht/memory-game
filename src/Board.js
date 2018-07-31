import React, { Component } from 'react';
import Card from "./Card";

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pairs: [],
            currentPair: []
        };
        this.cards = this.generateCards()
    }

    generateCards() {
        const cards = [];

        this.props.colors.forEach((color, index) => {
            cards.push({face: color, status: 'hidden', id: index});
        });

        return cards;
    };

    getStatus(index) {
        const {currentPair, pairs} = this.state;

        if (currentPair.includes(this.cards[index]) || pairs.includes(this.cards[index])) {
            return "visible";
        } else return "hidden"
    }

    handleCardClick = (index) => {
        const {currentPair} = this.state;

        if (currentPair.length === 2) {
            return;
        }

        if (currentPair.length === 0) {
            this.setState({
                currentPair: [this.cards[index]]
            });
            return;
        }

        if (currentPair.length === 1) {
            this.handlePairAttempt(index);
        }

    };

    handlePairAttempt(index) {
        const { currentPair, pairs} = this.state;
        currentPair.push(this.cards[index]);
        this.setState({currentPair});

        if (currentPair[0].face === currentPair[1].face && currentPair[0].id !== currentPair[1].id) {
            this.setState({
                pairs: [...pairs, ...currentPair],
            });
            setTimeout(() => {
                if (this.state.pairs.length === this.cards.length) {
                    alert('vous avez gagné');
                }
            }, 1000);

        }

        setTimeout(() => this.setState({currentPair: []}), 1000);

    }

    render() {
        const cards = [];
        this.cards.forEach((card) => {
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