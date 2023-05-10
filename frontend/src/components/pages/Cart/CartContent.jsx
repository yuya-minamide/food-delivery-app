import { Amount, CartItem } from "@/components";
import { useSelector } from "react-redux";
import {
	CartContainer,
	CartTittle,
	ContentsWrapper,
	ItemsContainer,
	NoFoodContainer,
} from "@/styles/components/pages/Cart/CartContentStyle";

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
