import React, { Component } from 'react';
import { render } from 'react-dom';
import Stars from './stars';
import Button from './button';
import Answer from './answer';
import Numbers from './Numbers';
import './App.css';

class Game extends React.Component{

  state  = {
    selectedNumbers:[]
  }

  clickedNumber = (number) => {
    if(this.state.selectedNumbers.indexOf(number) >= 0)
      console.log(number);
    else
      this.setState((prevState) => ({selectedNumbers: prevState.selectedNumbers.concat(number)}))
   }
  

  render(){
      return(
          <div className = 'container'>
            <h3>Wanna Play Game !</h3>
            <hr />
            <div className = 'row'>
	            <Stars />
	            <Button />
	            <Answer selectedNumbers = {this.state.selectedNumbers} />
	            <Numbers selectedNumbers = {this.state.selectedNumbers} clickedNumber = {this.clickedNumber} />
	        </div>
          </div>
        )
  }
}


export default Game;