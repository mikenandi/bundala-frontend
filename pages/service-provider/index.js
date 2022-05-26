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

function Profile() {
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
														Username
													</label>
													<Input
														className='form-control-alternative bg-white'
														defaultValue='lucky.jesse'
														id='input-username'
														placeholder='Username'
														type='text'
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
														className='form-control-alternative bg-white'
														id='input-email'
														placeholder='jesse@example.com'
														type='email'
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
														control number
													</label>
													<Input
														className='form-control-alternative bg-white'
														defaultValue='Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09'
														id='input-address'
														placeholder='Home Address'
														type='text'
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
														City
													</label>
													<Input
														className='form-control-alternative bg-white'
														defaultValue='New York'
														id='input-city'
														placeholder='City'
														type='text'
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
														className='form-control-alternative bg-white'
														defaultValue='United States'
														id='input-country'
														placeholder='Country'
														type='text'
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
														className='form-control-alternative bg-white'
														id='input-postal-code'
														placeholder='Postal code'
														type='text'
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
														value=''
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
