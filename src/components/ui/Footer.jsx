import React from 'react';
import { useLocation } from 'react-router-dom';

import * as Route from 'constants/routes';
import logo from '../../../static/logo-full.png';

const Footer = () => {
	const { pathname } = useLocation();

	const hiddenFooterPaths = [
		Route.SIGNIN,
		Route.SIGNUP,
		Route.FORGOT_PASSWORD,
		Route.ACCOUNT
	];

	return hiddenFooterPaths.includes(pathname) ? null : (
		<footer className="footer">
			<div className="footer-col-1">
				<strong><span>Developed and maintained by <a href="https://radii.in/">Radii Corporation</a></span></strong>
			</div>
			<div className="footer-col-2">
				<img className="footer-logo" src={logo} />
				<h5>&copy;&nbsp;{new Date().getFullYear()}</h5>
			</div>
			<div className="footer-col-3">
				<strong>
					<span>
						More recent advancements &nbsp;
            <a href="https://blog.radii.in/">here.</a>
					</span>
				</strong>
			</div>
		</footer>
	);
};

export default Footer;
