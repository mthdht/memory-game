import React, { Component } from 'react';

class Ranking extends Component {

    close() {
        document.getElementById('ranking-modal').style.display='none';
    }

    render() {
        const tablerow = this.props.scores.map((score) =>
            <tr key={score.id}>
                <td>{ score.user.name }</td>
                <td>{ score.difficulty }</td>
                <td>{ score.score }</td>
                <td>{ score.guesses }</td>
                <td>{ score.created_at.split(' ')[0] }</td>
            </tr>
        );

        return (
            <div id="ranking-modal" className="w3-modal">
                <div className="w3-modal-content">
                    <div className="w3-container">
                        <span onClick={this.close}
                              className="w3-button w3-display-topright">&times;</span>

                        <h3 className={"w3-center"}>Classement des meilleurs scores</h3>
                        <table className={"w3-table w3-striped w3-hoverable"}>
                            <thead>
                            <tr>
                                <th>Nom</th>
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

export default Ranking;