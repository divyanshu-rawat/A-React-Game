import React, { Component } from 'react';
import { render } from 'react-dom';
// import './App.css';

const Button = (props) => {

	let button;
	switch (props.answer) {
		case true:
			button =
			 <button className = 'btn btn-success btn-md' onClick = {props.acceptAnswer}>
				<span className = "fa fa-check" ></span>
			</button>
			break;
		case false:
			button =
			 <button className = 'btn btn-danger btn-md' >
				<span className = "fa fa-times" ></span>
			</button>
		break;
		default:
			button =
			<button disabled = { props.selectedNumbers.length == 0} className = 'btn btn-primary btn-md' onClick = {props.checkAnswer}>
				=
			</button>

	}

	return(

		<div className = "col-lg-2">
			{button}
			<br />
			<button className = "btn btn-warning btn-sm margin">
				<span className = "fa fa-refresh"></span>
			</button>
		</div>


	)


}

export default Button;