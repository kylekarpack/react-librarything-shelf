# react-librarything-shelf
![build](https://github.com/kylekarpack/react-librarything-shelf/workflows/build/badge.svg) ![CodeQL](https://github.com/kylekarpack/react-librarything-shelf/workflows/CodeQL/badge.svg) 
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=kylekarpack_react-librarything-shelf&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=kylekarpack_react-librarything-shelf) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=kylekarpack_react-librarything-shelf&metric=coverage)](https://sonarcloud.io/dashboard?id=kylekarpack_react-librarything-shelf)

This React component allows you to display a user's librarything books a React application. It's a lot like the LibraryThing JavaScript widget, but allows for more customization, better async loading, and React-like usage.

![Example image](/sample/sample.png)

## Installation

```
npm install --save react-librarything-shelf
```
or
```
yarn add react-librarything-shelf
```

## Usage

```jsx
import React from "react";
import { LibrarythingBookshelf } from "react-librarything-shelf";

export default function App() {
	return (
		<LibrarythingBookshelf userId="USER_ID_HERE" apiKey="API_KEY_HERE" />
	);
}
```

## Customization

You can also set some options as supported by the Goodreads API:

| Option | Type | Description | Default |
| ------ | ---- | ----------- | ------- |
| sort  | string | The order in which to sort the results returned | entry_REV
| max  | number | The maximum number of books to be returned | 10
| showDetails  | boolean | Show the author and title | false
| reviewsOnly  | boolean | Show only books with review | false
| tagList  | string | Comma-separated tags to filter by | ""
| width | number | Minimum width allowed for each book | 100
| details | boolean | Whether to show book details like book title, author, and summary | false

## Development
- `yarn start` to watch changes and build
- `yarn storybook` to launch storybook for testing
