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
	const [answer, set_answer] = useState([]);

	// handling change from form.
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		set_answer({...answer, [name]: value});
	};

	console.log(answer);
	// function to send register https request.
	const handleSubmit = (e) => {
		e.preventDefault();

		axios({
			url: "http://localhost:1337/api/v1/register",
			method: "POST",
			data: {
				first_name: answer.first_name,
				last_name: answer.last_name,
				email: answer.email,
				password: answer.password,
			},
		})
			.then((response) => {
				if (response.data.success) {
					console.log(response.data.data);
					// saving auth details on local storage for future usage.
					localStorage.setItem("authToken", response.data.data.token);
					localStorage.setItem("userId", response.data.data.user_id);
					localStorage.setItem("role", response.data.data.role);

					// if credentials are for admin then the person should login as admin.
					if (response.data.data.role === "admin")
						return Router.push("/admin/dashboard");

					if (response.data.data.role === "payer")
						return Router.push("/payer-dashboard");

					if (response.data.data.role === "service_provider")
						return Router.push("/service-provider");
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
										placeholder='First name'
										type='text'
										name='first_name'
										answer={answer}
										onChange={handleChange}
									/>
								</InputGroup>
							</FormGroup>
							<FormGroup>
								<InputGroup className='input-group-alternative mb-3'>
									<InputGroupAddon addonType='prepend'>
										<InputGroupText>
											<i className='ni ni-hat-3' />
										</InputGroupText>
									</InputGroupAddon>
									<Input
										placeholder='Last name'
										type='text'
										name='last_name'
										answer={answer}
										onChange={handleChange}
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
										name='email'
										onChange={handleChange}
										answer={answer}
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
										name='password'
										onChange={handleChange}
										answer={answer}
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
									onClick={handleSubmit}>
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
