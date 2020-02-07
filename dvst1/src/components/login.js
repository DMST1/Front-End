import React, { useState } from "react";
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBModalFooter,
	MDBIcon,
	MDBCardHeader,
	MDBBtn,
	MDBInput
} from "mdbreact";


const FormPage1 = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const emailHandler = e => {
		e.preventDefault();
		setEmail(e.target.value);
	};

	const passwordHandler = e => {
		e.preventDefault();
		setPassword(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		let credentials = {
			email: email,
			password: password
		};
		localStorage.setItem("credentials", credentials);
	};

	return (
		<MDBContainer>
			<MDBRow>
				<MDBCol md="6">
					<MDBCard>
						<MDBCardBody>
							<MDBCardHeader className="form-header deep-blue-gradient rounded">
								<h3 className="my-3">
									<MDBIcon icon="lock" /> Login:
								</h3>
							</MDBCardHeader>
							<form onSubmit={handleSubmit}>
								<div className="grey-text">
									<MDBInput
										label="Type your email"
										icon="envelope"
										type="email"
										error="wrong"
										success="right"
										value={email}
										onChange={emailHandler}
									/>
									<MDBInput
										label="Type your password"
										icon="lock"
										type="password"
										value={password}
										onChange={passwordHandler}
									/>
								</div>

								<div className="text-center mt-4">
									<MDBBtn color="light-blue" className="mb-3" type="submit">
									Login
									</MDBBtn>
								</div>
							</form>
							<MDBModalFooter>
								<div className="font-weight-light">
									<p>
										Not a member? <a href="/registration">Sign Up</a>
									</p>
									<p>Forgot Password?</p>
								</div>
							</MDBModalFooter>
						</MDBCardBody>
					</MDBCard>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
if ( email == "Dessa.goodlett2019@gmail.com" && password == "Brooke10!"){
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("email").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("Login").disabled = true;
return false;
		}
	}
}


export default FormPage1;
