//Destruction of props and state

//Destructruing means to break down a Complex structure into Simpler parts.
//It can be used for assignments and declaration of variable & this is a feture of ES6

import React from 'react'

export default function Destruct({name,title}) {
  
    function clickMe(){
        alert('Hello')
    }
    // const {name,title} = props
  
    return (
    <div>
        {name} {title} <br />
        <button onClick={() => clickMe()}>change</button>

    </div>
  )
}
