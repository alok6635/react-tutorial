import React, { Component } from 'react'

export default class First extends Component {
  render() {
    return (
      <div>
        {this.props.name}   {this.props.title}
      </div>
    )
  }
}

