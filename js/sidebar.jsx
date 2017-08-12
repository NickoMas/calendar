import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";

import { Button } from "react-lightning-design-system";

// mapping functions for connection to redux state
export const mapStateToProps = (state, ownProps) => {
	return {
		time : state.monthShift.time
	  , calendar: state.monthShift.calendar
  }
}

const mapDispatchToProps = dispatch => {
  return {
    monthUp: () => dispatch({type: 'up'})
  , monthDown: () => dispatch({type: 'down'})
  }
}
///


class Sidebar extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
				<section className = "sidebar">
					<Nav />
				</section>
			)
	}
}

class Navigation extends React.Component {

  send(){

	  //retieve data from backend
	let t = fetch("http://128.199.53.150/events", { method: "get" })
		.then(a => a.json())
		.then(a => console.log(a));
	return t;
  }

  render(){

  	//const fetched = this.send().then(a => a.json()) || 'ok';

	const time = this.props.time;
	const monthName = time.toLocaleString("en-us", { month: "long" });
	const divStyles = {
		display: 'flex',
		flexFlow: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		width: '200px',
		margin: '0 auto'
	}

    return(
        <nav>
        	<div style={divStyles}>
		        <a href="#" onClick = { this.props.monthDown } className="previous round">&#8249;</a>
		        <span>{ `${monthName}, ${time.getFullYear()}` }</span>
		        <a href="#" onClick = { this.props.monthUp } className="next round">&#8250;</a>
		    </div>
        </nav>
        )
    }
}

const Nav = connect(
		mapStateToProps
	,	mapDispatchToProps
	)(Navigation);

export default Sidebar;
