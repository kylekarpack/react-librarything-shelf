import React, { useState, useEffect } from "react";
import Placeholder from "./Placeholder";
import Loader from "./Loader";
import Modal from "react-modal";

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
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		maxWidth: "50rem",
	},
};

const BookDetails = ({ book }) => {
	const [state, setState] = useState({ loading: true });

	const remove = (dom, selector) => {
		const elements = dom.querySelectorAll(selector);
		elements.forEach((el) => el.remove());
	};

	useEffect(() => {
		const getDetails = async () => {
			const url = new URL("https://www.librarything.com/widget_work.php");
			url.searchParams.set("book", book.book_id);
			const data = await fetch(url);
			const text = await data.text();
			const parser = new DOMParser();
			const dom = parser.parseFromString(text, "text/html");
			remove(dom, ".topframe, .booklinks");
			const content = dom.querySelector(".smallcontent");
			content.style.fontSize = ".75rem";
			const thumb = dom.querySelector(".thumbnail");
			thumb.style.float = "right";
			thumb.style.marginLeft = "2rem";

			setState({
				loading: false,
				details: dom.body.innerHTML,
			});
		};

		getDetails();
	}, []);

	if (state.loading) {
		return <Loader />;
	}

	return <div dangerouslySetInnerHTML={{ __html: state.details }}></div>;
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
