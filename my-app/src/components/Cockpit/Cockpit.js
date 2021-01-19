import React from 'react';
import classes from './Cockpit.module.css'
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = classes.Button;
   
    if (props.showData){
        btnClass = [classes.Button,classes.Red].join(' ') ;
    }
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes will be ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes will be ['red','bold']
    }


    return (
        <Aux > 
            <h1>{props.appTitle}</h1>
            <p className = { assignedClasses.join(' ') }>This is actually work guyss!!</p>
            <button 
                className = {btnClass}
                onClick={props.clicked}>Toggle Data</button>
        </Aux>
        
    );

};

export default cockpit;