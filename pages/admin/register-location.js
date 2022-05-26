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
import Router from "next/router";

function RegisterLocation() {
	// response message
	const [errmsg, set_errmsg] = React.useState("");
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

		// -- checking if all fields are filled.
		if (answer.region && answer.district && answer.ward && answer.street) {
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
						setTimeout(() => {
							set_msg("");
							setanswer({
								region: "",
								district: "",
								ward: "",
								street: "",
							});
						}, 3000);
					}
				})
				.catch((error) => {
					if (error.response) {
						set_errmsg(error.response.data.message);

						setTimeout(() => {
							set_errmsg("");
						}, 10000);
					}
				});
		} else {
			set_errmsg("please fill all fields before submiting.");

			setTimeout(() => {
				set_errmsg("");
			}, 5000);
		}
	};

	return (
		<>
			<Header />

			{/* Page content */}
			<Container className='mt-5' fluid>
				<Form className='form col-lg-6 offset-lg-3'>
					{msg && (
						<div class='alert alert-success' role='alert'>
							{msg}
						</div>
					)}
					{errmsg && (
						<div class='alert alert-danger' role='alert'>
							{errmsg}
						</div>
					)}
					<FormGroup>
						<Label for='exampleEmail'>Region</Label>
						<Input
							type='text'
							name='region'
							onChange={handleChange}
							value={answer.region}
							placeholder='Dar es salaam'
						/>
					</FormGroup>
					<FormGroup>
						<Label for='exampleEmail'>District</Label>
						<Input
							type='text'
							name='district'
							onChange={handleChange}
							value={answer.district}
							placeholder='Ubungo'
						/>
					</FormGroup>
					<FormGroup>
						<Label for='exampleEmail'>Ward</Label>
						<Input
							type='text'
							name='ward'
							onChange={handleChange}
							value={answer.ward}
							placeholder='Mabibo'
						/>
					</FormGroup>{" "}
					<FormGroup>
						<Label for='exampleEmail'>Street</Label>
						<Input
							type='text'
							name='street'
							onChange={handleChange}
							value={answer.street}
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
