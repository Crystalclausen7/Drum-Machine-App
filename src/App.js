import React from "react";
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
import Form from "./pages/Form";

function App(props) {
	return (
		<Switch>
			<Route exact path="/">
				<Form></Form>
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

export default App;
