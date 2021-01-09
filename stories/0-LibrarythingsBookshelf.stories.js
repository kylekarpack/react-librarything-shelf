import React from "react";
import { LibrarythingsBookshelf } from "../dist/index";

const sorts = [
	"random",
	"entry",
	"entry_REV",
	"title",
	"title_REV",
	"author",
	"author_REV"
];

const shelves = ["read", "currently-reading", "to-read"];

export default {
	title: "LibrarythingsBookshelf",
	component: LibrarythingsBookshelf,
	argTypes: {
		userId: {
			name: "User ID",
			defaultValue: "kylekarpack",
			control: {
				type: "text",
			},
		},
		apiKey: {
			name: "API Key",
			defaultValue: "1921368573",
			control: {
				type: "text",
			},
		},
		width: {
			name: "Book Width",
			defaultValue: 100,
			control: {
				type: "number",
				min: 20,
				max: 400,
			},
		},
		details: {
			name: "Details",
			defaultValue: false,
			control: {
				type: "boolean",
			},
		},
		limit: {
			name: "Number of Books",
			defaultValue: 10,
			control: {
				type: "number",
				min: 1,
				max: 50,
			},
		},
		shelf: {
			name: "Shelf Name",
			defaultValue: "read",
			control: {
				type: "select",
				options: shelves
			},
		},
		sort: {
			name: "Sort Field",
			defaultValue: "entry_REV",
			control: {
				type: "select",
				options: sorts,
			},
		},
		order: {
			name: "Order",
			defaultValue: "d",
			control: {
				type: "inline-radio",
				options: ["a", "d"],
			},
		},
		search: {
			name: "Search Text",
			defaultValue: "",
			control: {
				type: "text",
			},
		},
	},
};

export const Story = (args) => <LibrarythingsBookshelf {...args} />;
