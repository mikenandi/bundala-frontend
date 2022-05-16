import React from "react";

// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	FormGroup,
	Form,
	Input,
	Container,
	Row,
	Col,
	Label,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import Header from "components/Headers/Header.js";
import UserHeader from "components/Headers/UserHeader.js";
import axios from "axios";

function RegisterLocation() {
	// response message
	const [err, set_err] = React.useState("");
	const [msg, set_msg] = React.useState("");
	// storing states
	const [answer, setanswer] = React.useState([]);

	// function for getting states.
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setanswer({...answer, [name]: value});
	};

	// function to send http request to register location.
	const handleSubmit = (e) => {
		e.preventDefault();
		axios({
			method: "POST",
			url: "http://localhost:1337/api/v1/register-location",
			data: {
				region: answer.region,
				district: answer.district,
				ward: answer.ward,
				street: answer.street,
			},
		})
			.then((response) => {
				if (response.data.success) {
					set_msg("success you have registered new location");
					setanswer([]);
				}
				console.log(response);
			})
			.catch((error) => {
				if (error.response) {
					set_err("OOps locations was not created.");
				}
				console.log(error);
			});
	};
	console.log(answer);
	return (
		<>
			<Header />

			{/* Page content */}
			<Container className='mt-5' fluid>
				{/* <p className='text-danger'>
					<strong>{err}</strong>
				</p> */}
				<p className='text-success'>
					<strong>{msg}</strong>
				</p>
				<Form className='form col-lg-6 offset-lg-3'>
					<FormGroup>
						<Label for='exampleEmail'>Region</Label>
						<Input
							type='text'
							name='region'
							onChange={handleChange}
							answer={answer}
							placeholder='Dar es salaam'
						/>
					</FormGroup>
					<FormGroup>
						<Label for='exampleEmail'>District</Label>
						<Input
							type='text'
							name='district'
							onChange={handleChange}
							answer={answer}
							placeholder='Ubungo'
						/>
					</FormGroup>
					<FormGroup>
						<Label for='exampleEmail'>Ward</Label>
						<Input
							type='text'
							name='ward'
							onChange={handleChange}
							answer={answer}
							placeholder='Mabibo'
						/>
					</FormGroup>{" "}
					<FormGroup>
						<Label for='exampleEmail'>Street</Label>
						<Input
							type='text'
							name='street'
							onChange={handleChange}
							answer={answer}
							placeholder='Mwembeni'
						/>
					</FormGroup>
					<Button color='primary' onClick={handleSubmit}>
						Register
					</Button>
				</Form>
			</Container>
		</>
	);
}

RegisterLocation.layout = Admin;

export default RegisterLocation;
