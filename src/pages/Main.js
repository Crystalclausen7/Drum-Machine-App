import React, { useEffect, useState } from "react";

import DrumMachine from "../components/drum-machine";
import BoxDisplayContainer from "../components/box-display";
import VolumeContainer from '../components/volume';

import { connect } from "react-redux";
import { change_power } from "../redux/actions/power";
import "../App.scss";
import { Redirect } from "react-router-dom";

function Main(props) {
	const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("loggedIn"))
	useEffect(() => {

	})


	function handleLogout(){
		localStorage.setItem("loggedIn", "false")
		setIsLoggedIn(localStorage.getItem("loggedIn"))
	}
	return (
		<div className="App">
			<header className="App-header">Drum Machine</header>
			<div className="App-body">
			{isLoggedIn === "true" ? <button onClick={handleLogout}>Logout</button> : <Redirect to="/loginpage"></Redirect>}
				<VolumeContainer />
				<BoxDisplayContainer />
				<DrumMachine power={props.power} dispatch={props.dispatch}/>
			</div>
			
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		power: state.power,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		change_power: (state) => {
			dispatch(change_power(state.power));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
