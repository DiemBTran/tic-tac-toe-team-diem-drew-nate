import React, { Component } from 'react'
import Square from './components/Square'
import Restart from './components/Restart'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squareArray: [...Array(9).fill(" ")],
      xIsNext: true,
      historyO: [],
      historyX: [],
      winner: null,
      winMessage: null
    }
  }

  handleChange = (index) => {
    this.marker(index)
    this.winChecker(index)
  }

  marker = (index) =>{
    let { squareArray, xIsNext, historyO, historyX, clickCounter} = this.state
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

  winChecker = (index) =>{
    let { historyX, historyO, winMessage, winner, squareArray } = this.state
    const winArrays = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ]
    let winningArray = winArrays.map(value => {
      //iterate through and check if either history includes the array
      const [a, b, c] = value
      if(historyX.includes(a) && historyX.includes(b) && historyX.includes(c)){
        let winner = "X"
        let winMessage = "X's Win"
        this.setState({ winner: winner})
        this.setState({ winMessage: winMessage})
      } else if(historyO.includes(a) && historyO.includes(b) && historyO.includes(c)){
        let winner = "O"
        let winMessage = "O's Win"
        this.setState({ winner: winner})
        this.setState({ winMessage: winMessage})
      } else if( winner === null && !squareArray.includes(" ")){
        let winMessage = "There's a draw"
        this.setState({ winMessage: winMessage})
      }
    })
  }

  // Restart page functionality
  restartButton = () =>{
    window.location.reload()
  }

  render(){
    let { squareArray, winMessage } = this.state
    let squares = squareArray.map((box, index) =>{
      return(
        <Square
          box = { box }
          index = { index }
          key = { index }
          handleChange = { this.handleChange }
        />
      )
    })
    return(
      <React.Fragment>
        <h1>Tic Tac Toe</h1>
        <div id= "winMessage"> { winMessage} </div>
        <div id="gameboard"> { squares }</div>
        <Restart
        restartButton = {this.restartButton}
        />
      </React.Fragment>
    )
  }
}
export default App
