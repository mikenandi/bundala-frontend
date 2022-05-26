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
	const [show_company_name, set_show_company_name] = React.useState(false);
	const [msg, set_msg] = React.useState("");
	const [errmsg, set_errmsg] = React.useState("");
	const [answer, setanswer] = React.useState([]);

	// function for getting states.
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		if (name === "type" && value === "company") {
			set_show_company_name(true);
		}

		if (name === "type" && value === "individual") {
			set_show_company_name(false);
		}

		setanswer({...answer, [name]: value});
	};

	// function to send http request to register location.
	const handleSubmit = (e) => {
		e.preventDefault();

		// Checking if all fields are filled.
		if (
			answer.first_name &&
			answer.last_name &&
			answer.type &&
			answer.phone_number &&
			answer.account_number &&
			answer.charge_amount &&
			answer.service
		) {
			axios({
				method: "POST",
				url: "http://localhost:1337/api/v1/register-service-provider",
				data: {
					first_name: answer.first_name,
					last_name: answer.last_name,
					company_name: answer.company_name
						? answer.company_name
						: "individual person",
					type: answer.type,
					phone_no: answer.phone_number,
					account_no: answer.account_number,
					charge_amount: answer.charge_amount,
					service: answer.service,
				},
			})
				.then((response) => {
					if (response.data.success) {
						set_msg("success service provider registered");
						setTimeout(() => {
							// making the message empty.
							set_msg("");

							// making form clean.
							setanswer({
								first_name: "",
								last_name: "",
								company_name: "",
								type: "",
								phone_number: "",
								account_number: "",
								charge_amount: "",
								service: "",
							});
						}, 5000);
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
	console.log(answer);
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
						<Label>First name</Label>
						<Input
							type='text'
							name='first_name'
							onChange={handleChange}
							value={answer.first_name}
							placeholder='name of service provider'
						/>
					</FormGroup>
					<FormGroup>
						<Label>Last name</Label>
						<Input
							type='text'
							name='last_name'
							onChange={handleChange}
							value={answer.last_name}
							placeholder='name of service provider'
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
							<option>individual</option>
							<option>company</option>
						</Input>
					</FormGroup>
					{show_company_name && (
						<FormGroup>
							<Label>company name</Label>
							<Input
								type='text'
								name='company_name'
								onChange={handleChange}
								value={answer.name}
								placeholder='name of service provider'
							/>
						</FormGroup>
					)}
					<FormGroup>
						<Label>Phone number</Label>
						<Input
							type='text'
							name='phone_number'
							onChange={handleChange}
							value={answer.phone_number}
							placeholder='mobile number'
						/>
					</FormGroup>
					<FormGroup>
						<Label>Account number</Label>
						<Input
							type='text'
							name='account_number'
							onChange={handleChange}
							value={answer.account_number}
							placeholder='Account number'
						/>
					</FormGroup>
					<FormGroup>
						<Label>Charge amount</Label>
						<Input
							type='type'
							name='charge_amount'
							onChange={handleChange}
							value={answer.charge_amount}
							placeholder='amount in Tshs'
						/>
					</FormGroup>{" "}
					<FormGroup>
						<Label>Service</Label>
						<Input
							type='select'
							name='service'
							onChange={handleChange}
							value={answer.service}>
							<option></option>
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
