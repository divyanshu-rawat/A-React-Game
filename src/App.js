import React, { Component } from 'react';
import { render } from 'react-dom';
import Game from './Game';
import './App.css';


class App extends React.Component{

  render(){
      return(

          <div>
            <Game />
          </div>

        )
  }
}


export default App;