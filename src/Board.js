import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';
import './neonBtn.css'

//NEW WITH 100% SOLVABILITY

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function flipRCellsAround(board, nrows, ncols, coord) {
  let [i, j] = coord.split("_").map(Number);
  // console.log(`flippin' ${coord}`);

    // if this coord is actually on board, flip it

  function flip (i,j) {
    if (j >= 0 && j < ncols && i >= 0 && i < nrows) {
      // since it a bool
      board[i][j] = !board[i][j];
      }
    }
  
  flip(i,j);
  flip(i, j-1);
  flip(i, j+1);
  flip(i-1, j);
  flip(i+1, j);
  
  return board;
}

class Board extends Component {

  static defaultProps = {
    nrows: 2,
    ncols: 2,
    chanceLightStartsOn: 0.2
  };

  constructor(props) {
    super(props);
    // TODO: set initial state
    this.state = {
      hasWon: false,
      nrows: this.props.nrows,
      ncols: this.props.ncols,
      board: this.createBoard(this.props.nrows, this.props.ncols)
    };
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  setRcEasy = (x,y) => {
    this.setState({
      hasWon: false,
      nrows: 2,
      ncols: 2,
      board: this.createBoard(2,2)
    });
    
  }

  setRcHard = (x,y) => {
    this.setState({
      hasWon: false,
      nrows: 5,
      ncols: 5,
      board: this.createBoard(5,5)
    });
    
  }

  createBoard(x,y) {
    let board = [];
    // TODO: create array-of-arrays of true/false values
    for (let i=0; i< x; i++) {
      let row = [];
      for (let j=0; j< y; j++) {
        row.push(false);
        console.log(Math.random() < this.props.chanceLightStartsOn);
      }
      board.push(row);
    }

    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        if (Math.random() < this.props.chanceLightStartsOn) {
          board = flipRCellsAround(board, x, y, `${i}_${j}`);
         }
      }
    }
    console.log('new voard');
    return board
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let ncols = this.state.ncols;
    let nrows = this.state.nrows;
    let board = this.state.board;
    let [i, j] = coord.split("_").map(Number);
    // console.log(`flippin' ${coord}`);

      // if this coord is actually on board, flip it

    function flip (i,j) {
      if (j >= 0 && j < ncols && i >= 0 && i < nrows) {
        // since it a bool
        board[i][j] = !board[i][j];
        }
      }
    
    flip(i,j);
    flip(i, j-1);
    flip(i, j+1);
    flip(i-1, j);
    flip(i+1, j);
      console.log('wtf!');

    let hasWon = board.every(row =>  row.every( col => !col));
    console.log(hasWon);
    this.setState({board: board, hasWon: hasWon});
  }


  render() {

    if (this.state.hasWon) {
      return (
        <h3 className = "Winner">WINNER!</h3>
      );
    }

    let htmlBoard = [];

    for (let i=0; i<this.state.nrows; i++) {
      let row = [];
      for( let j=0; j< this.state.ncols; j++) {
        let crd = `${i}_${j}`;
        console.log(`${i}_${j}`)
        row.push(<Cell key={crd} isLit={this.state.board[i][j]} 
        flipCellsAround = {() => this.flipCellsAround(crd)}/>);
      }
      htmlBoard.push(<tr key = {i}>{row}</tr>);
    }

    return(
      <div>
        <div>
          <table className='Board'>
            <tbody>
              {htmlBoard}
            </tbody>
          </table>
          <button className = "neonBtn-easy" onClick={this.setRcEasy}> Easy </button>
          <button className = "neonBtn-hrd" onClick={this.setRcHard}> Hard </button>
          <div>
          <h5 className = "Rules">Rules:<br></br>Light up all the cubes!<br></br>Clicking a cube toggles it and the adjacent neighbours.</h5>
        </div>
        </div>
        
      </div>
    );
  
  }
}


export default Board;
