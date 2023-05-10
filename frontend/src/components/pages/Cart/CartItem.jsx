import Image from "next/image";
import { decreaseQty, deleteCartItem, increaseQty } from "@/redux/foodSlice";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const CartItemContainer = styled.div`
	padding: 14px;
	margin: 15px 0;
	background-color: #bababa2a;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	@media (max-width: 520px) {
		flex-direction: column;
		text-align: center;
	}
`;

const FoodImage = styled(Image)`
	height: 100px;
	width: 120px;

	@media (max-width: 520px) {
		width: 80%;
		text-align: center;
		margin: 0 auto;
	}
`;

const ItemInformations = styled.div`
	width: 40%;
	text-align: left;
	@media (max-width: 520px) {
		width: 100%;
		text-align: center;
		margin: 14px 0;
	}
`;

const ItemInformation = styled.p`
	border-bottom: solid 1px #000;

	span {
		font-weight: bold;
	}
`;

const CounterContainer = styled.div`
	width: 20%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 20px;

	@media (max-width: 520px) {
		width: 100%;
	}

	button {
		padding: 6px;
		border-radius: 6px;
		background-color: #fff;
		border: solid 1px #000;

		&:hover {
			color: #f59f00;
			border: solid 1px #f59f00;
		}
	}
`;

export function CartItem({ id, name, image, price, qty, total }) {
	const dispatch = useDispatch();

	return (
		<CartItemContainer>
			<FoodImage src={image} width={300} height={300} alt="food-image" />
			<ItemInformations>
				<ItemInformation>
					Food Name: <span>{name}</span>{" "}
				</ItemInformation>
				<ItemInformation>
					Price: <span>${price}</span>{" "}
				</ItemInformation>
				<ItemInformation>
					Quantity: <span>{qty}P</span>{" "}
				</ItemInformation>
				<ItemInformation>
					Total amount: <span>${total}</span>{" "}
				</ItemInformation>
			</ItemInformations>
			<CounterContainer>
				<button onClick={() => dispatch(increaseQty(id))}>
					<AiOutlinePlus />
				</button>
				<button onClick={() => dispatch(decreaseQty(id))}>
					<AiOutlineMinus />
				</button>
				<button onClick={() => dispatch(deleteCartItem(id))}>
					<AiOutlineDelete />
				</button>
			</CounterContainer>
		</CartItemContainer>
	);
}
