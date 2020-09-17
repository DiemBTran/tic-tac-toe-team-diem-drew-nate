import React, { Component } from 'react'

class Counter extends Component{
  render(){
    let {counter} = this.props
    return(
      <div id="counter">
      <h3>Turns remaining: {counter}</h3>
      </div>
    )
  }
}
export default Counter
