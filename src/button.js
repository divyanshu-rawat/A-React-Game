import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';

const Button = (props) => {

	let button;
	switch (props.answer) {
		case true:
			button =
			 <button className = 'btn btn-success btn-lg custom_two' onClick = {props.acceptAnswer}>
				<span className = "fa fa-check" ></span>
			</button>
			break;
		case false:
			button =
			 <button className = 'btn btn-danger btn-lg custom_three' >
				<span className = "fa fa-times" ></span>
			</button>
		break;
		default:
			button =
			<button disabled = { props.selectedNumbers.length == 0} className = 'btn btn-primary btn-lg custom' onClick = {props.checkAnswer}>
				=
			</button>

	}

	return(

		<div className = "col-lg-offset-2 col-lg-2">
			{button}
			<br />
			<button className = "btn btn-warning btn-sm margin" onClick = {props.resetGame} disabled = {props.resetCount === 0}>
				<span className = "fa fa-refresh"> {props.resetCount}</span>
			</button>
		</div>


	)


}

export default Button;