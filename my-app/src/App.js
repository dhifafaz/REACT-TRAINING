import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {
  render (){
    return (
      <div className="App">
        <h1>Hai, My name is Dhifaf. I'm the maker of the app!</h1>
        <p>This is actually work guyss!!</p>
        <button>Switch Name</button>
      <Person name = "Dhifaf" age = "19" > My Hobbies: racing, batling</Person>
      <Person name = "Aldo" age = "19" />
      <Person name = "Stevan" age = "19" />
      <Person name = "Poop" age = "19" />
      </div>
    );
    //equivalent dengan yang bawah dengan catatan kalau komponen sedikit 
    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hai, I\'m the maker of the app!!!'));
  }
}

export default App;
