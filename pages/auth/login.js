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

function Login() {
	// setting values
	const [email, set_email] = useState("");
	const [password, set_password] = useState("");

	// function for updating value of email.
	const handleEmail = (e) => {
		set_email(e.target.value);
	};

	// function for updating value of password.
	const handlePassword = (e) => {
		set_password(e.target.value);
	};

	// function to send http request to server login
	const handleLogin = (e) => {
		e.preventDefault();
		axios({
			method: "POST",
			url: "http://localhost:1337/api/v1/login",
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
			.catch((error) => console.log(error));
	};

	return (
		<>
			<Col lg='5' md='7'>
				<Card className='bg-secondary shadow border-0'>
					<CardHeader className='bg-transparent pb-2'>
						<div className='text-black text-center mt-2 mb-3'>
							<h1 className='font-weight-bold'>Sign in</h1>
						</div>
					</CardHeader>
					<CardBody className='px-lg-5 py-lg-5'>
						<Form role='form'>
							<FormGroup className='mb-3'>
								<InputGroup className='input-group-alternative'>
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
							<div className='custom-control custom-control-alternative custom-checkbox'>
								<input
									className='custom-control-input'
									id=' customCheckLogin'
									type='checkbox'
								/>
								<label
									className='custom-control-label'
									htmlFor=' customCheckLogin'>
									<span className='text-muted'>Remember me</span>
								</label>
							</div>
							<div className='text-center'>
								<Button
									className='my-4'
									color='primary'
									type='button'
									onClick={handleLogin}>
									Sign in
								</Button>
							</div>
						</Form>
					</CardBody>
				</Card>
				<Row className='mt-3'>
					<Col xs='6'>
						<a
							className='text-light'
							href='#pablo'
							onClick={(e) => e.preventDefault()}>
							<small>Forgot password?</small>
						</a>
					</Col>
					<Col className='text-right' xs='6'>
						<a className='text-light' href='/auth/register'>
							<small>Create new account</small>
						</a>
					</Col>
				</Row>
			</Col>
		</>
	);
}

Login.layout = Auth;

export default Login;
