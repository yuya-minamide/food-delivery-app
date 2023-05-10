import { FoodCardContainer, FoodImage, FoodName, FoodPrice } from "@/styles/components/common/FoodCard/FoodCardStyle";

export function FoodCard({ food }) {
	return (
		<FoodCardContainer>
			<FoodImage src={food.image} width={300} height={300} alt="food-image" />
			<FoodName>{food.name}</FoodName>
			<FoodPrice>${food.price}</FoodPrice>
		</FoodCardContainer>
	);
}
