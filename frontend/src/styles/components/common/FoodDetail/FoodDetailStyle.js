import Image from "next/image";
import styled from "styled-components";

export const FoodDetailContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.295);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
	overflow: hidden;
`;

export const DetailCard = styled.div`
	background-color: #ffffffe2;
	padding: 30px;
	margin: 0 28%;
	border-radius: 8px;
	text-align: center;

	@media (max-width: 960px) {
		margin: 0 10%;

		@media (max-width: 520px) {
			margin: 0;
		}
	}

	h1 {
		text-decoration: underline;
		text-align: center;
		margin-bottom: 20px;
		font-family: "Kalam", cursive;
	}

	h2 {
		margin: 10px 0 6px 0;
	}

	p {
		margin-bottom: 20px;
	}
`;

export const FoodImage = styled(Image)`
	height: 150px;
`;

export const DetailButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 10px;

	@media (max-width: 520px) {
		flex-direction: column;
	}

	button {
		font-family: "Lora", serif;
		border: solid 1px #fff;
		border-radius: 10px;
		padding: 10px 30px;
		font-size: 1.2rem;
		margin-right: 10px;
	}
`;

export const AddCartButton = styled.button`
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
