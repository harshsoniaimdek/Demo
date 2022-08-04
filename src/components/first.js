import React, { Component } from 'react';
//State is a Javascript object that stores component's dynamic data and determines component behaviour.
class First extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "super",
            // age:parseInt(props.age)
            //age:Number(props.age) // This line works same as the above line
            
        }
        this.changeState=this.changeState.bind(this)
    }
    changeState() {
        // this.setState({name: "X - Factor",age:this.state.age + 1})
        // console.log ("Change state");   
        this.setState({name: "Mario"})
        console.log(this)
    }
    render() {
        return (
       <div>
        {/* {this.props.name} {this.props.age} <br />
        {this.state.name}{this.state.age}<br /> */}
        {/* <button onClick={()=> this.changeState()}>change</button> */}
        {this.state.name}
        <button onClick={this.changeState.bind()}>Super</button>

       </div>    
        );
    }
}

export default First;