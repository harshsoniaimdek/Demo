import React, { Component } from 'react'

export default class MoutingB extends Component {
    constructor(props){
        super(props)
        this.state={
            // name: props.name
            name : ''
        }
        console.log("MountingB Construtor")
    }
    static getDerivedStateFromProps(props,state) {
        console.log("MountingB a getDerivedStateFromProps")
        return {...state, name:props.name}
    }
    componentDidMount(){
        console.log("MountingB A ComponentDidMount")
    }
  render() {
    console.log("MountingB a render",this.state.name)
    return (
      <div>MoutingB</div>
    )
  }
}
