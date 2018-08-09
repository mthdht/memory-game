import React, { Component } from 'react';

class Header extends Component {

    open() {
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("myOverlay").style.display = "block";
    }

    close() {
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("myOverlay").style.display = "none";
    }

    render() {
        return (
            <header>
                <nav className="w3-bar ct-dark-blue">
                    <div className="w3-sidebar sidebar w3-bar-block w3-border-right w3-text-white ct-dark-blue" id="mySidebar">
                        <button onClick={this.close}
                                className="w3-bar-item w3-button w3-large w3-text-white">Close &times;</button>
                        <a href={"https://fr.wikipedia.org/wiki/Le_Pendu_(jeu)"} className="w3-bar-item w3-button">Règles</a>
                    </div>

                    <div className="w3-content w3-center nav">
                        <a className="w3-bar-item w3-left w3-hide-large w3-hide-medium ct-hover-blue"
                           onClick={this.open}>
                            <img src="/img/Memory-white.png" alt="logo MD" width="60"
                                 className="w3-image"/>
                        </a>

                        <a href="" className="w3-bar-item w3-large coda ct-hover-blue">
                            <img src="/img/Memory-white.png" alt="logo MD" width="80"
                                 className="w3-image w3-hide-small"/>
                                <b className="w3-hide-medium w3-hide-large">Matthieu Dehondt <br/> Games</b>
                        </a>

                        <div className="w3-right w3-padding-16 w3-hide-small">
                            <a href={"https://fr.wikipedia.org/wiki/Le_Pendu_(jeu)"} className="w3-bar-item w3-large ct-dark-blue ct-hover-blue"><b>Règles</b></a>
                        </div>
                    </div>
                </nav>
                <div className="w3-overlay w3-animate-opacity pointer" onClick={this.close} id="myOverlay"></div>
            </header>
        );
    }
}

export default Header;
