import React, { Component } from 'react';
import { render } from 'react-dom';
import Stars from './stars';
import Button from './button';
import Answer from './answer';

class Game extends React.Component{

  render(){
      return(
          <div>
            <h3>Wanna Play Game !</h3>
            <Stars />
            <Button />
            <Answer />
          </div>
        )
  }
}


export default Game;