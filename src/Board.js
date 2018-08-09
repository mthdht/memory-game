import React, { Component } from 'react';
import Card from "./Card";

const colors = ["red", "pink", "purple", "blue", "teal", "green", "light-green", "lime", "amber", "orange", "blue-gray", "brown", "pale-red", "deep-purple", "indigo",];

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pairs: [],
            currentPair: [],
            cards: this.generateCards(6),
            colorNumber: 6,
            guesses: 0
        };

        this.handleCardClick = this.handleCardClick.bind(this);
        this.restart = this.restart.bind(this);
        this.handleLevelChange = this.handleLevelChange.bind(this);
    }

    shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    };

    generateCards(number) {
        const cards = [];
        const colorsArray = colors.slice(0, number);
        const mixColors = this.shuffle(colorsArray.concat(colorsArray));

        mixColors.forEach((color, index) => {
            cards.push({face: color, status: 'hidden', id: index});
        });

        return cards;
    };

    getStatus(index) {
        const {currentPair, pairs, cards} = this.state;

        if (currentPair.includes(cards[index]) || pairs.includes(cards[index])) {
            return "visible";
        } else return "hidden"
    }

    handleCardClick(index) {
        const {currentPair, cards, pairs, colorNumber} = this.state;

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
            currentPair.push(cards[index]);
            this.setState((prevState) => ({
                guesses: prevState.guesses + 1,
                currentPair
            }));

            if (currentPair[0].face === currentPair[1].face && currentPair[0].id !== currentPair[1].id) {
                this.setState({
                    pairs: [...pairs, ...currentPair],
                });
                setTimeout(() => {
                    if (this.state.pairs.length === cards.length) {
                        // send score
                        const difficulty = colorNumber === 6 ? 1 : colorNumber === 9 ? 2 : colorNumber === 12 ? 3 : 4;
                        const scoreFinal = colorNumber * colorNumber - this.state.guesses * difficulty;

                        // this use my portfolio api: see matthieu-dehondt.fr

                        /*axios.post('/jeu/memory/add', {
                            score: scoreFinal > 0 ? scoreFinal : 0,
                            guesses: this.state.guesses,
                            difficulty: colorNumber === 6 ? "facile" : colorNumber === 9 ? "moyen" : colorNumber === 12 ? "difficile" : "expert"
                        }).then(function (response) {
                            return (response.data);
                        }).catch(function (error) {
                            console.log(error);
                        });*/

                        alert("Vous avez gagné en " + this.state.guesses + " essais, votre score est de " + scoreFinal);
                    }
                }, 1000);
            }

            setTimeout(() => this.setState({currentPair: []}), 1000);
        }

    };

    restart() {
        const colorNumber = this.state.colorNumber;
        this.setState({
            cards: this.generateCards(colorNumber),
            pairs: [],
            currentPair: [],
            guesses: 0
        });
    }

    handleLevelChange(event) {
        const currentLevel = this.state.colorNumber;
        const level = currentLevel === 6 ? 9 : currentLevel === 9 ? 12 : currentLevel === 12 ? 15 : 6;
        this.setState({
            colorNumber: level
        });
        setTimeout(() => this.restart(), 500);
    }

    render() {
        const cards = [];
        const colorNumber = this.state.colorNumber;
        const difficulty = colorNumber === 6 ? "facile" : colorNumber === 9 ? "moyen" : colorNumber === 12 ? "difficile" : "expert";
        this.state.cards.forEach((card) => {
            cards.push(<Card face={card.face} status={this.getStatus(card.id)} index={card.id} key={card.id} handleCardClick={this.handleCardClick} difficulty={difficulty}/>);
        });

        return (
            <div className={"board"}>
                <div className="controls w3-container w3-padding ct-blue">
                    <div className="level w3-left w3-padding">
                        <button onClick={this.handleLevelChange} className={"level w3-button ct-pink ct-hover-red w3-round-xxlarge w3-large"}><b>{difficulty}</b></button>
                    </div>
                    <div className="w3-padding w3-right">
                        <button onClick={this.restart} className={"w3-button ct-pink ct-hover-red w3-round-xxlarge w3-large"}><b>Restart</b></button>
                    </div>

                    <p className={"guesses w3-center"}><b>Nombre d'essais: { this.state.guesses }</b></p>
                </div>
                <div className="cards w3-margin-top">
                    {cards}
                </div>


            </div>
        )
    }
}

export default Board;