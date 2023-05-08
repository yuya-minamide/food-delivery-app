import { useState } from "react";
import { HomeFoodCard } from "../../index";
import styled from "styled-components";

const SelectFoodContainer = styled.div`
	margin-top: 60px;
`;

const SelectTittle = styled.h1`
	text-decoration: underline;
	text-align: center;
	margin-bottom: 20px;
	font-family: "Kalam", cursive;
`;

const CardsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 30px 20px;
	gap: 20px;

	@media (max-width: 960px) {
		justify-content: center;
	}
`;

const CardContainer = styled.div`
	flex: 0 1 calc(24% - 10px);
	margin-bottom: 20px;

	@media (max-width: 960px) {
		flex: 0 1 calc(48% - 10px);
	}

	@media (max-width: 520px) {
		flex: 0 1 95%;
	}
`;

const SeeMoreButtonContainer = styled.div`
	text-align: center;
	button {
		color: #fff;
		background-color: #05011e;
    border: solid 1px; #FFF;
    border-radius: 16px;
    padding: 20px 80px;
    font-size: 1.2rem;

    &:hover {
      opacity: 0.8;
    }
	}
`;

export function SelectFood({ foodData }) {
	const [numCards, setNumCards] = useState(8);

	const handleSeeMoreClick = () => {
		setNumCards(numCards + 8);
	};

	const foodsToDisplay = Array.isArray(foodData.foodList) ? foodData.foodList.slice(0, numCards) : [];

	return (
		<SelectFoodContainer>
			<SelectTittle>Select foods</SelectTittle>
			<CardsWrapper>
				{foodsToDisplay.map((food, idx) => (
					<CardContainer key={idx}>
						<HomeFoodCard food={food} />
					</CardContainer>
				))}
			</CardsWrapper>

			<SeeMoreButtonContainer>
				<button onClick={handleSeeMoreClick}>See more</button>
			</SeeMoreButtonContainer>
		</SelectFoodContainer>
	);
}
