import { FoodDetail, FoodCard } from "@/components";
import { useState } from "react";
import {
	CardContainer,
	CardsWrapper,
	NoFoodMessage,
	MenuContainer,
	MenuTittle,
	SearchBar,
	SearchIcon,
	SearchInput,
} from "@/styles/components/pages/Menu/MenuContentStyle";

export function MenuContent({ foodData }) {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedFood, setSelectedFood] = useState(null);

	const filteredFoodData = Array.isArray(foodData.foodList)
		? foodData.foodList.filter(
				(food) =>
					food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
					food.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
					food.restaurantname.toLowerCase().includes(searchQuery.toLowerCase())
		  )
		: [];

	const handleSearchInputChange = (event) => {
		setSearchQuery(event.target.value);
	};

	const handleFoodClick = (food) => {
		setSelectedFood(food);
	};

	const handleFoodDetailClose = () => {
		setSelectedFood(null);
	};

	return (
		<MenuContainer>
			<MenuTittle>Menu</MenuTittle>
			<SearchBar>
				<SearchIcon />
				<SearchInput type="text" value={searchQuery} onChange={handleSearchInputChange} placeholder="Search for food" />
			</SearchBar>
			{filteredFoodData.length === 0 ? (
				<NoFoodMessage>No foods...</NoFoodMessage>
			) : (
				<CardsWrapper noItemsLessThanFour={filteredFoodData.length < 4}>
					{filteredFoodData.map((food, idx) => (
						<CardContainer key={idx} onClick={() => handleFoodClick(food)}>
							<FoodCard food={food} />
						</CardContainer>
					))}
				</CardsWrapper>
			)}
			{selectedFood && <FoodDetail selectedFood={selectedFood} onClose={handleFoodDetailClose} />}
		</MenuContainer>
	);
}
