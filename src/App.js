import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state={

      //X starts
      turn: 'X',

      //initialize no winner
      gameEnded: false,

      winner: undefined,

      //initialize board
      board: Array(9).fill(''),
      totalMoves: 0

    }

  }

  clicked(event){

    //Only change empty cells
    if(this.state.board[event.target.dataset.square] === ''){
    this.state.board[event.target.dataset.square]=this.state.turn;
    event.target.innerText=this.state.turn;
    this.setState({

      //alternate between X and O
      turn: this.state.turn==='X' ? 'O' : 'X',

      //update the board
      board: this.state.board,

      totalMoves: this.state.totalMoves++
    })
}

var result= this.checkWinner();
  if(result === 'X'){
    this.setState({
      gameEnded: true,
      winner: 'X'
    });
    console.log('yup');
  }else if(result === 'O'){
    this.setState({
      gameEnded: true,
      winner: 'O'

  });
}



  }

  checkWinner(){

    //set of all possible winning moves
    var moves=[[0,3,5],[1,4,7], [2,5,8], [0,4,8], [2,4,6], [0,1,2], [3,4,5], [6,7,8]];
    var board=this.state.board;
    for (let i=0;i<moves.length; i++){
      if(board[moves[i][0]]===board[moves[i][1]] && board[moves[i][1]] === board[moves[i][2]]){
        return board[moves[i][0]];
      }
    }

  }


  render() {
    return (
      <div id="game">
        <div id="head">Play Tic Tac Toe vs AI
        </div>
        <div id="board" onClick={(e)=>this.clicked(e)}>
          <div className="square" data-square="0"> </div>
          <div className="square" data-square="1"> </div>
          <div className="square" data-square="2"> </div>
          <div className="square" data-square="3"> </div>
          <div className="square" data-square="4"> </div>
          <div className="square" data-square="5"> </div>
          <div className="square" data-square="6"> </div>
          <div className="square" data-square="7"> </div>
          <div className="square" data-square="8"> </div>



        </div>



      </div>
    );
  }
}

export default App;
