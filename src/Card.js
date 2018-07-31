import React, { Component } from 'react';

class Card extends Component {

    handleClick(index) {
        if (this.props.status !== "visible") {
            this.props.handleCardClick(index);
        } else console.log("already chosen");
    }

    render() {
        return (
            <div className="w3-col m2 w3-padding-large" onClick={() => this.handleClick(this.props.index)}>
                <div className={"card w3-round w3-" +
                (this.props.status === 'hidden' ? 'gray' : this.props.face)}></div>
            </div>
        );
    }
}

export default Card;