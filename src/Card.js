import React, { Component } from 'react';

class Card extends Component {

    render() {
        return (
            <div className="w3-col m2 w3-padding-large">
                <div className={"card w3-round w3-" +
                (this.props.status === 'hidden' ? 'gray' : this.props.face)}></div>
            </div>
        );
    }
}

export default Card;