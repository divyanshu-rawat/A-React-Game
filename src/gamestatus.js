import React, { Component } from 'react';
import { render } from 'react-dom';

const Status = (props) => {
	

	return(
		<div className = "text-center col-lg-12">
			<div>
				<h3>{props.donestatus}</h3>
			</div>
		</div>
	)

}


export default Status;