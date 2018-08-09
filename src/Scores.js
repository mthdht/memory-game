import React, { Component } from 'react';

class Scores extends Component {

    close() {
        document.getElementById('scores-modal').style.display='none';
    }

    render() {
        const tablerow = this.props.scores.map((score) =>
            <tr key={score.id}>
                <td>{ score.difficulty }</td>
                <td>{ score.score }</td>
                <td>{ score.guesses }</td>
                <td>{ score.created_at }</td>
            </tr>
        );

        return (
            <div id="scores-modal" className="w3-modal">
                <div className="w3-modal-content w3-padding-large">
                    <div className="w3-container">
                        <span onClick={this.close}
                              className="w3-button w3-display-topright">&times;</span>

                        <h3 className={"w3-center"}>Tes Scores</h3>
                        <table className={"w3-table w3-striped w3-hoverable"}>
                            <thead>
                                <tr>
                                    <th>Difficulté</th>
                                    <th>Score</th>
                                    <th>Nombre d'essais</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                { tablerow }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Scores;