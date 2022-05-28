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

function RegisterPayer() {
	// storing states
	const [errmsg, set_errmsg] = React.useState("");
	const [msg, set_msg] = React.useState("");
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

		// -- checking if no place in form is left black.
		if (
			answer.first_name &&
			answer.last_name &&
			answer.phone_number &&
			answer.type &&
			answer.house_number &&
			answer.street_code
		) {
			// 📮 sending post request.
			axios({
				method: "POST",
				url: "http://localhost:1337/api/v1/register-payer",
				data: {
					first_name: answer.first_name,
					last_name: answer.last_name,
					phone_no: answer.phone_number,
					type: answer.type,
					house_no: answer.house_number,
					street_code: answer.street_code,
				},
			})
				.then((response) => {
					if (response.data.success) {
						set_msg("success new payer was created");
						setTimeout(() => {
							set_msg("");
							setanswer({
								first_name: "",
								last_name: "",
								phone_number: "",
								type: "",
								house_number: "",
								street_code: "",
							});
						}, 4000);
					}
				})
				.catch((error) => {
					if (error.response) {
						set_errmsg(error.response.data.message);

						setTimeout(() => {
							set_errmsg("");
						}, 4000);
					}
				});
		} else {
			set_errmsg("please fill all fields before submiting.");

			setTimeout(() => {
				set_errmsg("");
			}, 3000);
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
						<Label>First Name</Label>
						<Input
							type='text'
							name='first_name'
							onChange={handleChange}
							value={answer.first_name}
							placeholder='first name'
						/>
					</FormGroup>

					<FormGroup>
						<Label>Last Name</Label>
						<Input
							type='text'
							name='last_name'
							onChange={handleChange}
							value={answer.last_name}
							placeholder='last name'
						/>
					</FormGroup>

					<FormGroup>
						<Label>Type</Label>
						<Input
							type='select'
							name='type'
							onChange={handleChange}
							value={answer.type}
							placeholder='type of service provider.'>
							<option></option>
							<option>normal house</option>
							<option>house with tenant</option>
							<option>hotel</option>
							<option>small business</option>
						</Input>
					</FormGroup>

					<FormGroup>
						<Label>Phone Number</Label>
						<Input
							type='text'
							name='phone_number'
							onChange={handleChange}
							value={answer.phone_number}
							placeholder='mobile number'
						/>
					</FormGroup>

					<FormGroup>
						<Label>Street code</Label>
						<Input
							type='text'
							name='street_code'
							onChange={handleChange}
							value={answer.street_code}
							placeholder='example DAR_01345'
						/>
					</FormGroup>

					<FormGroup>
						<Label>House Number</Label>
						<Input
							type='text'
							name='house_number'
							onChange={handleChange}
							value={answer.house_number}
							placeholder='house number'
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

RegisterPayer.layout = Admin;

export default RegisterPayer;
