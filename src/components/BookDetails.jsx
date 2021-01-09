import React, { useEffect, useState } from "react";
import Loader from "./Loader";

export default ({ book }) => {
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
