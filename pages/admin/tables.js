import React from "react";

// reactstrap components
import {
	Badge,
	Card,
	CardHeader,
	CardFooter,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	DropdownToggle,
	Media,
	Pagination,
	PaginationItem,
	PaginationLink,
	Progress,
	Table,
	Container,
	Row,
	UncontrolledTooltip,
	Input,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import Header from "components/Headers/Header.js";
import axios from "axios";

function Tables() {
	// 🧺 setting states
	const [answer, setanswer] = React.useState("");
	const [data, setdata] = React.useState([]);

	const handleChange = (e) => {
		let value = e.target.value;
		setanswer(value);
	};

	// const searchRequest = () => {
	// 	if (answer.length > 0) {
	// 		axios({
	// 			method: "GET",
	// 			url: "http://localhost:1337/api/v1/search-location",
	// 			params: {
	// 				query: answer,
	// 			},
	// 		})
	// 			.then((response) => {
	// 				setdata(response.data.data.all_record);
	// 			})
	// 			.catch((error) => {
	// 				console.log(error.response);
	// 			});
	// 	}
	// };
	React.useEffect(() => {
		axios({
			method: "GET",
			url: "http://localhost:1337/api/v1/search-location",
			params: {
				query: answer,
			},
		})
			.then((response) => {
				// console.log(response.data.data);
				console.log(response.data.data);
				setdata([]);
				setdata(response.data.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	}, [answer]);

	return (
		<>
			<Header />
			{/* Page content */}
			<Container className='mt--7' fluid>
				{/* Table */}
				<Row>
					<div className='col'>
						<Card className='shadow'>
							<CardHeader className='border-0'>
								<Input
									type='text'
									className='text-dark w-75'
									placeholder='search your location code here.....'
									onChange={handleChange}
									value={answer}
								/>
							</CardHeader>
							<Table className='align-items-center table-flush' responsive>
								<thead className='thead-light'>
									<tr>
										<th scope='col'>Region</th>
										<th scope='col'>District</th>
										<th scope='col'>Ward</th>
										<th scope='col'>Street</th>
										<th scope='col'>Street code</th>
										<th scope='col' />
									</tr>
								</thead>
								<tbody>
									{data.map((item) => {
										return (
											<tr key={item.id}>
												<th scope='row'>
													<Media className='align-items-center'>
														<span className='mb-0 text-sm'>{item.region}</span>
													</Media>
												</th>
												<td>{item.district}</td>
												<td>{item.ward}</td>
												<td>{item.street}</td>
												<td>{item.street_code}</td>
											</tr>
										);
									})}
								</tbody>
							</Table>
							<CardFooter className='py-4'>
								{/* <nav aria-label='...'>
									<Pagination
										className='pagination justify-content-end mb-0'
										listClassName='justify-content-end mb-0'>
										<PaginationItem className='disabled'>
											<PaginationLink
												href='#pablo'
												onClick={(e) => e.preventDefault()}
												tabIndex='-1'>
												<i className='fas fa-angle-left' />
												<span className='sr-only'>Previous</span>
											</PaginationLink>
										</PaginationItem>
										<PaginationItem className='active'>
											<PaginationLink
												href='#pablo'
												onClick={(e) => e.preventDefault()}>
												1
											</PaginationLink>
										</PaginationItem>
										<PaginationItem>
											<PaginationLink
												href='#pablo'
												onClick={(e) => e.preventDefault()}>
												2 <span className='sr-only'>(current)</span>
											</PaginationLink>
										</PaginationItem>
										<PaginationItem>
											<PaginationLink
												href='#pablo'
												onClick={(e) => e.preventDefault()}>
												3
											</PaginationLink>
										</PaginationItem>
										<PaginationItem>
											<PaginationLink
												href='#pablo'
												onClick={(e) => e.preventDefault()}>
												<i className='fas fa-angle-right' />
												<span className='sr-only'>Next</span>
											</PaginationLink>
										</PaginationItem>
									</Pagination>
								</nav> */}
							</CardFooter>
						</Card>
					</div>
				</Row>
			</Container>
		</>
	);
}

Tables.layout = Admin;

export default Tables;
