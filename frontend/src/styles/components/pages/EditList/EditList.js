import Image from "next/image";
import styled from "styled-components";

export const EditListContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 2rem;
	border: solid 1px #b7b7b7;
	padding: 10px 20px;
	margin: 12px 0;

	@media screen and (max-width: 520px) {
		flex-direction: column;
	}
`;

export const FoodContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 2rem;

	@media screen and (max-width: 520px) {
		flex-direction: column;
		gap: 0.6rem;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	@media screen and (max-width: 520px) {
		justify-content: center;
	}

	button,
	a {
		font-family: "Lora", serif;
		padding: 10px 14px;
		margin: 0 14px;
		background-color: #000;
		color: #fff;
		border-radius: 8px;
		font-weight: bold;
		font-size: 0.8rem;

		&:hover {
			color: #000;
			background-color: #f59f00;
		}
	}
`;

export const FoodImage = styled(Image)`
	height: 70px;
	width: 90px;

	@media (max-width: 520px) {
		width: 80%;
		text-align: center;
		margin: 0 auto;
	}
`;
