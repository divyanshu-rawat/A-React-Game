import React, { Component } from 'react';
import { render } from 'react-dom';

const Answer = (props) => {

	return(

		<div className = "col-lg-4 text-center">
			{props.selectedNumbers.map((number,i) =><span key={i} className = "Numbers">{number}</span>) }
		</div>
	)


}

export default Answer;