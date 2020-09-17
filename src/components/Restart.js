import React, { Component } from 'react'

class Restart extends Component{
  render(){
    return(
      <div id = "restart">
      <button onClick= {this.props.restartButton}>Restart Game</button>
      </div>
    )
  }
}
export default Restart
