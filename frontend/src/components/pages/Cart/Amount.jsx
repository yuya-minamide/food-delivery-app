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
	const user = userData._id || storeData._id;

	console.log(foodCartItem);

	const handleBuy = () => {
		if (user) {
			fetch(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/create-checkout-session`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					foodCartItem,
					userId: user,
				}),
			})
				.then((response) => response.json())
				.then((data) => {
					if (data.url) {
						window.location.href = data.url;
					}
				})
				.catch((err) => console.log(err.message));

			dispatch(clearCart());
		} else {
			toast.error("You need to login to make a order!");
			router.push("/login");
		}
	};

	return (
		<AmountContainer>
			<p>Total quantity: {totalQuantity}</p>
			<p>Total amount: ${totalAmount}</p>
			<button disabled={totalQuantity === 0} onClick={handleBuy}>
				Buy
			</button>
		</AmountContainer>
	);
}
