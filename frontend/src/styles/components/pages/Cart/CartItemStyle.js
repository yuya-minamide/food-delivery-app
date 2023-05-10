import Image from "next/image";
import styled from "styled-components";

export const CartItemContainer = styled.div`
	padding: 14px;
	margin: 15px 0;
	background-color: #bababa2a;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	@media (max-width: 520px) {
		flex-direction: column;
		text-align: center;
	}
`;

export const FoodImage = styled(Image)`
	height: 100px;
	width: 120px;

	@media (max-width: 520px) {
		width: 80%;
		text-align: center;
		margin: 0 auto;
	}
`;

export const ItemInformations = styled.div`
	width: 40%;
	text-align: left;
	@media (max-width: 520px) {
		width: 100%;
		text-align: center;
		margin: 14px 0;
	}
`;

export const ItemInformation = styled.p`
	border-bottom: solid 1px #000;

	span {
		font-weight: bold;
	}
`;

export const CounterContainer = styled.div`
	width: 20%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 20px;

	@media (max-width: 520px) {
		width: 100%;
	}

	button {
		padding: 6px;
		border-radius: 6px;
		background-color: #fff;
		border: solid 1px #000;

		&:hover {
			color: #f59f00;
			border: solid 1px #f59f00;
		}
	}
`;
