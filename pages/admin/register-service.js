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

function Maps() {
	// storing states
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

		axios({
			method: "POST",
			url: "http://localhost:1337/api/v1/register-service-provider",
			data: {
				name: answer.name,
				type: answer.type,
				phone_no: answer.phone_number,
				account_no: answer.account_number,
				charge_amount: answer.charge_amount,
				service: answer.service,
			},
		}).then((response) => {
			if (response.data.success) {
				set_msg("success service provider registered");
				setanswer([]);
			}
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
						<Label>Name</Label>
						<Input
							type='text'
							name='name'
							onChange={handleChange}
							answer={answer}
							placeholder='name of service provider'
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
							<option>individual</option>
							<option>company</option>
						</Input>
					</FormGroup>
					<FormGroup>
						<Label>Phone number</Label>
						<Input
							type='text'
							name='phone_number'
							onChange={handleChange}
							answer={answer}
							placeholder='mobile number'
						/>
					</FormGroup>
					<FormGroup>
						<Label>Account number</Label>
						<Input
							type='text'
							name='account_number'
							onChange={handleChange}
							answer={answer}
							placeholder='Account number'
						/>
					</FormGroup>
					<FormGroup>
						<Label>Charge amount</Label>
						<Input
							type='type'
							name='charge_amount'
							onChange={handleChange}
							answer={answer}
							placeholder='amount in Tshs'
						/>
					</FormGroup>{" "}
					<FormGroup>
						<Label>Service</Label>
						<Input
							type='select'
							name='service'
							onChange={handleChange}
							answer={answer}>
							<option>garbage truck</option>
							<option>security guard</option>
						</Input>
					</FormGroup>
					<Button color='primary' onClick={handleSubmit}>
						Register
					</Button>
				</Form>
			</Container>
		</>
	);
}

Maps.layout = Admin;

export default Maps;
