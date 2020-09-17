import React, { Component } from 'react'

class Square extends Component{
  render(){
    let { index } = this.props
    return(
      <React.Fragment>
        <div id="square" onClick = { () => {this.props.handleChange(index)} }> 
        {this.props.box}
        </div>
      </React.Fragment>
    )
  }
}
export default Square
