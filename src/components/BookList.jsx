import React from "react";
import Book from "./Book";

const shelfStyle = (minWidth) => {
	minWidth = minWidth || "7rem";
	return {
		display: "grid",
    gridTemplateColumns: `repeat(auto-fill, ${minWidth})`,
    justifyContent: "space-around",
    alignItems: "center",
    gridColumnGap: "0.5rem",
    gridRowGap: "0.5rem"
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
