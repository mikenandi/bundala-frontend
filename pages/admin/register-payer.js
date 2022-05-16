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
	const [msg, set_msg] = React.useState("");
	const [answer, setanswer] = React.useState([]);

	// function for getting states.
	const handleChange = (e) => {
		console.log(e);
		const name = e.target.name;
		const value = e.target.value;
		setanswer({...answer, [name]: value});
	};

	// function to send http request to register location.
	const handleSubmit = (e) => {
		e.preventDefault();
		axios({
			method: "POST",
			url: "http://localhost:1337/api/v1/register-payer",
			data: {
				first_name: answer.first_name,
				last_name: answer.last_name,
				phone_no: answer.phone_number,
				type: answer.type,
				house_no: answer.house_number,
				region: answer.region,
				distict: answer.district,
				ward: answer.ward,
				street: answer.street,
			},
		})
			.then((response) => {
				if (response.data.success) {
					set_msg("success new payer was created");
				}
			})
			.catch((error) => {
				console.log(error.response);
			});
	};
	console.log(answer);

	return (
		<>
			<Header />

			{/* Page content */}
			<Container className='mt-5' fluid>
				<p className='text-success'>
					<strong>{msg}</strong>
				</p>
				<Form className='form col-lg-6 offset-lg-3'>
					<FormGroup>
						<Label>First Name</Label>
						<Input
							type='text'
							name='first_name'
							onChange={handleChange}
							answer={answer}
							placeholder='first name'
						/>
					</FormGroup>
					<FormGroup>
						<Label>Last Name</Label>
						<Input
							type='text'
							name='last_name'
							onChange={handleChange}
							answer={answer}
							placeholder='last name'
						/>
					</FormGroup>
					<FormGroup>
						<Label>Type</Label>
						<Input
							type='select'
							name='type'
							onChange={handleChange}
							answer={answer}
							placeholder='type of service provider.'>
							<option>normal house</option>
							<option>house with tenant</option>
							<option>hotel</option>
							<option>small bussness</option>
						</Input>
					</FormGroup>
					<FormGroup>
						<Label>Phone Number</Label>
						<Input
							type='text'
							name='phone_number'
							onChange={handleChange}
							answer={answer}
							placeholder='mobile number'
						/>
					</FormGroup>{" "}
					<FormGroup>
						<Label>Region</Label>
						<Input
							type='email'
							name='region'
							onChange={handleChange}
							answer={answer}
							placeholder='Mwembeni'
						/>
					</FormGroup>
					<FormGroup>
						<Label>District</Label>
						<Input
							type='text'
							name='district'
							onChange={handleChange}
							answer={answer}
							placeholder='district'
						/>
					</FormGroup>
					<FormGroup>
						<Label>Ward</Label>
						<Input
							type='text'
							name='ward'
							onChange={handleChange}
							answer={answer}
							placeholder='ward '
						/>
					</FormGroup>
					<FormGroup>
						<Label>Street</Label>
						<Input
							type='text'
							name='street'
							onChange={handleChange}
							answer={answer}
							placeholder='Street'
						/>
					</FormGroup>
					<FormGroup>
						<Label>House Number</Label>
						<Input
							type='text'
							name='house_number'
							onChange={handleChange}
							answer={answer}
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
