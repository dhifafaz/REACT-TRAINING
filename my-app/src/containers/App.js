import classes from './App.module.css';
import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] Inside Constructor ', props);
    this.state = {
      persons : [
        { id :'sdjs', name : 'Dhifaf', age : '19'},
        { id :'aaejf',name : 'Stephanie', age : '18'},
        { id :'dadf', name : 'Poop', age : '20'}
      ], 
      otherState : 'some bla bla',
      showData: false
    };
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount()');
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] Inside shouldComponentUpdate',nextProps,nextState);
    return true ;
  }
  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }
  componentDidUpdate(){
      console.log('[UPDATE App.js] Inside componentDidUpdate');
  }

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
    console.log('[App.js] Inside render()');
    // inline style using style as the name of the object
    let persons = null ;
    
    if (this.state.showData) {
      persons = <Persons 
          persons = {this.state.persons}
          clicked = {this.delData}
          changed = {this.nameChangedHandler} />;
   
    }
     
    return (
      
      <div className = {classes.App}>
        <Cockpit
          appTitle = {this.props.title}
          showData={this.state.showData}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}/>
        {persons}
      </div>
      
    );
    //equivalent dengan yang bawah dengan catatan kalau komponen sedikit 
    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hai, I\'m the maker of the app!!!'));
  }
}

export default App;