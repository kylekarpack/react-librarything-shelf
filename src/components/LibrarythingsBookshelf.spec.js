import { mount, shallow } from "enzyme";
import React from "react";
import { act } from "react-dom/test-utils";
import LibrarythingsBookshelf from "./LibrarythingsBookshelf";

describe("testing bookshelf", () => {
	beforeEach(() => {
		fetch.resetMocks();
		fetch.mockResponseOnce(
			JSON.stringify({ GoodreadsResponse: { reviews: { review: [] } } })
		);
	});

	it("renders without crashing", () => {
		const shelf = shallow(<LibrarythingsBookshelf />);
		expect(shelf).toMatchSnapshot();
	});

	it("passes props properly", async () => {
		await act(async () => {
			const shelf = mount(
				<LibrarythingsBookshelf
					apiKey="test"
					userId="testUser"
					limit={15}
					shelf="read"
					sort="date_read"
				/>
			);

			const props = shelf.props();
			expect(props.limit).toEqual(15);
			expect(props.userId).toEqual("testUser");
			expect(props.apiKey).toEqual("test");
			expect(props.shelf).toEqual("read");
			expect(props.sort).toEqual("date_read");
		});
	});
});
