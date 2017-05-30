import React, { Component } from 'react';
import { render } from 'react-dom';

const Button = (props) => {

	let button;
	switch (props.answer) {
		case true:
			button =
			 <button className = 'btn btn-success btn-xs' onClick = {props.checkAnswer}>
				<span className = "fa fa-check" ></span>
			</button>
			break;
		case false:
			button =
			 <button className = 'btn btn-danger btn-xs' onClick = {props.checkAnswer}>
				<span className = "fa fa-times" ></span>
			</button>
		break;
		default:
			button =
			<button disabled = { props.selectedNumbers.length == 0} className = 'btn btn-primary btn-xs' onClick = {props.checkAnswer}>
				=
			</button>
	}

	return(

		<div className = "col-lg-2">
			{button}
		</div>
	)


}

export default Button;