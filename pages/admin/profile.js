import React, {useState, useEffect} from "react";

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
import UserHeader from "components/Headers/UserHeader.js";
import axios from "axios";

function Profile() {
	// setting initial states
	const [profile, set_profile] = useState({
		firstname: "admin",
		lastname: "mars",
		email: "admin@mars.com",
		username: "admin@mars.com",
	});

	// Fetching profile data.
	useEffect(() => {
		axios({
			method: "GET",
			url: "http://localhost:1337/api/v1/user-profile",
			params: {
				user_id: localStorage.getItem("userId"),
			},
		})
			.then((response) => {
				set_profile({
					firstname: response.data.data.first_name,
					lastname: response.data.data.last_name,
					email: response.data.data.email,
					username: response.data.data.username,
				});
			})
			.catch((error) => {
				console.log(error.response);
			});
	}, []);

	return (
		<>
			<UserHeader />
			{/* Page content */}
			<Container className='mt--7' fluid>
				<Row>
					<Col className='order-xl-2 mb-5 mb-xl-0' xl='4'>
						<Card className='card-profile shadow'>
							<CardBody className='pt-0 pt-md-4'>
								<div className='mt-3 text-start'>
									<h3>
										{profile.firstname} {profile.lastname}
									</h3>
									<div className='h5 font-weight-300'>
										<i className='ni location_pin mr-2' />
										Dar es salaam, Tanzania
									</div>
									<hr />
									<div className='h5 '>
										<i className='ni business_briefcase-24 mr-2' />
										System Admin - Usafi billz.
									</div>
									<div>
										<i className='ni education_hat mr-2' />
										National Institute of Transport.
									</div>
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
														className='form-control-alternative bg-white'
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
														Email address
													</label>
													<Input
														className='form-control-alternative bg-white'
														id='input-email'
														placeholder='jesse@example.com'
														type='email'
														value={profile.email}
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
														className='form-control-alternative bg-white'
														defaultValue='Lucky'
														id='input-first-name'
														placeholder='First name'
														type='text'
														value={profile.firstname}
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
														className='form-control-alternative bg-white'
														defaultValue='Jesse'
														id='input-last-name'
														placeholder='Last name'
														type='text'
														value={profile.lastname}
														disabled
													/>
												</FormGroup>
											</Col>
										</Row>
									</div>
								</Form>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

Profile.layout = Admin;

export default Profile;
