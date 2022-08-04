import React from "react";

class Thanks extends React.Component {

    click() {
        alert("Nice to meet you");
    }

    render()
    {
        return (
            <div>
        <h1>Thank You{this.props.age}</h1>
            <button onClick={() => this.click()}>HEllo</button>
            </div>
        )
    }
}

export default Thanks;