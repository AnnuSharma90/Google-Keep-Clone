import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const Note = (props) => {
	const delNote = () => {
		props.delItem(props.id);
	};

	return (
		<div className=" mw5 ml4 mt4 dib w5 shadow-3 ba b--light-silver">
			<h1 className="f4 w-100 ma0 pa2  b--white-025">{props.title}</h1>
			<p className="f6 f5-ns w-100 pa2 h4 ma0 b--white-025">
				{props.content}
			</p>
			<div className="tr">
				<button className="bg-red" onClick={delNote}>
					<DeleteOutlineIcon />
				</button>
			</div>
		</div>
	);
};
export default Note;
