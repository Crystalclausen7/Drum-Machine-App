import React from "react";
// import { BrowserRouter as Route, Switch } from "react-router-dom"
import DrumMachine from "./components/drum-machine";
import BoxDisplayContainer from "./components/box-display";
import VolumeContainer from './components/volume';
import Main from "./pages/Main"
import LoginPage from "./pages/LoginPage"
import { connect } from "react-redux";
import { change_power } from "./redux/actions/power";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";

function App(props) {
	return (
		<Switch>
			<Route exact path="/">
				<LoginPage></LoginPage>
			</Route>
			<Route exact path="/drummachine">
				<Main></Main>
			</Route>
			<Route exact path="/registerpage">
				<RegisterPage></RegisterPage>
			</Route>
		</Switch>
	);
}

// const mapStateToProps = (state) => {
// 	return {
// 		power: state.power,
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		change_power: (state) => {
// 			dispatch(change_power(state.power));
// 		},
// 	};
// };

export default App;
