import React, { Component } from 'react'

export default class Fifth extends Component {
constructor(props){
  super(props)
  this.state={ 
    name: 'Alok', 
    title: 21
  }
}

changeState(){
  this.setState({name:"Kittu",title:this.state.title+1})
}
  render() {
    return (
      <div>
        {this.state.name} {this.state.title}<br/>
        <button onClick={()=>this.changeState()}>change state </button>
      </div>
    )
  }
}

