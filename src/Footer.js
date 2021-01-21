import React from "react";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<div className=" mw-100 pv4 ph3 ph4-m ph5-l mid-gray">
			<small className="f6 db tc">
				© {year} <b className="ttu">Google Keep Clone</b>., All Rights
				Reserved
			</small>
			<div className="tc mt3"></div>
		</div>
	);
};
export default Footer;
