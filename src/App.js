import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squareArray: [...Array(9).fill(" ")],
      xIsNext: true,
      historyO: [],
      historyX: []
    }
  }

  marker = (index) =>{
    let { squareArray, xIsNext, historyO, historyX } = this.state
    if (squareArray[index] === " "){
      if (xIsNext === true) {
        squareArray[index] = "X"
        xIsNext = false
        historyX.push(index)
        console.log("This is X history", historyX);
      } else {
        squareArray[index] = "O"
        xIsNext = true
        historyO.push(index)
        console.log("This is O history", historyO);
      }
    }
    this.setState({ squareArray: squareArray})
    this.setState({ xIsNext: xIsNext})
  }

  render(){
    let { squareArray } = this.state
    let squares = squareArray.map((box, index) =>{
      return(
        <Square 
          box = { box }
          index = { index }
          key = { index }
          marker = { this.marker }
        />
      )
    })
    return(
      <React.Fragment>
        <h1>Tic Tac Toe</h1>
    <div id="gameboard"> { squares }</div>
      </React.Fragment>
    )
  }
}
export default App
