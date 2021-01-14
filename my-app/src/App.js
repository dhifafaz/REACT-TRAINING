import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { name : 'Dhifaf', age : '19'},
      { name : 'Stephanie', age : '18'},
      { name : 'Poop', age : '20'}
    ],
    otherState : 'some bla bla'
  } // state manage from inside component

  switchNameHandler = (newName) => {
    // console.log('was clicked!');
    // DONT DO THIS this.state.persons[0].name = 'Dhifaf Ahtiyah Zhabiyan';
    this.setState({
      persons : [
        { name : newName, age : '19'},
        { name : 'Stephanie', age : '18'},
        { name : 'Poop', age : '18'}
      ]
    })
  }
  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        { name : event.target.value, age : '19'},
        { name : 'Stephanie', age : '98'},
        { name : 'Poop', age : '108'}
      ]
    })
  }
  //always  use bind coz its more efficient
  render (){
    // inline style using style as the name of the object
    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    };

    return (
      <div className="App">
        <h1>Hai, My name is Dhifaf. I'm the maker of the app!</h1>
        <p>This is actually work guyss!!</p>
        <button 
          style = {style}
          onClick={() => this.switchNameHandler('Dhifaf Athiyah Zhabiyan !!!')}>Switch Name</button>
        <Person 
          name ={this.state.persons[0].name} 
          age = {this.state.persons[0].age} 
          click={this.switchNameHandler.bind(this, 'Dhifaf!!!')}
          changed={this.nameChangedHandler}
          > My Hobbies: racing, batling</Person>

        <Person 
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age} />

        <Person 
          name = {this.state.persons[2].name} 
          age = {this.state.persons[2].age} />
      </div>
    );
    //equivalent dengan yang bawah dengan catatan kalau komponen sedikit 
    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hai, I\'m the maker of the app!!!'));
  }
}

export default App;
