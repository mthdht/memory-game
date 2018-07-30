import React, { Component } from 'react';
import './App.css';
import Board from './Board'

const CARDS = [
    {face: 'red', status: 'hidden'},
    {face: 'red', status: 'hidden'},
    {face: 'blue', status: 'hidden'},
    {face: 'blue', status: 'hidden'},
    {face: 'orange', status: 'hidden'},
    {face: 'orange', status: 'hidden'},
    {face: 'green', status: 'hidden'},
    {face: 'green', status: 'hidden'},
    {face: 'brown', status: 'hidden'},
    {face: 'brown', status: 'hidden'},
    {face: 'purple', status: 'hidden'},
    {face: 'purple', status: 'hidden'},
    {face: 'yellow', status: 'hidden'},
    {face: 'yellow', status: 'hidden'},
    {face: 'blue-gray', status: 'hidden'},
    {face: 'blue-gray', status: 'hidden'},
    {face: 'teal', status: 'hidden'},
    {face: 'teal', status: 'hidden'},
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board cards={CARDS}/>
      </div>
    );
  }
}

export default App;
