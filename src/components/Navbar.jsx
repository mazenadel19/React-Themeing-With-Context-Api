import './Navbar.css'

const Navbar = ({ selectedTheme, themes, changeTheme }) => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light shadow-lg'>
			<div className='container'>
				<span className='navbar-brand' href='#'>
					Navbar
				</span>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className='collapse navbar-collapse'
					id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'></ul>
					<form className='d-flex'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							{/*** This could be extracted into it's own reusable component ***/}
							<li className='nav-item dropdown'>
								<span
									className='nav-link dropdown-toggle'
									id='navbarDropdown'
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'>
									<span id='theme-name'>
										{selectedTheme.name}
									</span>
									<div id='theme-dropdown-circle'></div>
								</span>
								<ul
									className='dropdown-menu'
									aria-labelledby='navbarDropdown'>
									{themes.map(
										(theme, index) =>
											theme.name !==
												selectedTheme.name && (
												<li key={index}>
													<span
														className='dropdown-item'
														id='dropdown-item-wrapper'
														onClick={() =>
															changeTheme(
																theme.name,
															)
														}>
														<span className='theme-name'>
															{theme.name}
														</span>
														<div
															id='theme-dropdown-circle'
															style={{
																backgroundColor:
																	theme.color,
															}}></div>
													</span>
												</li>
											),
									)}
								</ul>
							</li>
							{/*** This could be extracted into it's own reusable component ***/}
						</ul>
					</form>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
