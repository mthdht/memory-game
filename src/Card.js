import React, { Component } from 'react';

class Card extends Component {

    handleClick(index) {
        if (this.props.status !== "visible") {
            this.props.handleCardClick(index);
        }
    }

    render() {
        return (
            <div className={"card-container " + this.props.difficulty} onClick={() => this.handleClick(this.props.index)}>
                <div className={"card w3-round w3-" +
                (this.props.status === 'hidden' ? 'gray' : this.props.face)}>
                    <img src="/img/Memory-white.png" alt="logo memory" className="w3-image"/>
                </div>
            </div>
        );
    }
}

export default Card;