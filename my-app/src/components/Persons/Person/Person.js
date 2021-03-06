import React, { Component } from 'react';
//import Radium from 'radium';
import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';


//children include any elm between opening and closing tags (bisa apapun)
class Person extends Component { 
//    const style = {
//        '@media (min-width : 500px)' : {
//            width : '450px'
//        }
//  };
constructor(props){
    super(props);
    console.log('[Person.js] Inside Constructor ', props);
  }

  componentWillMount(){
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[Person.js] Inside componentDidMount()');
    if (this.props.position === 0){
      this.inputElement.focus();

    }
      }
    render (){
        console.log('[Person.js] Inside render()');
        return (
            <Aux>
                <p onClick={this.props.click}> I'm {this.props.name} and I am {this.props.age} years old ! </p>
                <p>{this.props.children}</p>  
                <input 
                  ref ={(inp) => { this.inputElement = inp }}
                  type="text" 
                  onChange={this.props.changed} 
                  value = {this.props.name} />  
            </Aux>
        )
    }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age:PropTypes.number, 
  changed: PropTypes.func
};

export default withClass(Person,classes.Person);