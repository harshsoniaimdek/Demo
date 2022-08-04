import React, { Component } from 'react'

export default class MoutingA extends Component {
    constructor(props){
        super(props)
        this.state={
            // name: props.name
            name : ''
        }
        console.log("MountingA Construtor")
    }
    static getDerivedStateFromProps(props,state) {
        console.log("MountingA a getDerivedStateFromProps")
        return {...state, name:props.name}
    }
    componentDidMount(){
        console.log("MountingA A ComponentDidMount")
    }
  render() {
    console.log("MountingA a render",this.state.name)
    return (
      <div>MoutingA</div>
    )
  }
}
