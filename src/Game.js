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
    answer:null,
    usedNumber:[],
    resetCount:5
  }

  clickedNumber = (number) => {

    if(this.state.selectedNumbers.indexOf(number) >= 0){ return }
      this.setState((prevState) => ({answer:null,selectedNumbers: prevState.selectedNumbers.concat(number)}))
   }

  unSelectNumber = (clickednumber) => {
      this.setState((prevState) => ({answer:null,selectedNumbers: prevState.selectedNumbers.filter((number) => number !== clickednumber )}))
   }

   checkAnswer = () => {
      this.setState((prevState) => ({answer:prevState.numberofStars === prevState.selectedNumbers.reduce((previous,current) => previous + current,0)}))
   }

   acceptAnswer = () => {
      this.setState((prevState) => ({

        numberofStars:1 + Math.floor((Math.random()*9)),
        selectedNumbers:[],
        answer:null,
        usedNumber:prevState.usedNumber.concat(prevState.selectedNumbers)

      }))
   }

   resetGame = () => {

      if(this.state.resetCount == 0){return}

      this.setState((prevState) => ({

        numberofStars:1 + Math.floor((Math.random()*9)),
        selectedNumbers:[],
        answer:null,
        resetCount:prevState.resetCount - 1
      }))
   }

  

  render(){

    const {selectedNumbers,numberofStars,answer,usedNumber,resetCount} = this.state;

      return(
          <div className = 'container'>
            <h3>Wanna Play Game !</h3>
            <hr />
            <div className = 'row'>
            <p>Current state : {answer}</p>
	            <Stars numberofStars = {numberofStars} />
	            <Button selectedNumbers ={selectedNumbers} resetGame = {this.resetGame} answer = {answer} checkAnswer = {this.checkAnswer} acceptAnswer = {this.acceptAnswer} resetCount = {resetCount}/>
	            <Answer selectedNumbers = {selectedNumbers} unSelectNumber = {this.unSelectNumber}/>
	            <Numbers selectedNumbers = {selectedNumbers} clickedNumber = {this.clickedNumber} usedNumber = {usedNumber} />
	        </div>
          </div>
        )
    }
  }


export default Game;