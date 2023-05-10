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

// import { useDispatch, useSelector } from "react-redux";
// import styled from "styled-components";
// import { addCartItem, deleteCartItem } from "@/redux/foodSlice";

// const CartContainer = styled.div`
// 	padding-top: 120px;
// 	text-align: center;
// `;

// const ItemContainer = styled.div`
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	padding: 10px;
// 	margin-bottom: 10px;
// 	border: 1px solid #ccc;
// `;

// const ItemInfo = styled.div`
// 	display: flex;
// 	align-items: center;
// `;

// const ItemImage = styled.img`
// 	width: 50px;
// 	height: 50px;
// 	margin-right: 10px;
// `;

// const ItemQuantity = styled.div`
// 	display: flex;
// 	align-items: center;
// `;

// export function CartContent() {
// 	const foodCartItem = useSelector((state) => state.food.cartItem);
// 	console.log(foodCartItem);

// 	return (
// 		<CartContainer>
// 			<h1>Cart items</h1>
// 			<div>
// 				{foodCartItem.map((item, index) => (
// 					<CartItem key={index} item={item} />
// 				))}
// 			</div>
// 		</CartContainer>
// 	);
// }

// function CartItem({ item }) {
// 	const dispatch = useDispatch();

// 	const handleIncrement = () => {
// 		dispatch(addCartItem({ ...item, quantity: 1 }));
// 	};

// 	const handleDecrement = () => {
// 		dispatch(deleteCartItem(item));
// 	};

// 	return (
// 		<ItemContainer>
// 			<ItemInfo>
// 				<ItemImage src={item.image} alt={item.name} />
// 				<div>
// 					<p>{item.name}</p>
// 					<p>${item.price}</p>
// 				</div>
// 			</ItemInfo>
// 			<ItemQuantity>
// 				<button onClick={handleIncrement}>+</button>
// 				<span>{item.quantity}</span>
// 				<button onClick={handleDecrement}>-</button>
// 			</ItemQuantity>
// 		</ItemContainer>
// 	);
// }
