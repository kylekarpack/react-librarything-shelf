import React from "react";
import { LibrarythingBookshelf } from "../dist/index";

const sorts = [
	"random",
	"entry",
	"entry_REV",
	"title",
	"title_REV",
	"author",
	"author_REV"
];

export default {
	title: "LibrarythingBookshelf",
	component: LibrarythingBookshelf,
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
			defaultValue: "7rem",
			control: {
				type: "text",
			},
		},
		showDetails: {
			name: "Details",
			defaultValue: false,
			control: {
				type: "boolean",
			},
		},
		reviewsOnly: {
			name: "Only Books with Reviews",
			defaultValue: false,
			control: {
				type: "boolean",
			},
		},
		tagList: {
			name: "Tag List",
			defaultValue: "read",
			control: {
				type: "text",
			},
		},
		max: {
			name: "Number of Books",
			defaultValue: 10,
			control: {
				type: "number",
				min: 1,
				max: 100,
			},
		},
		limit: {
			name: "Limit",
			control: {
				type: "select",
				options: ["", "bookswithstartorfinishdates"]
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
	},
};

export const Story = (args) => <LibrarythingBookshelf {...args} />;
