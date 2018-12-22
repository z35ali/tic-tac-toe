import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  clicked(event){
    console.log(event.target);

  }
  render() {
    return (
      <div id="game">
        <div id="head">
          Play Tic Tac Toe vs AI
        </div>
        <div id="board" onClick={(e)=>this.clicked(e)}>

          <div className="square"> </div>
            <div className="square"> </div>
              <div className="square"> </div>
                <div className="square"> </div>
                  <div className="square"> </div>
                    <div className="square"> </div>
                      <div className="square"> </div>
                        <div className="square"> </div>
                          <div className="square"> </div>



        </div>



      </div>
    );
  }
}

export default App;
