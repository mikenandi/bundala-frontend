import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import {Line, Bar} from "react-chartjs-2";
// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	NavItem,
	NavLink,
	Nav,
	Progress,
	Table,
	Container,
	Row,
	Col,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import {chartOptions, parseOptions} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import axios from "axios";

const Dashboard = (props) => {
	// setting up states.
	const [activeNav, setActiveNav] = React.useState(1);
	const [chartExample1Data, setChartExample1Data] = React.useState("data1");
	const [data, set_data] = React.useState([]);
	const [requests, set_requests] = React.useState([]);

	// 🟨 getting up requests.
	React.useEffect(() => {
		axios({method: "GET", url: "http://localhost:1337/api/v1/total-requests"})
			.then((response) => {
				//    updating state of requests
				set_requests(response.data.data.requests);
				return;
			})
			.catch((error) => {
				console.log(error.response.data);
				return;
			});
	}, []);

	// getting data from the backend.
	React.useEffect(() => {
		axios({
			method: "GET",
			url: "http://localhost:1337/api/v1/line-chart-data",
		})
			.then((response) => {
				// console.log(response.data);
				set_data([
					Math.floor(response.data.data.jan / 1000),
					Math.floor(response.data.data.feb / 1000),
					Math.floor(response.data.data.mar / 1000),
					Math.floor(response.data.data.apr / 1000),
					Math.floor(response.data.data.may / 1000),
					Math.floor(response.data.data.jun / 1000),
					Math.floor(response.data.data.jly / 1000),
					Math.floor(response.data.data.aug / 1000),
					Math.floor(response.data.data.sep / 1000),
					Math.floor(response.data.data.oct / 1000),
					Math.floor(response.data.data.nov / 1000),
					Math.floor(response.data.data.dec / 1000),
				]);
				return;
			})
			.catch((error) => {
				console.log(error.response);
				return;
			});
	}, []);

	// 💹 line graph set up.
	let chartExample1 = {
		options: {
			scales: {
				yAxes: [
					{
						gridLines: {
							color: "#212529",
							zeroLineColor: "#212529",
						},
						ticks: {
							callback: function (value) {
								if (!(value % 10)) {
									return "" + value + "k";
								}
							},
						},
					},
				],
			},
			tooltips: {
				callbacks: {
					label: function (item, data) {
						var label = data.datasets[item.datasetIndex].label || "";
						var yLabel = item.yLabel;
						var content = "";

						if (data.datasets.length > 1) {
							content += label;
						}

						content += "" + yLabel + "k";
						return content;
					},
				},
			},
		},
		data1: (canvas) => {
			return {
				labels: [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
					"Oct",
					"Nov",
					"Dec",
				],
				datasets: [
					{
						label: "Performance",
						data: data,
					},
				],
			};
		},
	};

	if (window.Chart) {
		parseOptions(Chart, chartOptions());
	}

	const toggleNavs = (e, index) => {
		e.preventDefault();
		setActiveNav(index);
		setChartExample1Data("data" + index);
	};

	return (
		<>
			<Header />
			{/* Page content */}
			<Container className='mt-7' fluid>
				<Row>
					<Col className='mb-5 mb-xl-0' xl='8'>
						<Card className='shadow'>
							<CardHeader className='bg-transparent'>
								<Row className='align-items-center'>
									<div className='col'>
										<h6 className='text-uppercase text-light ls-1 mb-1'>
											Overview
										</h6>
										<h2 className='text-white mb-0'>Sales value</h2>
									</div>
									<div className='col'>
										<Nav className='justify-content-end' pills>
											<NavItem>
												<NavLink
													className={classnames("py-2 px-3", {
														active: activeNav === 1,
													})}
													href='#pablo'
													onClick={(e) => toggleNavs(e, 1)}>
													<span className='d-none d-md-block'>Month</span>
													<span className='d-md-none'>M</span>
												</NavLink>
											</NavItem>
										</Nav>
									</div>
								</Row>
							</CardHeader>
							<CardBody>
								{/* Chart */}
								<div className='chart'>
									<Line
										data={chartExample1[chartExample1Data]}
										options={chartExample1.options}
										getDatasetAtEvent={(e) => console.log(e)}
									/>
								</div>
							</CardBody>
						</Card>
					</Col>

					{/* trash car requests. */}
					<Col xl='4'>
						<Card className='shadow'>
							<CardHeader className='bg-transparent'>
								<Row className='align-items-center'>
									<div className='col'>
										<h2 className='mb-0'>Request per street</h2>
									</div>
								</Row>
							</CardHeader>
							<CardBody>
								<table className='table'>
									<thead className='bg-danger'>
										<tr>
											<th scope='col' className='text-white'>
												Street
											</th>
											<th scope='col' className='text-white'>
												Requests
											</th>
										</tr>
									</thead>
									<tbody>
										{
											// creating rows of the table.
											requests.map((request) => {
												return (
													<tr key={request.id}>
														<td>{request.street}</td>
														<td>{request.count}</td>
													</tr>
												);
											})
										}
									</tbody>
								</table>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

Dashboard.layout = Admin;

export default Dashboard;
