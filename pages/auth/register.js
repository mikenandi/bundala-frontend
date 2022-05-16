import React, {useState} from "react";

// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	FormGroup,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Row,
	Col,
} from "reactstrap";

// layout for this page
import Auth from "layouts/Auth.js";
import axios from "axios";
import Router from "next/router";

function Register() {
	// usestates for storing values of form inputs.
	const [name, set_name] = useState("");
	const [email, set_email] = useState("");
	const [password, set_password] = useState("");

	// function for getting name value from form.
	const handleName = (e) => {
		set_name(e.target.value);
	};

	// function to get email value from form
	const handleEmail = (e) => {
		set_email(e.target.value);
	};

	// function to get password value from form.
	const handlePassword = (e) => {
		set_password(e.target.value);
	};

	// function to send register https request.
	const handleSignup = (e) => {
		e.preventDefault();

		axios({
			url: "http://localhost:1337/api/v1/signup",
			method: "POST",
			data: {
				email: email,
				password: password,
			},
		})
			.then((response) => {
				if (response.data.success) {
					// localStorage.setItem("authToken", response.data.token);
					Router.push("/admin/dashboard");
				}
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	return (
		<>
			<Col lg='6' md='8'>
				<Card className='bg-secondary shadow border-0'>
					<CardHeader className='bg-transparent pb-2'>
						<div className='text-muted text-center mt-2 mb-4'>
							<h1>Sign up</h1>
						</div>
					</CardHeader>
					<CardBody className='px-lg-5 py-lg-5'>
						<Form role='form'>
							<FormGroup>
								<InputGroup className='input-group-alternative mb-3'>
									<InputGroupAddon addonType='prepend'>
										<InputGroupText>
											<i className='ni ni-hat-3' />
										</InputGroupText>
									</InputGroupAddon>
									<Input
										placeholder='Name'
										type='text'
										value={name}
										onChange={handleName}
									/>
								</InputGroup>
							</FormGroup>
							<FormGroup>
								<InputGroup className='input-group-alternative mb-3'>
									<InputGroupAddon addonType='prepend'>
										<InputGroupText>
											<i className='ni ni-email-83' />
										</InputGroupText>
									</InputGroupAddon>
									<Input
										placeholder='Email'
										type='email'
										value={email}
										onChange={handleEmail}
										autoComplete='new-email'
									/>
								</InputGroup>
							</FormGroup>
							<FormGroup>
								<InputGroup className='input-group-alternative'>
									<InputGroupAddon addonType='prepend'>
										<InputGroupText>
											<i className='ni ni-lock-circle-open' />
										</InputGroupText>
									</InputGroupAddon>
									<Input
										placeholder='Password'
										type='password'
										value={password}
										onChange={handlePassword}
										autoComplete='new-password'
									/>
								</InputGroup>
							</FormGroup>
							<div className='text-muted font-italic'></div>
							<Row className='my-4'>
								<Col xs='12'>
									<div className='custom-control custom-control-alternative custom-checkbox'>
										<input
											className='custom-control-input'
											id='customCheckRegister'
											type='checkbox'
										/>
										<label
											className='custom-control-label'
											htmlFor='customCheckRegister'>
											<span className='text-muted'>
												I agree with the{" "}
												<a href='#pablo' onClick={(e) => e.preventDefault()}>
													Privacy Policy
												</a>
											</span>
										</label>
									</div>
								</Col>
							</Row>
							<div className='text-center'>
								<Button
									className='mt-4'
									color='primary'
									type='button'
									onClick={handleSignup}>
									Create account
								</Button>
							</div>
						</Form>
					</CardBody>
				</Card>
			</Col>
		</>
	);
}

Register.layout = Auth;

export default Register;
