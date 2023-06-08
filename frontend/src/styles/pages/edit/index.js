import styled from "styled-components";

export const Title = styled.h1`
	padding: 100px 0 30px 0;
	text-align: center;
	text-decoration: underline;
`;

export const Container = styled.div`
	width: 100%;
	height: 100%;
`;

export const FormContainer = styled.div`
	background-color: #bababa2a;
	border: 1px solid #808080;
	border-radius: 10px;
	padding: 40px 100px;
	margin: 0 auto;
	width: 600px;

	@media screen and (max-width: 520px) {
		padding: 80px 20px 0 20px;
		width: 100%;
		height: 100%;
	}

	div {
		display: flex;
		flex-direction: column;
		margin-bottom: 30px;

		label {
			text-align: left;
			margin-bottom: 10px;
			font-weight: bold;
		}

		input,
		select,
		textarea {
			padding: 8px 12px;
			border: solid 1px #808080;
			border-radius: 6px;
		}

		select,
		div {
			cursor: pointer;
		}

		div {
			border: solid 1px #808080;
			background-color: #d5d5d5;
			border-radius: 6px;
			padding: 30px 60px;
			text-align: center;
			margin-top: 10px;

			svg {
				font-size: 1.6rem;
				color: #808080;
			}

			input {
				opacity: 0;
				cursor: pointer;
			}
		}
	}

	button {
		font-family: "Lora", serif;
		border: none;
		display: block;
		width: 80%;
		padding: 12px 20px;
		margin: 20px auto;
		border-radius: 10px;
		font-size: 1.2rem;
		font-weight: bold;
	}
`;

export const SaveButton = styled.button`
	color: #000;
	background-color: #faac1a;

	&:hover {
		color: #000;
		background-color: #f59f00;
	}
`;

export const BackButton = styled.button`
	color: #fff;
	background-color: #05011e;

	&:hover {
		color: #000;
		background-color: #f59f00;
	}
`;
