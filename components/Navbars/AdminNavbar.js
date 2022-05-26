import React, {useState, useEffect} from "react";
import Link from "next/link";
// reactstrap components
import {
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	DropdownToggle,
	Form,
	FormGroup,
	InputGroupAddon,
	InputGroupText,
	Input,
	InputGroup,
	Navbar,
	Nav,
	Container,
	Media,
} from "reactstrap";
import Router from "next/router";
import axios from "axios";

function AdminNavbar({brandText}) {
	// setting states.
	const [profile, set_profile] = useState("");

	// handling equation to make a person logout.
	const handleLogout = (e) => {
		e.preventDefault();
		// Removing token and userid
		localStorage.setItem("authToken", "");
		localStorage.setItem("userId", "");

		Router.push("/auth/login");
	};

	// fetching data
	useEffect(() => {
		axios({
			method: "GET",
			url: "http://localhost:1337/api/v1/user-profile",
			params: {
				user_id: localStorage.getItem("userId"),
			},
		})
			.then((response) => {
				console.log(response.data);
				set_profile(
					response.data.data.first_name + " " + response.data.data.last_name,
				);
			})
			.catch((error) => {
				console.log(error.response);
			});
	}, []);

	return (
		<>
			<Navbar className='navbar-top navbar-dark' expand='md' id='navbar-main'>
				<Container fluid>
					<Link href='/admin/dashboard'>
						<a className='h4 mb-0 text-white text-uppercase d-none d-lg-inline-block'>
							{brandText}
						</a>
					</Link>
					<Form className='navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto'></Form>
					<Nav className='align-items-center d-none d-md-flex' navbar>
						<UncontrolledDropdown nav>
							<DropdownToggle className='pr-0' nav>
								<Media className='align-items-center'>
									<span className='avatar avatar-sm rounded-circle'></span>
									<Media className='ml-2 d-none d-lg-block'>
										<span className='mb-0 text-sm font-weight-bold'>
											{profile}
										</span>
									</Media>
								</Media>
							</DropdownToggle>
							<DropdownMenu className='dropdown-menu-arrow' right>
								<DropdownItem className='noti-title' header tag='div'>
									<h6 className='text-overflow m-0'>Welcome!</h6>
								</DropdownItem>
								<Link href='/admin/profile'>
									<DropdownItem>
										<i className='ni ni-single-02' />
										<span>My profile</span>
									</DropdownItem>
								</Link>
								<Link href='/admin/profile'>
									<DropdownItem>
										<i className='ni ni-settings-gear-65' />
										<span>Settings</span>
									</DropdownItem>
								</Link>
								<Link href='/admin/profile'>
									<DropdownItem>
										<i className='ni ni-calendar-grid-58' />
										<span>Activity</span>
									</DropdownItem>
								</Link>
								<Link href='/admin/profile'>
									<DropdownItem>
										<i className='ni ni-support-16' />
										<span>Support</span>
									</DropdownItem>
								</Link>
								<DropdownItem divider />
								<DropdownItem href='#pablo' onClick={handleLogout}>
									<i className='ni ni-user-run' />
									<span>Logout</span>
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

export default AdminNavbar;
