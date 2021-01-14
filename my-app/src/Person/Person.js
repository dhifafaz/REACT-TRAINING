import React from 'react'

//children include any elm between opening and closing tags (bisa apapun)
const person = (props) => { 
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old ! </p>
            <p>{props.children}</p>    
        </div>
    )
};

export default person;