import React, { Component } from 'react';
import { render } from 'react-dom';
import Stars from './stars';
import Button from './button';
import Answer from './answer';
import Numbers from './Numbers';
import './App.css';

class Game extends React.Component{

  state  = {
    selectedNumbers:[2,4]
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
	            <Numbers selectedNumbers = {this.state.selectedNumbers} />
	        </div>
          </div>
        )
  }
}


export default Game;