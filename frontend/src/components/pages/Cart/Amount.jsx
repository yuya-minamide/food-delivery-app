import { clearCart } from "@/redux/foodSlice";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const AmountContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 300px;
	background-color: #80808048;
	padding: 0 40px;

	p {
		font-size: 2rem;
		text-align: left;
		border-bottom: solid 1px #fff;
		margin-bottom: 10px;

		@media (max-width: 520px) {
			font-size: 1.2rem;
		}
	}

	button {
		margin-top: 40px;
		padding: 10px 0;
		border-radius: 8px;
		font-weight: bold;
		font-size: 1.2rem;

		&:hover {
			opacity: 0.8;
			cursor: pointer;
		}
	}
`;

export function Amount() {
	const foodCartItem = useSelector((state) => state.food.cartItem);
	const totalQuantity = foodCartItem.reduce((acc, item) => acc + item.qty, 0);
	const totalAmount = foodCartItem.reduce((acc, item) => acc + Number(item.total), 0);
	const userData = useSelector((state) => state.user);
	const storeData = useSelector((state) => state.store);
	const dispatch = useDispatch();
	const router = useRouter();

	const handleBuy = () => {
		if (storeData.storeName || userData.nickName) {
			dispatch(clearCart());
			toast.success("Order successful!");
		} else {
			toast.error("You need to login to make a order!");
			router.push("/login");
		}
	};

	return (
		<AmountContainer>
			<p>Total quantity: {totalQuantity}</p>
			<p>Total amount: ${totalAmount}</p>

			<button onClick={handleBuy}>Buy</button>
		</AmountContainer>
	);
}
