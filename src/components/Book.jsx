import React, { useState } from "react";
import Modal from "react-modal";
import BookDetails from "./BookDetails";
import Placeholder from "./Placeholder";

const bookStyle = {
	textAlign: "left",
	marginBottom: "1vw",
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

const modalStyles = {
	content: {
		left: "50%",
		transform: "translateX(-50%)",
		width: "50%",
		maxWidth: "100rem",
		minWidth: "20rem"
	},
};

export default ({ book, showDetails }) => {
	const [state, setState] = useState({ error: false });

	if (!book) {
		return "";
	}

	return (
		<div style={bookStyle} title={book.title}>
			<Modal
				isOpen={state.showModal}
				ariaHideApp={false}
				style={modalStyles}
				onRequestClose={() => setState({ showModal: false })}>
				<BookDetails book={book} />
			</Modal>
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
