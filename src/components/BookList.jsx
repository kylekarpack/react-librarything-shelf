import React from "react";
import Book from "./Book";

const shelfStyle = (minWidth) => {
	minWidth = minWidth || 100;
	return {
		columnWidth: minWidth,
		gridColumnGap: "1vw",
	};
};

export default ({ books, bookWidth, showDetails }) => {
	return (
		<div style={shelfStyle(bookWidth)}>
			{books.map((book) => {
				return (
					<Book
						key={book.book_id}
						book={book}
						bookWidth={bookWidth}
						showDetails={showDetails}
					/>
				);
			})}
		</div>
	);
};
