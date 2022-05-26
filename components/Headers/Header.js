import axios from "axios";
import React from "react";

// reactstrap components
import {Card, CardBody, CardTitle, Container, Row, Col} from "reactstrap";

function Header() {
	// 🛒 setting up states
	const [payers, set_payers] = React.useState("0");
	const [streets, set_streets] = React.useState("0");

	// 🎲 getting data for filling the dashboard.
	React.useEffect(() => {
		axios({
			method: "GET",
			url: "http://localhost:1337/api/v1/header-summary",
		})
			.then((response) => {
				set_streets(response.data.data.streets);
				set_payers(response.data.data.payers);
			})
			.catch((error) => {
				if (error.respose) {
					return;
				}
			});
	}, []);

	return (
		<>
			<div className='header bg-gradient-dark pb-8 pt-5 pt-md-8'>
				<Container fluid>
					<div className='header-body'>
						{/* Card stats */}
						<Row>
							<Col lg='6' xl='4'>
								<Card className='card-stats mb-4 mb-xl-0'>
									<CardBody>
										<Row>
											<div className='col'>
												<CardTitle
													tag='h5'
													className='text-uppercase text-muted mb-0'>
													monthly collections
												</CardTitle>
												<span className='h2 font-weight-bold mb-0'>
													SH 350,897
												</span>
											</div>
											<Col className='col-auto'>
												<div className='icon icon-shape bg-danger text-white rounded shadow'>
													<i className='fas fa-hand-holding-usd' />
												</div>
											</Col>
										</Row>
										<p className='mt-3 mb-0 text-muted text-sm'>
											<i className='fa fa-window-minimize text-danger' />
										</p>
									</CardBody>
								</Card>
							</Col>
							<Col lg='6' xl='4'>
								<Card className='card-stats mb-4 mb-xl-0'>
									<CardBody>
										<Row>
											<div className='col'>
												<CardTitle
													tag='h5'
													className='text-uppercase text-muted mb-0'>
													streets
												</CardTitle>
												<span className='h2 font-weight-bold mb-0'>
													{streets}
												</span>
											</div>
											<Col className='col-auto'>
												<div className='icon icon-shape bg-warning text-white rounded shadow'>
													<i className='fas fa-map' />
												</div>
											</Col>
										</Row>
										<p className='mt-3 mb-0 text-muted text-sm'>
											<i className='fa fa-window-minimize text-warning' />
										</p>
									</CardBody>
								</Card>
							</Col>
							<Col lg='6' xl='4'>
								<Card className='card-stats mb-4 mb-xl-0'>
									<CardBody>
										<Row>
											<div className='col'>
												<CardTitle
													tag='h5'
													className='text-uppercase text-muted mb-0'>
													Payers
												</CardTitle>
												<span className='h2 font-weight-bold mb-0'>
													{payers}
												</span>
											</div>
											<Col className='col-auto'>
												<div className='icon icon-shape bg-yellow text-white rounded shadow'>
													<i className='fas fa-users' />
												</div>
											</Col>
										</Row>
										<p className='mt-3 mb-0 text-muted text-sm text-uppercase'>
											<i className='fa fa-window-minimize text-yellow' />
										</p>
									</CardBody>
								</Card>
							</Col>
						</Row>
					</div>
				</Container>
			</div>
		</>
	);
}

export default Header;
