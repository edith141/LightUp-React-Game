import React, { Component } from "react";
import Cell from "./Cell";
import './Board.css';
import './neonBtn.css'

//OLDy WORKING 

class Board extends Component {

  static defaultProps = {
    noOfRows: 2,
    noOfCols: 2,
    chanceLightStartsOn: 0.2
  };

  constructor(props) {
    super(props);
    // TODO: set initial state
    this.state = {
      won: false,
      noOfRows: this.props.noOfRows,
      noOfCols: this.props.noOfCols,
      board: this.createBoard(this.props.noOfRows, this.props.noOfCols)
    };
  }

  /** create a board noOfRows high/noOfCols wide, each cube randomly lit or unlit */

  setRcEasy = (x, y) => {
    this.setState({
      won: false,
      noOfRows: 2,
      noOfCols: 2,
      board: this.createBoard(2, 2)
    });

  }

  setRcHard = (x, y) => {
    this.setState({
      won: false,
      noOfRows: 5,
      noOfCols: 5,
      board: this.createBoard(5, 5)
    });

  }

  createBoard(x, y) {
    let board = [];
 //array of T/F 
    for (let i = 0; i < x; i++) {
      let row = [];
      for (let j = 0; j < y; j++) {
        row.push(Math.random() < this.props.chanceLightStartsOn);
        console.log(Math.random() < this.props.chanceLightStartsOn);
      }
      board.push(row);
    }
    console.log('new voard');

    return board
  }

  /** handle changing a cell: update board & determine if winner */

  flipCubes(coord) {
    let noOfCols = this.state.noOfCols;
    let noOfRows = this.state.noOfRows;
    let board = this.state.board;
    let [i, j] = coord.split("_").map(Number);
    // console.log(`flippin' ${coord}`);

    // if the coordinate is on the board, toggle it!

    function flip(i, j) {
      if (j >= 0 && j < noOfCols && i >= 0 && i < noOfRows) {
        // since it a bool
        board[i][j] = !board[i][j];
      }
    }

    flip(i, j);
    flip(i, j - 1);
    flip(i, j + 1);
    flip(i - 1, j);
    flip(i + 1, j);
    console.log('wtf!');

    let won = board.every(row => row.every(col => !col));
    console.log(won);
    this.setState({ board: board, won: won });
  }


  render() {

    if (this.state.won) {
      return (
        <h3 className="Winner">YOU WIN!</h3>
      );
    }

    let htmlBoard = [];

    for (let i = 0; i < this.state.noOfRows; i++) {
      let row = [];
      for (let j = 0; j < this.state.noOfCols; j++) {
        let crd = `${i}_${j}`;
        // console.log(`${i}_${j}`)
        row.push(<Cell key={crd} isLit={this.state.board[i][j]}
          flipCubes={() => this.flipCubes(crd)} />);
      }
      htmlBoard.push(<tr key={i}>{row}</tr>);
    }

    return (
      <div>
        <div>
          <table className='Board'>
            <tbody>
              {htmlBoard}
            </tbody>
          </table>
          <button className="neonBtn-easy" onClick={this.setRcEasy}> Easy </button>
          <button className="neonBtn-hrd" onClick={this.setRcHard}> Hard </button>
          <div>
            <h5 className="Rules">
              Rules:<br></br>
              Light up all the cubes!<br></br>
              Clicking a cube toggles it and the adjacent neighbours.</h5>
          </div>
        </div>
      </div>
    );
  }
}


export default Board;

