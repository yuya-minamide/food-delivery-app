import { FoodDetail, HomeFoodCard } from "@/components";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

const MenuContainer = styled.div`
	padding-top: 120px;
	text-align: center;
`;

const MenuTittle = styled.h1`
	text-decoration: underline;
	text-align: center;
	margin-bottom: 40px;
	font-family: "Kalam", cursive;
`;

const SearchBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;

	@media (max-width: 960px) {
		padding: 0 20px;
	}
`;

const SearchIcon = styled(BsSearch)`
	font-size: 1.5rem;
	margin-right: 10px;
`;

const SearchInput = styled.input`
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
	width: 100%;
	max-width: 400px;
	font-size: 1rem;
	color: #666;
`;

const NoFoodMessage = styled.div`
	margin-top: 30px;
	font-size: 1.2rem;
`;

const CardsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: ${(props) => (props.noItemsLessThanFour ? "center" : "space-between")};
	padding: 30px 40px;
	gap: 20px;

	@media (max-width: 960px) {
		justify-content: center;

		@media (max-width: 520px) {
			padding: 20px;
		}
	}
`;

const CardContainer = styled.div`
	flex: 0 1 calc(24% - 10px);
	margin-bottom: 20px;

	@media (max-width: 960px) {
		flex: 0 1 calc(48% - 10px);

		@media (max-width: 520px) {
			flex: 0 1 95%;
		}
	}
`;

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
							<HomeFoodCard food={food} />
						</CardContainer>
					))}
				</CardsWrapper>
			)}
			{selectedFood && <FoodDetail selectedFood={selectedFood} onClose={handleFoodDetailClose} />}
		</MenuContainer>
	);
}
