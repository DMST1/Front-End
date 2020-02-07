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
			<div className="vision">
				<p>
				Our mission is to create pathways
				to financial security and long-term safety that 
				support survivors of sex-based violence.<br></br>
				Our goal is not just survival but safety.
				Our goal is not just living but thriving. 
				Our goal is not just making ends meet 
				but creating wealth and abundance.</p>
			</div>
		</div>
	);
}
