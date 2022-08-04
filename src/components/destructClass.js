import React, { Component } from 'react';

class DestructClass extends Component {
    constructor(props){
        super(props)
            this.state = props
        
    }
    clickMe() {
        alert("HEllo To the new World!!!")
    }
    render() {
        const {name,age}=this.state
        return (
            <div>
                {name} {age} <br />
                <button onClick={() => this.clickMe()} >Click Here </button>
            </div>
        );
    }
}

export default DestructClass;