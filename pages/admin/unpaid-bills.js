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

function UnpaidBills() {
	// 🧺 setting states
	const [answer, setanswer] = React.useState("");
	const [data, setdata] = React.useState([]);

	React.useEffect(() => {
		axios({
			method: "GET",
			url: "http://localhost:1337/api/v1/search-unpaid-bills",
			params: {
				query: answer,
			},
		})
			.then((response) => {
				// console.log(response.data.data);

				setdata(response.data.data.results);
				return;
			})
			.catch((error) => {
				console.log(error.response.data);
				return;
			});
	}, []);

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
								{/* <Input
									type='text'
									className='text-dark w-75'
									placeholder='search your location code here.....'
									onChange={handleChange}
									value={answer}
								/> */}
							</CardHeader>
							<Table className='align-items-center table-flush' responsive>
								<thead className='thead-light'>
									<tr>
										<th scope='col'>First Name</th>
										<th scope='col'>Last Name</th>
										<th scope='col'>Amount</th>
										<th scope='col'>Street</th>
										<th scope='col'>Ward</th>
										<th scope='col' />
									</tr>
								</thead>
								<tbody>
									{data.map((item) => {
										return (
											<tr key={item.id}>
												<th scope='row'>
													<Media className='align-items-center'>
														<span className='mb-0 text-sm'>
															<td>{item.first_name}</td>
														</span>
													</Media>
												</th>

												<td>{item.last_name}</td>
												<td>{item.amount}</td>
												<td>{item.street}</td>
												<td>{item.ward}</td>
											</tr>
										);
									})}
								</tbody>
							</Table>
							<CardFooter className='py-4'></CardFooter>
						</Card>
					</div>
				</Row>
			</Container>
		</>
	);
}

UnpaidBills.layout = Admin;

export default UnpaidBills;
