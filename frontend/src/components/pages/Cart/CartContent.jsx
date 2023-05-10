import { Amount, CartItem } from "@/components";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CartContainer = styled.div`
	padding-top: 120px;
	text-align: center;
`;

const CartTittle = styled.h1`
	font-family: "Kalam", cursive;
	text-decoration: underline;
	margin-bottom: 40px;
`;

const ContentsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	@media (max-width: 960px) {
		flex-direction: column;
	}
`;

const ItemsContainer = styled.div`
	width: 50%;
	margin: 0 20px;

	@media (max-width: 960px) {
		width: 100%;
		margin: 0;
		padding: 0 20px;
		margin-bottom: 40px;
	}
`;

const NoFoodContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;

	div {
		font-size: 2rem;
		font-family: "Kalam", cursive;
	}
`;

export function CartContent() {
	const foodCartItem = useSelector((state) => state.food.cartItem);

	return (
		<CartContainer>
			<CartTittle>Your cart</CartTittle>
			<ContentsWrapper>
				{foodCartItem.length === 0 ? (
					<ItemsContainer>
						<NoFoodContainer>
							<div>No food</div>
						</NoFoodContainer>
					</ItemsContainer>
				) : (
					<ItemsContainer>
						{foodCartItem.map((food) => {
							return (
								<CartItem
									key={food.id}
									id={food.id}
									name={food.name}
									image={food.image}
									price={food.price}
									qty={food.qty}
									total={food.total}
								/>
							);
						})}
					</ItemsContainer>
				)}

				<ItemsContainer>
					<Amount />
				</ItemsContainer>
			</ContentsWrapper>
		</CartContainer>
	);
}
