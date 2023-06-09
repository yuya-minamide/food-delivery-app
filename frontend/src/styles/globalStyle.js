import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@font-face {
	font-family: "Lora", serif;
	src: url("https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&display=swap");
}

@font-face {
	font-family: "Kalam", cursive;
	src: url("https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap");
}

* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	border: 0;
	outline: 0;
	list-style: none;
}

html {
	scroll-behavior: smooth;
}

::-webkit-scrollbar {
	display: none;
}

body {
	font-family: "Lora", serif;
	/* color: #fff;
	background: #05011e; */
	color: #000;
	background: #fff;
	max-width: 100vw;
	overflow-x: hidden;
}

a {
	color: inherit;
	text-decoration: none;
}

h1,
h2,
h3,
h4,
h5 {
	font-weight: 500;
}

p {
	letter-spacing: 1px;
	line-height: 1.5;
}
img {
	display: block;
	width: 100%;
	object-fit: cover;
}

button {
	cursor: pointer;
	transition: all 0.2s ease;
}
`;
