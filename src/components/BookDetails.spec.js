import { mount, shallow } from "enzyme";
import React from "react";
import { act } from "react-dom/test-utils";
import BookDetails from "./BookDetails";

const html = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/1999/REC-html401-19991224/loose.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><title>The Hate U Give by Angie Thomas</title><meta http-equiv="content-type" content="text/html; charset=utf-8"/><link rel="stylesheet" href="https://www.librarything.com/minified/css/9e3517f12b6269bb76b0994e89cfd73d.css" type="text/css"><link rel="stylesheet" href="/css/translated_rules.php?4255" type="text/css"><script src="/js2/jquery-1.8.0.min.js" type="text/javascript" flag_fte="1" language="Javascript"></script><script src="https://www.librarything.com/minified/js/11fb7e5f5142892aa71869735d2ee550.js" type="text/javascript" language="Javascript"></script> <script type="text/javascript">if (window.jQuery && (typeof $J == 'undefined')) { $J = jQuery.noConflict();} </script></head><body><div class="topframe"><div class="topframe_left"><img src="https://pics.cdn.librarything.com//pics/LT-litebrown-16.gif">From LibraryThing.com</div></div><div class="smallcontent" id="mini_work_box"><div class="thumbnail"><img src="https://images-na.ssl-images-amazon.com/images/P/0062498533.01._SX200_SY250_SCLZZZZZZZ_.jpg"><div class="booklinks"><a href="http://www.amazon.com/exec/obidos/ASIN/0062498533/ref=nosim/" target="_top"><div><img src="https://pics.cdn.librarything.com/pics/fav-amazon.gif" alt="">Amazon.com</div></a><a href="https://www.librarything.com/work/book/194852326" target="_top"><div><img src="https://pics.cdn.librarything.com//pics/LT-litebrown-16.gif" alt="">LibraryThing</div></a></div></div><h1><a href="https://www.librarything.com/work/book/194852326" target="_top">The Hate U Give</a></h1><h2>by <a href="https://www.librarything.com/author/thomasangie" target="_top">Angie Thomas</a></h2><div class="info"><h3>Member: <a href="https://www.librarything.com/profile/kylekarpack" target="_top">kylekarpack</a></h3><p><b>Added:</b> Jan 6, 2021</p><p><b>Tags:</b> <a href="https://www.librarything.com/tag/read" target="_top">read</a></p><p style="margin-top:-3px; white-space: nowrap;"><b>Rating:</b> <span id="rate-u_a61a4e8b" class="rating rating-style-0" style="white-space:nowrap;padding:0px;margin:0px;vertical-align:top !important;"><span class="rw"><input type="hidden" value="10" name="form_rating" id="form_rating"/><img src="https://image.librarything.com/pics/s-s.gif" alt="*" /><img src="https://image.librarything.com/pics/s-s.gif" alt="*" /><img src="https://image.librarything.com/pics/s-s.gif" alt="*" /><img src="https://image.librarything.com/pics/s-s.gif" alt="*" /><img src="https://image.librarything.com/pics/s-s.gif" alt="*" /></span></span></p><p><b>ISBN:</b> 0062498533</p></div><div class="info"><h3>All LibraryThing Members:</h3><p><b>Members:</b> 5,207 (#1,490)</p><p><b>Reviews:</b> 340 (<a href="https://www.librarything.com/work/18690995/reviews" target="_top">read</a>)<p style="margin-top:-3px; white-space: nowrap;"><b>Avg. rating:</b> <span id="rate-u_1502571c" class="rating rating-style-0" style="white-space:nowrap;padding:0px;margin:0px;vertical-align:top !important;"><span class="rw"><input type="hidden" value="8.9435" name="form_rating" id="form_rating"/><img src="https://image.librarything.com/pics/s-s.gif" alt="*" /><img src="https://image.librarything.com/pics/s-s.gif" alt="*" /><img src="https://image.librarything.com/pics/s-s.gif" alt="*" /><img src="https://image.librarything.com/pics/s-s.gif" alt="*" /><img src="https://image.librarything.com/pics/s-g3.gif" alt=" " /></span></span> (4.47)</p><p><b>Popular tags:</b> <a href="https://www.librarything.com/tag/to-read" target="_top">to-read</a>, <a href="https://www.librarything.com/tag/fiction" target="_top">fiction</a>, <a href="https://www.librarything.com/tag/young+adult" target="_top">young adult</a>, <a href="https://www.librarything.com/tag/racism" target="_top">racism</a>, <a href="https://www.librarything.com/tag/YA" target="_top">YA</a>, <a href="https://www.librarything.com/tag/police+brutality" target="_top">police brutality</a>, <a href="https://www.librarything.com/tag/Black+Lives+Matter" target="_top">Black Lives Matter</a>, <a href="https://www.librarything.com/tag/African+American" target="_top">African American</a>, <a href="https://www.librarything.com/tag/race+relations" target="_top">race relations</a>, <a href="https://www.librarything.com/tag/race" target="_top">race</a></p></div></body></html>`;

describe("testing book details", () => {
	beforeEach(() => {
		fetch.resetMocks();
		fetch.mockResponseOnce(html);
	});

	it("renders without crashing", () => {
		const shelf = shallow(<BookDetails />);
		expect(shelf).toMatchSnapshot();
	});

	it("passes props properly", async () => {
		const book = { book_id: 1 };
		await act(async () => {
			const shelf = mount(<BookDetails book={book} />);
			const props = shelf.props();
			expect(props.book).toEqual(book);
		});
	});
});
