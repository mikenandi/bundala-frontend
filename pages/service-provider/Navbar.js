import React from "react";
import {Container, Navbar} from "reactstrap";

function HeaderUser() {
	return (
		<div>
			<nav
				className='navbar navbar-expand-lg navbar-dark bg-default'
				role='navigation'>
				<div className='container'>
					<a className='navbar-brand text-white' href='#'>
						<p className='h1 text-white'>
							<strong>Usafi Billz</strong>
						</p>
					</a>
					<button
						className='navbar-toggler border-0'
						type='button'
						data-toggle='collapse'
						data-target='#exCollapsingNavbar'>
						&#9776;
					</button>
					<div className='collapse navbar-collapse' id='exCollapsingNavbar'>
						<ul className='nav navbar-nav flex-row justify-content-between ml-auto'>
							<button type='button' className='btn btn-secondary'>
								Log out
							</button>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default HeaderUser;
