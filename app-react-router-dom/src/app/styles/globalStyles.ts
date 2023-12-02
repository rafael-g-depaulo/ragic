import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
	font-family: 'roboto', 'Roboto', sans-serif;
}

html, body {
	padding: 0;
	margin: 0;
}

body {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	> * {
		flex-grow: 0;
	}

	> #root {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
	}
}

h1, h2, h3, h4, h5, h6 {
	margin-top: 0
}
`
