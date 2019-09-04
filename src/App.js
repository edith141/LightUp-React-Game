import React, { Component } from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  
  render() {
    return (
      <div>
        <div>
          <div className = "title">
            <h4 className="neon">Light</h4>
            <h4 className="flux">UP!</h4>
          </div>  
        </div>
        <div className='App'>
          <Board/>
        </div>
      </div>
    );
  }
}

export default App;
