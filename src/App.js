import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state={

      winner: undefined,
      color: Array(9).fill(''),

    }
    this.gameState={

      //X starts
      turn: 'X',

      gameLocked: false,

      //initialize no winner
      gameEnded: false,

      //initialize board
      board: Array(9).fill(''),
      totalMoves: 0
    }

  }

  clicked(box){

  if(this.gameState.gameEnded==true||this.gameState.gameLocked) return;
    if(this.gameState.board[box.dataset.square] === ''){
    this.gameState.board[box.dataset.square]=this.gameState.turn;


      if(this.gameState.turn==='X'){

      this.state.color[box.dataset.square]='blue';

      box.innerText=this.gameState.turn;
      this.forceUpdate()

      }else{
        this.state.color[box.dataset.square]='red';

        box.innerText=this.gameState.turn;
        this.forceUpdate()
      }



      //alternate between X and O
       this.gameState.turn=this.gameState.turn==='X' ? 'O' : 'X';


      this.gameState.totalMoves++;




}

var result= this.checkWinner();
if(result === 'X'){

    this.gameState.gameEnded= true;

      this.setState({
      winner: 'X',
      winnerLine: 'Match won by X'

    });

}else if(result === 'O'){

  this.gameState.gameEnded= true;

    this.setState({
    winner: 'O',
    winnerLine: 'Match won by O'

});
}else if(result === 'draw'){

  this.gameState.gameEnded= true;

    this.setState({
  winner: 'Draw',
  winnerLine: 'Match is Drawn'

});
}

//Computer (O) chooses random cell that is empty
  if(this.gameState.turn === 'O' && !this.gameState.gameEnded){
    this.gameState.gameLocked=true;
  setTimeout(()=>{
    do{

      var random = Math.floor(Math.random()*9);

    }while(this.gameState.board[random]!= '');
    this.gameState.gameLocked=false;
    this.clicked(document.querySelectorAll('.square')[random])


  },1000)
  }


  }

  checkWinner(){


    //set of all possible winning moves
    var moves=[[0,3,6],[1,4,7], [2,5,8], [0,4,8], [2,4,6], [0,1,2], [3,4,5], [6,7,8]];
    var board=this.gameState.board;
    for (let i=0;i<moves.length; i++){
      if(board[moves[i][0]]===board[moves[i][1]] && board[moves[i][1]] === board[moves[i][2]])
        return board[moves[i][0]];

      }

       if(this.gameState.totalMoves===9){

        return 'draw';
    }
  }

  render() {
    return (
      <div id="game">
      <div id="status">{this.state.winnerLine}</div>
        <div id="head">Play Tic Tac Toe vs AI
        </div>
        <div id="board" onClick={(e)=>this.clicked(e.target)}>
          <div className="square" data-square="0" style={{color: this.state.color[0]}}> </div>
          <div className="square" data-square="1" style={{color: this.state.color[1]}}> </div>
          <div className="square" data-square="2" style={{color: this.state.color[2]}}> </div>
          <div className="square" data-square="3" style={{color: this.state.color[3]}}> </div>
          <div className="square" data-square="4" style={{color: this.state.color[4]}}> </div>
          <div className="square" data-square="5" style={{color: this.state.color[5]}}> </div>
          <div className="square" data-square="6" style={{color: this.state.color[6]}}> </div>
          <div className="square" data-square="7" style={{color: this.state.color[7]}}> </div>
          <div className="square" data-square="8" style={{color: this.state.color[8]}}> </div>



        </div>



      </div>
    );
  }
}

export default App;
