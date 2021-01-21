import React from "react";
import "./index.css";
import "tachyons";
import logo from "./images/logo.png";

const Header = () => {
	return (
		<div className="header black bg-gold shadow-3 w-100 pa3">
			<img className="dib" src={logo} alt="logo" />
			<h2>Google Keep Clone</h2>
		</div>
	);
};
export default Header;
