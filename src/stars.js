import React, { Component } from 'react';
import { render } from 'react-dom';
import _ from "lodash";
import range from "lodash/range";

const Stars = (props) => {
	return(

		<div className = "col-lg-6">
			{_.range(props.numberofStars).map( i => <span key={i} className="fa fa-star"></span>) }
		</div>
	)


}


export default Stars;