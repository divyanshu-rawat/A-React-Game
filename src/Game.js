import React, { Component } from 'react';
import { render } from 'react-dom';
import Stars from './stars';
import Button from './button';
import Answer from './answer';
import Numbers from './Numbers';
import Status from './gamestatus';
import './App.css';

class Game extends React.Component{

  state  = {
    selectedNumbers:[],
    numberofStars:1 + Math.floor((Math.random()*9)),
    answer:null,
    usedNumber:[],
    resetCount:5,
    donestatus:null
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

      }),this.updateStatus)
   }

   resetGame = () => {

      if(this.state.resetCount == 0){return}

      this.setState((prevState) => ({

        numberofStars:1 + Math.floor((Math.random()*9)),
        selectedNumbers:[],
        answer:null,
        resetCount:prevState.resetCount - 1
      }),this.updateStatus)
   }

      updateStatus = () => {

      this.setState((prevState) => {
          if(prevState.usedNumber.length == 9)
            return {donestatus:'Cool you won !'}
          else if(prevState.usedNumber != 9 && prevState.resetCount == 0)
            return {donestatus:'try again'}
      })
   }

  

  render(){

    const {selectedNumbers,numberofStars,answer,usedNumber,resetCount,donestatus} = this.state;

      return(
          <div className = 'container'>
            <h3>Wanna Play Game !</h3>
            <hr />
            <div className = 'row'>
	            <Stars numberofStars = {numberofStars} />
	            <Button selectedNumbers ={selectedNumbers} resetGame = {this.resetGame} answer = {answer} checkAnswer = {this.checkAnswer} acceptAnswer = {this.acceptAnswer} resetCount = {resetCount}/>
	            <Answer selectedNumbers = {selectedNumbers} unSelectNumber = {this.unSelectNumber}/>
	            {donestatus ? <Status donestatus = {donestatus}/> 
               : <Numbers selectedNumbers = {selectedNumbers} clickedNumber = {this.clickedNumber} usedNumber = {usedNumber} />
              }
	        </div>
          </div>
        )
    }
  }


export default Game;