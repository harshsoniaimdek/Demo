import React, { Component } from 'react';

class Toggle extends Component {
    constructor(){
        super()
            this.state = {
                    show:false
            
        }
    }

    toggle(action) {
        console.log(action)
        if(action=="show"){
            this.setState({show:true})
        }
        else if(action=="hide"){
            this.setState({show:false})
        }
        else {
            this.setState({show:!this.state.show})
        }
    }

    static getDerivedStatefromprops(props,state) {
        console.log('Mounting ')
    }

    render() {
        return (
                <div>
                    {this.state.show && <h1>Show, Hide, toggle</h1>}
                    <button onClick={()=>this.toggle("show")}>Show</button><button onClick={() => this.toggle("hide")}>Hide</button><button onClick={()=> this.toggle("toggle")}>Toggle</button>
                </div>       
        );
    }
}

export default Toggle;