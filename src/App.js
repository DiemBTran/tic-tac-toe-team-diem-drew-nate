import React, { Component } from 'react'
import Square from './components/Square'
import Restart from './components/Restart'
import Counter from './components/Counter'


import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squareArray: [...Array(9).fill(" ")],
      xIsNext: true,
      historyO: [],
      historyX: [],
      clickCounter: 9,
      winner: null
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
        squareArray[index] = "𝐗"
        xIsNext = false
        historyX.push(index)
        console.log("This is X history", historyX);
      } else {
        squareArray[index] = "𝐎"
        xIsNext = true
        historyO.push(index)
        console.log("This is O history", historyO);
      }
    }
    clickCounter -= 1
    this.setState({clickCounter: clickCounter})
      console.log(clickCounter);
    this.setState({ squareArray: squareArray})
    this.setState({ xIsNext: xIsNext})
  }
  
  winChecker = (index) =>{
    let { historyX, historyO, clickCounter } = this.state
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
        let winner = true
        this.setState({ winner: winner})
        setTimeout(function () {
          alert("X's Win!!")
       }, 350)
      } else if(historyO.includes(a) && historyO.includes(b) && historyO.includes(c)){
        let winner = true
        this.setState({ winner: winner})
        setTimeout(function () {
          alert("O's Win!!")
       }, 350)
      }
    })
  }

  drawChecker = () => {
    let { clickCounter } = this.state
    if(clickCounter === 0){
      
    }
  }


  // Restart page functionality
  restartButton = () =>{
    window.location.reload()
  }

  render(){
    let { squareArray } = this.state
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
    <div id="gameboard"> { squares }</div>
    <Counter
    counter = { this.state.clickCounter }
    />
    <Restart
    restartButton = {this.restartButton}
    />
      </React.Fragment>
    )
  }
}
export default App
