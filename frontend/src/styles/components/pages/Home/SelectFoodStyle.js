import styled from "styled-components";

export const SelectFoodContainer = styled.div`
	margin-top: 60px;
`;

export const SelectTittle = styled.h1`
	text-decoration: underline;
	text-align: center;
	margin-bottom: 20px;
	font-family: "Kalam", cursive;
`;

export const CardsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 30px 20px;
	gap: 20px;

	@media (max-width: 960px) {
		justify-content: center;
	}
`;

export const CardContainer = styled.div`
	flex: 0 1 calc(24% - 10px);
	margin-bottom: 20px;

	@media (max-width: 960px) {
		flex: 0 1 calc(48% - 10px);
	}

	@media (max-width: 520px) {
		flex: 0 1 95%;
	}
`;

export const SeeMoreButtonContainer = styled.div`
	text-align: center;
	button {
		font-family: "Lora", serif;
		color: #fff;
		background-color: #05011e;
		border-radius: 16px;
		padding: 20px 80px;
		font-size: 1.2rem;
		cursor: pointer;
		transition: all 0.2s ease;

		&:hover {
			color: #000;
			background-color: #f59f00;
		}
	}
`;
