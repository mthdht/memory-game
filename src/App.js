import React, { Component } from 'react';
import './App.css';
import Board from './Board'

const colors = ["red", "blue", "orange", "green", "brown", "purple", "yellow", "blue-gray", "teal"];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorNumber: 6
        }
    }

    shuffle = a => {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    };

    render() {
        const colorsArray = colors.slice(0, this.state.colorNumber);
        return (
            <div className="App">
                <Board colors={this.shuffle(colorsArray.concat(colorsArray))} />
            </div>
        );
    }
}

export default App;
