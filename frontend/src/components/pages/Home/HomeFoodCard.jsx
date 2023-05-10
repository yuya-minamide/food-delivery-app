import Image from "next/image";
import styled from "styled-components";

const FoodCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: left;
	margin-bottom: 20px;
	cursor: pointer;
	transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

	&:hover {
		transform: scale(1.02);
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
	}
`;

const FoodImage = styled(Image)`
	height: 200px;
`;

const FoodName = styled.p`
	margin: 12px 0 12px 12px;
	font-size: 1.4rem;
`;

const FoodPrice = styled.p`
	margin: 0 0 12px 12px;
`;

export function HomeFoodCard({ food }) {
	return (
		<FoodCardContainer>
			<FoodImage src={food.image} width={300} height={300} alt="food-image" />
			<FoodName>{food.name}</FoodName>
			<FoodPrice>${food.price}</FoodPrice>
		</FoodCardContainer>
	);
}
