import { useState } from "react";
import { FoodDetail, FoodCard } from "../../index";
import {
	CardContainer,
	CardsWrapper,
	SeeMoreButtonContainer,
	SelectFoodContainer,
	SelectTittle,
} from "@/styles/components/pages/Home/SelectFoodStyle";

export function SelectFood({ foodData }) {
	const [numCards, setNumCards] = useState(8);
	const [selectedFood, setSelectedFood] = useState(null);

	const handleSeeMoreClick = () => {
		setNumCards(numCards + 8);
	};

	const handleFoodClick = (food) => {
		setSelectedFood(food);
	};

	const handleFoodDetailClose = () => {
		setSelectedFood(null);
	};

	const foodsToDisplay = Array.isArray(foodData.foodList) ? foodData.foodList.slice(0, numCards) : [];

	return (
		<SelectFoodContainer>
			<SelectTittle>Select foods</SelectTittle>
			<CardsWrapper>
				{foodsToDisplay.map((food, idx) => (
					<CardContainer key={idx} onClick={() => handleFoodClick(food)}>
						<FoodCard food={food} />
					</CardContainer>
				))}
			</CardsWrapper>

			<SeeMoreButtonContainer>
				<button onClick={handleSeeMoreClick}>See more</button>
			</SeeMoreButtonContainer>
			{selectedFood && <FoodDetail selectedFood={selectedFood} onClose={handleFoodDetailClose} />}
		</SelectFoodContainer>
	);
}
