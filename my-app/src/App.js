import './App.css';
import React, { Component } from 'react';
//import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { id :'sdjs', name : 'Dhifaf', age : '19'},
      { id :'aaejf',name : 'Stephanie', age : '18'},
      { id :'dadf', name : 'Poop', age : '20'}
    ],
    otherState : 'some bla bla',
    showData: false
  } // state manage from inside component

  delData = (personIndex) => {
    //a good practice is to copy the full array with slice or this next gen js (spread (...))
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice (personIndex,1);
    this.setState({persons : persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(targetId => {
      return targetId.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    //an alternative
    //const person = Object.assign({},this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons : persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showData;
    this.setState({showData: !doesShow });
  }

  //always  use bind coz its more efficient
  render (){
    // inline style using style as the name of the object
    const style = {
      backgroundColor : 'black',
      color : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer',
      
    };

    let persons = null ;

    if (this.state.showData) {
      persons = (
        <div>
            {this.state.persons.map((person,index) => {
              return <Person
                click = {() => this.delData(index)} 
                name = {person.name} 
                age = {person.age}
                key ={person.id} 
                changed={(event) => this.nameChangedHandler(event, person.id)}/>  
            })}
          </div>
      );
      
    }
     
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes will be ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes will be ['red','bold']
    }



    return (
      
      <div className="App">
        <h1>Hai, My name is Dhifaf. I'm the maker of the app!</h1>
        <p className = { classes.join(' ') }>This is actually work guyss!!</p>
        <button 
          style = {style}
          onClick={this.togglePersonHandler}>Toggle Data</button>
        {persons}
      </div>
      
    );
    //equivalent dengan yang bawah dengan catatan kalau komponen sedikit 
    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hai, I\'m the maker of the app!!!'));
  }
}

export default App;
