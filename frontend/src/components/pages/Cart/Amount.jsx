import { clearCart } from "@/redux/foodSlice";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { AmountContainer } from "@/styles/components/pages/Cart/AmountStyle";

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
