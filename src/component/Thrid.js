import React, { Component } from 'react'

export default class Thrid extends Component {
    clickme(){
        alert("Hi Everyone")
    }
  render() {
    return (
      <div>
        {this.props.name} {this.props.title} <br/>
        <button onClick={()=>this.clickme()}>Touch me</button>
      </div>
    )
  }
}
