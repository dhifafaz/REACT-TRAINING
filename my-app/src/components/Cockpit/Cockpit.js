import React from 'react';
import classes from './Cockpit.module.css'

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
   
    if (props.showData){
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes will be ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes will be ['red','bold']
    }


    return (
        <div className = {classes.Cockpit}> 
            <h1>Hai, My name is Dhifaf. I'm the maker of the app!</h1>
            <p className = { assignedClasses.join(' ') }>This is actually work guyss!!</p>
            <button 
                className = {btnClass}
                onClick={props.clicked}>Toggle Data</button>
        </div>
        
    );

};

export default cockpit;