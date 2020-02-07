import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import FormPage1 from "./components/login.js";
import FormPage2 from "./components/registration.js";
import Homepage from "./components/homepage.js";
import accountPage from "./components/accountpage";
import monthly from './components/monthly';
import relocation from "./components/relocation";


export default function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div className="navLinks">
					<Homepage />
					{/* <Route path="resources" component={resources}></Route> */}
					<Route path="/accountpage" component={accountPage}/>
					<Route path="/registration" component={FormPage2} />
					<Route path="/login" component={FormPage1} />
					<Route path="/relocation" component={relocation}></Route>
					<Route path="/monthly" component={monthly}></Route>
				</div>
			</header>
			<footer>
			
			</footer>
		</div>
	);
}
