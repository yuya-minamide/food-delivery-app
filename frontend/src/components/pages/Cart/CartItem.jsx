import { decreaseQty, deleteCartItem, increaseQty } from "@/redux/foodSlice";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
	CartItemContainer,
	CounterContainer,
	FoodImage,
	ItemInformation,
	ItemInformations,
} from "@/styles/components/pages/Cart/CartItemStyle";

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
