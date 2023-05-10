import styled from "styled-components";

export const CartContainer = styled.div`
	padding-top: 120px;
	text-align: center;
`;

export const CartTittle = styled.h1`
	font-family: "Kalam", cursive;
	text-decoration: underline;
	margin-bottom: 40px;
`;

export const ContentsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	@media (max-width: 960px) {
		flex-direction: column;
	}
`;

export const ItemsContainer = styled.div`
	width: 50%;
	margin: 0 20px;

	@media (max-width: 960px) {
		width: 100%;
		margin: 0;
		padding: 0 20px;
		margin-bottom: 40px;
	}
`;

export const NoFoodContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;

	div {
		font-size: 2rem;
		font-family: "Kalam", cursive;
	}
`;
