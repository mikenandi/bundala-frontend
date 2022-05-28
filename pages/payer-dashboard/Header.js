import axios from "axios";
import React from "react";

// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";

function UserHeader() {
	//status messages
	let [msg, set_msg] = React.useState("");
	let [errmsg, set_errmsg] = React.useState("");

	// sending requests for full trash bin.
	const handleSendRequest = (e) => {
		e.preventDefault();
		axios({
			method: "POST",
			url: "http://localhost:1337/api/v1/make-request",
			data: {
				user_id: localStorage.getItem("userId"),
			},
		})
			.then((response) => {
				set_msg(response.data.message);
				setTimeout(() => {
					set_msg("");
				}, 5000);

				return;
			})
			.catch((error) => {
				set_errmsg("failed to send request.");
				setTimeout(() => {
					set_errmsg("");
				}, 5000);
				return;
			});
	};
	return (
		<>
			<div className='header pb-8 pt-2 pt-lg-8 d-flex align-items-center'>
				{/* Mask */}
				<span className='mask bg-gradient-default opacity-8' />
				{/* Header container */}
				<Container className='d-flex align-items-center' fluid>
					<Row>
						<Col lg='7' md='10'>
							<h1 className='display-4 text-white'>Hello there</h1>
							<p className='text-white mt-0 mb-5'>
								Click the button bellow if your trash is near full so as we can
								send the Car when there are enought request from your street.
							</p>
							{
								// for success
								msg && (
									<div class='alert alert-success' role='alert'>
										{msg}
									</div>
								)
							}

							{
								// for failure
								errmsg && (
									<div class='alert alert-danger' role='alert'>
										{errmsg}
									</div>
								)
							}
							<Button color='info' href='#pablo' onClick={handleSendRequest}>
								Send request
							</Button>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}

export default UserHeader;
