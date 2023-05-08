import Image from "next/image";
import styled from "styled-components";

const FoodCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	background-color: #8080807c;
	padding: 14px;
	margin-bottom: 20px;
	border-radius: 10px;
	cursor: pointer;
	transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

	&:hover {
		transform: scale(1.05);
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
	}
`;

const FoodImage = styled(Image)`
	height: 150px;
`;

const FoodName = styled.p`
	margin: 12px 0;
	font-size: 1.4rem;
`;

const FoodPrice = styled.p`
	color: red;
`;

export function HomeFoodCard({ food }) {
	console.log(food);
	return (
		<FoodCardContainer>
			<FoodImage src={food.image} width={300} height={300} alt="food-image" />
			<FoodName>{food.name}</FoodName>
			<FoodPrice>${food.price}</FoodPrice>
		</FoodCardContainer>
	);
}
