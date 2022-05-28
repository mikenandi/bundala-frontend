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
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import UserHeader from "./Header.js";
import Navbar from "./Navbar.js";
import axios from "axios";

function Profile() {
	// initializing states.
	const [data, set_data] = React.useState({});
	// fetching data from profile data.
	React.useEffect(() => {
		axios({
			method: "GET",
			url: "http://localhost:1337/api/v1/service-provider-profile",
			params: {
				user_id: localStorage.getItem("userId"),
			},
		})
			.then((response) => {
				set_data(response.data.data);
				return;
			})
			.catch((error) => {
				console.log(error.response.data);
				return;
			});
	}, []);
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
									<div className='mt-4  text-danger'>
										<p className='display-4 font-weight-600 text-capitalize'>
											notifications{" "}
										</p>
									</div>
									<div>
										sinza, street and mabibo street need the trash car by
										tommorow.
									</div>
									<Button className='mt-3 btn-default text-uppercase'>
										confirm
									</Button>
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
														First name
													</label>
													<Input
														className='form-control-alternative bg-white text-dark'
														defaultValue='lucky.jesse'
														id='input-username'
														placeholder='First name'
														type='text'
														value={data.first_name}
														disabled
													/>
												</FormGroup>
											</Col>
											<Col lg='6'>
												<FormGroup>
													<label
														className='form-control-label'
														htmlFor='input-email'>
														Last name
													</label>
													<Input
														className='form-control-alternative bg-white text-dark'
														id='input-email'
														placeholder='Last name'
														type='email'
														value={data.last_name}
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
														Phone number
													</label>
													<Input
														className='form-control-alternative bg-white text-dark'
														id='input-first-name'
														placeholder='First name'
														type='text'
														value={data.phone_no}
														disabled
													/>
												</FormGroup>
											</Col>
											<Col lg='6'>
												<FormGroup>
													<label
														className='form-control-label'
														htmlFor='input-last-name'>
														username
													</label>
													<Input
														className='form-control-alternative bg-white text-dark'
														defaultValue='first name'
														id='input-last-name'
														placeholder='username'
														type='text'
														value={data.username}
														disabled
													/>
												</FormGroup>
											</Col>
										</Row>
									</div>
									<hr className='my-4' />
									{/* Address */}
									<h6 className='heading-small text-muted mb-4'>
										Payment information
									</h6>
									<div className='pl-lg-4'>
										<Row>
											<Col md='12'>
												<FormGroup>
													<label
														className='form-control-label'
														htmlFor='input-address'>
														account number
													</label>
													<Input
														className='form-control-alternative bg-white text-dark font-weight-bold font-size-12 input-large'
														id='input-address'
														placeholder='control number'
														type='text'
														bsSize='lg'
														value={data.account_number}
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
														type
													</label>
													<Input
														className='form-control-alternative bg-white text-dark'
														id='input-city'
														placeholder='type'
														type='text'
														value={data.type}
														disabled
													/>
												</FormGroup>
											</Col>
											<Col lg='3'>
												<FormGroup>
													<label
														className='form-control-label'
														htmlFor='input-country'>
														charge amount
													</label>
													<Input
														className='form-control-alternative bg-white text-dark'
														id='input-country'
														placeholder='Charge amount'
														type='text'
														value={data.charge_amount}
														disabled
													/>
												</FormGroup>
											</Col>
											<Col lg='3'>
												<FormGroup>
													<label
														className='form-control-label'
														htmlFor='input-country'>
														company name
													</label>
													<Input
														className='form-control-alternative bg-white text-dark'
														id='input-postal-code'
														placeholder='company name'
														type='text'
														value={data.company_name}
														disabled
													/>
												</FormGroup>
											</Col>
											<Col lg='3'>
												<FormGroup>
													<label
														className='form-control-label'
														htmlFor='input-country'>
														service
													</label>
													<Input
														className='form-control-alternative bg-white text-dark'
														id='input-postal-code'
														placeholder='Service'
														value={data.service}
														type='text'
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
