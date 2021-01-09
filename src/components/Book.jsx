import React, { useState } from "react";
import Placeholder from "./Placeholder";

const bookStyle = {
	textAlign: "left",
	marginBottom: "1vw",
	cursor: "pointer",
	breakInside: "avoid"
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

export default ({ book, showDetails }) => {
	const [state, setState] = useState({ error: false });

	const clickBook = async (book) => {
		console.log(book);

		const url = new URL("https://www.librarything.com/widget_work.php");
		url.searchParams.set("book", book.book_id);
		const data = await fetch(url);
		const text = await data.text();
		console.log(text);
	};

	if (!book) {
		return "";
	}
	console.warn(showDetails);

	return (
		<div style={bookStyle} title={book.title}>
			<a onClick={() => clickBook(book)}>
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
