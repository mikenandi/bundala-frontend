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
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import UserHeader from "./Header.js";
import Navbar from "./Navbar.js";
import axios from "axios";

function Profile() {
	// -- setting states
	const [profile, set_profile] = React.useState({});
	const [amount, set_amount] = React.useState("");

	// handling change on form input
	const handleChange = (e) => {
		set_amount(e.target.value);
	};

	// 🎲 function for triggering show modal or hide modal
	const handlePay = () => {};

	// 🎲 getting values for user profile.
	React.useEffect(() => {
		axios({
			method: "GET",
			url: "http://localhost:1337/api/v1/payer-profile",
			params: {
				user_id: localStorage.getItem("userId"),
			},
		})
			.then((response) => {
				set_profile({
					first_name: response.data.data.first_name,
					last_name: response.data.data.last_name,
					username: response.data.data.username,
					phone_no: response.data.data.phone_no,
					control_no: response.data.data.control_number,
					city: response.data.data.city,
					district: response.data.data.district,
					ward: response.data.data.ward,
					street: response.data.data.street,
				});
				// console.log(response.data.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	}, []);
	console.log(amount);
	return (
		<>
			<Navbar />
			<UserHeader />
			{/* Page content */}
			<Container className='mt--7' fluid>
				<Row>
					<Col className='order-xl-2 mb-5 mb-xl-0' xl='4'>
						<Card className='card-profile shadow'>
							<CardBody className='pt-0 pt-md-4'>
								<div className='mt-2 text-center'>
									<h3 className='display-3'>tsh 12,500</h3>
									<div className='h5 font-weight-400 text-uppercase'>
										total bill
									</div>
									<div>
										<Row>
											<Col>
												<FormGroup>
													<Input
														className='form-control-alternative bg-white text-dark mt-3'
														id='amount'
														placeholder='amount'
														type='text'
														bsSize='lg'
														value={amount}
														onChange={handleChange}
													/>
												</FormGroup>
												<Button
													className='btn btn-success mt-3'
													onClick={handlePay}>
													pay now
												</Button>
											</Col>
										</Row>
									</div>

									<hr />
									<div className='mt-4  text-danger'>
										<p className='display-4 font-weight-600 text-capitalize'>
											notifications{" "}
										</p>
									</div>
									<div>Car will pass to your street tommorow.</div>
								</div>
							</CardBody>
						</Card>
					</Col>
					<Col className='order-xl-1' xl='8'>
						<Card className='bg-secondary shadow'>
							<CardHeader className='bg-white border-0'>
								<Row className='align-items-center'>
									<Col xs='8'>
										<h3 className='mb-0'>My account</h3>
									</Col>
								</Row>
							</CardHeader>
							<CardBody>
								<Form>
									<h6 className='heading-small text-muted mb-4'>
										User information
									</h6>
									<div className='pl-lg-4'>
										<Row>
											<Col lg='6'>
												<FormGroup>
													<label
														className='form-control-label'
														htmlFor='input-username'>
														Username
													</label>
													<Input
														className='form-control-alternative bg-white text-dark'
														defaultValue='lucky.jesse'
														id='input-username'
														placeholder='Username'
														type='text'
														value={profile.username}
														disabled
													/>
												</FormGroup>
											</Col>
											<Col lg='6'>
												<FormGroup>
													<label
														className='form-control-label'
														htmlFor='input-email'>
														Phone number
													</label>
													<Input
														className='form-control-alternative bg-white text-dark'
														id='input-email'
														placeholder='phone number'
														type='email'
														value={profile.phone_no}
														disabled
													/>
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col lg='6'>
												<FormGroup>
													<label
														className='form-control-label'
														htmlFor='input-first-name'>
														First name
													</label>
													<Input
														className='form-control-alternative bg-white text-dark'
														id='input-first-name'
														placeholder='First name'
														type='text'
														value={profile.first_name}
														disabled
													/>
												</FormGroup>
											</Col>
											<Col lg='6'>
												<FormGroup>
													<label
														className='form-control-label'
														htmlFor='input-last-name'>
														Last name
													</label>
													<Input
														className='form-control-alternative bg-white text-dark'
														defaultValue='first name'
														id='input-last-name'
														placeholder='Last name'
														type='text'
														value={profile.last_name}
														disabled
													/>
												</FormGroup>
											</Col>
										</Row>
									</div>
									<hr className='my-4' />
									{/* Address */}
									<h6 className='heading-small text-muted mb-4'>
										other information
									</h6>
									<div className='pl-lg-4'>
										<Row>
											<Col md='12'>
												<FormGroup>
													<label
														className='form-control-label'
														htmlFor='input-address'>
														control number
													</label>
													<Input
														className='form-control-alternative bg-white text-dark font-weight-bold font-size-12 input-large'
														id='input-address'
														placeholder='control number'
														type='text'
														value={profile.control_no}
														bsSize='lg'
														disabled
													/>
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col lg='3'>
												<FormGroup>
													<label
														className='form-control-label'
														htmlFor='input-city'>
														Region
													</label>
													<Input
														className='form-control-alternative bg-white text-dark'
														id='input-city'
														placeholder='City'
														type='text'
														value={profile.city}
														disabled
													/>
												</FormGroup>
											</Col>
											<Col lg='3'>
												<FormGroup>
													<label
														className='form-control-label'
														htmlFor='input-country'>
														district
													</label>
													<Input
														className='form-control-alternative bg-white text-dark'
														defaultValue='United States'
														id='input-country'
														placeholder='Country'
														type='text'
														value={profile.district}
														disabled
													/>
												</FormGroup>
											</Col>
											<Col lg='3'>
												<FormGroup>
													<label
														className='form-control-label'
														htmlFor='input-country'>
														ward
													</label>
													<Input
														className='form-control-alternative bg-white text-dark'
														id='input-postal-code'
														placeholder='Postal code'
														type='text'
														value={profile.ward}
														disabled
													/>
												</FormGroup>
											</Col>
											<Col lg='3'>
												<FormGroup>
													<label
														className='form-control-label'
														htmlFor='input-country'>
														street
													</label>
													<Input
														className='form-control-alternative bg-white text-dark'
														id='input-postal-code'
														placeholder='Postal code'
														type='text'
														value={profile.street}
														disabled
													/>
												</FormGroup>
											</Col>
										</Row>
									</div>
									<hr className='my-4' />
									{/* Description */}
									<h6 className='heading-small text-muted mb-4'>
										usafi billz @2022
									</h6>
								</Form>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

// Profile.layout = Admin;

export default Profile;
