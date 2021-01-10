import React, { useEffect, useState } from "react";
import BookList from "./BookList";
import Loader from "./Loader";

export default (props) => {
	const [state, setState] = useState({
		books: [],
		loaded: false,
	});

	const getUrl = () => {
		// Build a request to the LibraryThings API
		const url = new URL("https://www.librarything.com/api_getdata.php");
		url.searchParams.set("userid", "kylekarpack");
		url.searchParams.set("responseType", "json");

		url.searchParams.set("key", props.apiKey);
		url.searchParams.set("resultsets", "books");
		url.searchParams.set("max", props.max || 10);
		url.searchParams.set("booksort", props.sort || "entry_REV");
		url.searchParams.set("tagList", props.tagList || "");
		url.searchParams.set("coverheight", props.coverheight || 200);
		url.searchParams.set("coverwidth", props.coverwidth || 200);
		url.searchParams.set("limit", props.limit);
		url.searchParams.set("reviewsOnly", props.reviewsOnly ? 1 : 0);

		return url;
	};

	const getBooksJson = async () => {
		if (typeof window !== "undefined" && window.fetch) {
			const url = getUrl();
			const response = await fetch(url);
			const json = await response.json();

			const books = [];
			const booksObj = json.books;
			for (let key in booksObj) {
				const book = booksObj[key];
				if (!book.cover) {
					book.cover = `https://covers.openlibrary.org/b/isbn/${book.ISBN}-M.jpg?default=false`;
				}
				books.push(book);
			}
			return books;
		} else {
			throw "Error: fetch is not defined in this environment";
		}
	};

	const getBooks = async () => {
		setState({
			...state,
			loaded: false,
		});

		try {
			const books = await getBooksJson();

			setState({
				...state,
				books: Array.isArray(books) ? books : [books],
				loaded: true,
				error: false,
			});
		} catch (e) {
			console.error(e);

			// Indicate that we errored
			setState({
				...state,
				loaded: true,
				error: true,
			});
		}
	};

	// Get books when props are updated
	useEffect(() => {
		getBooks();
	}, [props]);

	return (
		<div className="librarythings-shelf">
			{state.loaded ? (
				<BookList
					books={state.books}
					bookWidth={props.width}
					showDetails={props.showDetails}
				/>
			) : (
				<Loader />
			)}
			{state.error ? <div>Sorry, we couldn't load books right now</div> : ""}
		</div>
	);
};
