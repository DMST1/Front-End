import React from "react";
import { Link } from "react-router-dom";


export default function Homepage() {
	return (
		<section className="home-page">
			<header className="Title">
				<h1>Free From</h1>
				<div className="mainNav">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/resources">Resources</Link>
						</li>
						<li>
							<Link to="/registration">Register</Link>
						</li>
						<li>
							<Link to="/login">login</Link>
						</li>
						<li>
							<Link to="/accountpage">Account</Link>
						</li>
					</ul>
				</div>
			</header>
			<img 
			className="main-img"
			src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
			alt="heart"
			/>
		</section>
	);
};
