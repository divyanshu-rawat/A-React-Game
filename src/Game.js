import React, { Component } from 'react';
import { render } from 'react-dom';
import Stars from './stars';
import Button from './button';
import Answer from './answer';
import Numbers from './Numbers';
import './App.css';

class Game extends React.Component{

  state  = {
    selectedNumbers:[],
    numberofStars:1 + Math.floor((Math.random()*9)),
    answer:null
  }

  clickedNumber = (number) => {
    if(this.state.selectedNumbers.indexOf(number) >= 0){ return }
      this.setState((prevState) => ({selectedNumbers: prevState.selectedNumbers.concat(number)}))
   }

  unSelectNumber = (clickednumber) => {
      this.setState((prevState) => ({selectedNumbers: prevState.selectedNumbers.filter((number) => number !== clickednumber )}))
   }

   checkAnswer = () => {
      this.setState((prevState) => ({answer:prevState.numberofStars === prevState.selectedNumbers.reduce((previous,current) => previous + current,0)}))
   }
  

  render(){

    const {selectedNumbers,numberofStars,answer} = this.state;

      return(
          <div className = 'container'>
            <h3>Wanna Play Game !</h3>
            <hr />
            <div className = 'row'>
            <p>Current state : {answer}</p>
	            <Stars numberofStars = {numberofStars} />
	            <Button selectedNumbers ={selectedNumbers} answer = {answer} checkAnswer = {this.checkAnswer}/>
	            <Answer selectedNumbers = {selectedNumbers} unSelectNumber = {this.unSelectNumber}/>
	            <Numbers selectedNumbers = {selectedNumbers} clickedNumber = {this.clickedNumber} />
	        </div>
          </div>
        )
    }
  }


export default Game;