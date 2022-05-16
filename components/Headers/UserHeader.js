import React from "react";

// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";

function UserHeader() {
	return (
		<>
			<div className='header pb-8 pt-5 pt-lg-8 d-flex align-items-center'>
				{/* Mask */}
				<span className='mask bg-gradient-default opacity-8' />
				{/* Header container */}
				<Container className='d-flex align-items-center' fluid>
					<Row>
						<Col lg='7' md='10'>
							<h1 className='display-2 text-white'>Hello Bundala</h1>
							<p className='text-white mt-0 mb-5'>
								This is admin profile page. Here the admin can edit his/her
								credentials in the system for better security.
							</p>
							<Button
								color='info'
								href='#pablo'
								onClick={(e) => e.preventDefault()}>
								Edit profile
							</Button>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}

export default UserHeader;
