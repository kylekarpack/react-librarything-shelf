import React, { useState } from "react";
import BookDetails from "./BookDetails";
import Popup from "reactjs-popup";
import Placeholder from "./Placeholder";

const bookStyle = {
	textAlign: "left",
	cursor: "pointer",
	breakInside: "avoid",
};

const imageStyle = {
	width: "100%",
};

const titleBoxStyle = {
	fontSize: "0.9rem",
	lineHeight: 1,
	borderBottom: "1px solid #eee",
	paddingBottom: "0.5rem",
	marginBottom: "1rem",
};

const titleStyle = {
	whiteSpace: "nowrap",
	textOverflow: "ellipsis",
	overflow: "hidden",
};

const authorStyle = {
	fontSize: "0.5rem",
	opacity: 0.5,
	display: "block",
	padding: "0.5rem 0",
};

const contentStyle = {
	background: "#fff",
	color: "#000",
	padding: "1rem 2rem",
	width: "50%",
	maxWidth: "80rem",
	minWidth: "25rem",
	maxHeight: "80%",
	overflowY: "auto",
};
const overlayStyle = { background: "rgba(0,0,0,0.5)" };
const arrowStyle = { color: "#000" };

export default ({ book, showDetails }) => {
	const [state, setState] = useState({ error: false });

	if (!book) {
		return "";
	}

	return (
		<div style={bookStyle} title={book.title}>
			<Popup
				open={state.showModal}
				onClose={() => setState({ showModal: false })}
				closeOnDocumentClick
				{...{ contentStyle, overlayStyle, arrowStyle }}>
				<BookDetails book={book} />
			</Popup>
			<a onClick={() => setState({ showModal: true })}>
				{state.error ? (
					<Placeholder />
				) : (
					<img
						style={imageStyle}
						src={book.cover}
						onError={() => setState({ error: true })}
					/>
				)}
			</a>
			{showDetails && (
				<div style={titleBoxStyle}>
					<div style={titleStyle}>{book.title}</div>
					<small style={authorStyle}>{book.author_fl}</small>
				</div>
			)}
		</div>
	);
};
