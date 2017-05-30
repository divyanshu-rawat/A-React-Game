import React, { Component } from 'react';
import { render } from 'react-dom';
import _ from "lodash";
import range from "lodash/range";

const Numbers = (props) => {
	
		const getClassName = (number) =>{
			if(props.selectedNumbers.indexOf(number) >= 0 )
				return 'Numbers selected'
			if(props.usedNumber.indexOf(number) >= 0 )
				return 'Numbers used'
			return 'Numbers'
		}


	return(
		<div className = "card text-center col-lg-12">
			<div>
				{ Numbers.list.map((number,i) => <span onClick = { () => props.clickedNumber(number)}  className = {getClassName(number)} key={i}>{number}</span>) }
			</div>
		</div>
	)

}

Numbers.list = _.range(1,10);


export default Numbers;